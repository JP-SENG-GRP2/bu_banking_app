from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Account
from .serializers import AccountSerializer
from decimal import Decimal

class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if not username or not password:
            return Response({
                'error': 'Please provide both username and password'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(username=username, password=password)
        
        if user is None:
            return Response({
                'error': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)
        
        refresh = RefreshToken.for_user(user)
        
        # Get user's accounts
        accounts = Account.objects.filter(user=user)
        account_data = AccountSerializer(accounts, many=True).data
        
        return Response({
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_staff': user.is_staff,
            },
            'accounts': account_data,
            'access': str(refresh.access_token),
            'refresh': str(refresh)
        })

class UserAccountsView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        """
        Get the current user's profile and accounts
        """
        user = request.user
        accounts = Account.objects.filter(user=user)
        
        return Response({
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'is_staff': user.is_staff,
            },
            'accounts': AccountSerializer(accounts, many=True).data
        })

class UserRegistrationView(APIView):
    """
    API view for user registration with automatic account creation.
    Handles both GET (info) and POST (register).
    """
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
        return Response({
            "message": "Registration endpoint is working. Send a POST request to register.",
            "required_fields": ["username", "password"],
            "optional_fields": ["email", "first_name", "last_name"]
        })
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email', '')
        first_name = request.data.get('first_name', '')
        last_name = request.data.get('last_name', '')
        if not username or not password:
            return Response({"error": "Username and password are required"}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = User.objects.create_user(
                username=username,
                password=password,
                email=email,
                first_name=first_name,
                last_name=last_name
            )
            current_account = Account.objects.create(
                name=f"{first_name or username}'s Current Account",
                starting_balance=Decimal('1000.00'),
                round_up_enabled=False,
                user=user,
                account_type='current'
            )
            savings_account = Account.objects.create(
                name=f"{first_name or username}'s Savings Account",
                starting_balance=Decimal('0.00'),
                round_up_enabled=True,
                user=user,
                account_type='savings'
            )
            return Response({
                "message": "User registered successfully",
                "user_id": user.id,
                "accounts": [
                    {
                        "id": str(current_account.id),
                        "name": current_account.name,
                        "type": current_account.get_account_type_display(),
                        "balance": str(current_account.starting_balance)
                    },
                    {
                        "id": str(savings_account.id),
                        "name": savings_account.name,
                        "type": savings_account.get_account_type_display(),
                        "balance": str(savings_account.starting_balance)
                    }
                ]
            }, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({"error": f"Error creating user: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)