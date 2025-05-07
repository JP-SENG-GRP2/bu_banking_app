from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

class TestView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, *args, **kwargs):
        return Response({
            "message": "Test view is working!",
            "path": request.path,
            "method": request.method
        }, status=status.HTTP_200_OK)
    def post(self, request, *args, **kwargs):
        return Response({
            "message": "Test view POST is working!",
            "data_received": request.data,
            "path": request.path,
            "method": request.method
        }, status=status.HTTP_200_OK) 