from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import action
from ..models import Account
from ..serializers import AccountSerializer

class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    def get_queryset(self):
        if self.request.user.is_authenticated:
            if self.request.user.is_staff:
                return Account.objects.all()
            return Account.objects.filter(user=self.request.user)
        return Account.objects.none()
    def get_permissions(self):
        if self.action in ['list', 'retrieve', 'my_accounts', 'roundups', 'spending_trends', 'current_balance']:
            return [IsAuthenticated()]
        elif self.action in ['create', 'update', 'partial_update', 'destroy', 'manager_list']:
            return [IsAdminUser()]
        return [IsAuthenticated()]
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def my_accounts(self, request):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication required"}, status=status.HTTP_401_UNAUTHORIZED)
        accounts = Account.objects.filter(user=request.user)
        serializer = self.get_serializer(accounts, many=True)
        return Response(serializer.data) 