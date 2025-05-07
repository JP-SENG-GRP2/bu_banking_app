"""
URLs for the banking app with additional diagnostic endpoints.
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.views import APIView
from rest_framework.response import Response
from .views import AccountViewSet, TransactionViewSet, BusinessViewSet
from .auth_views import LoginView, UserAccountsView, UserRegistrationView
from .template_views import register_api
from .test_view import TestView

# DRF router for RESTful resources
router = DefaultRouter()
router.register(r'accounts', AccountViewSet, basename='account')
router.register(r'transactions', TransactionViewSet, basename='transaction')
router.register(r'businesses', BusinessViewSet)

urlpatterns = [
    path('', include(router.urls)),

    # --- Auth Endpoints ---
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/login/', LoginView.as_view(), name='auth-login'),
    path('auth/register/', register_api, name='auth-register'),
    path('auth/user/', UserAccountsView.as_view(), name='user-accounts'),
    path('auth/logout/', lambda request: Response({'detail': 'Successfully logged out.'}), name='auth-logout'),

    # --- Registration and Test Endpoints ---
    path('simple-register/', UserRegistrationView.as_view(), name='user-registration'),
    path('test-view/', TestView.as_view(), name='banking-test-view'),
]

# --- API Documentation ---
from drf_yasg.views import get_schema_view
from drf_yasg import openapi 
from rest_framework.permissions import AllowAny 

schema_view = get_schema_view(
   openapi.Info(
      title="Banking API",
      default_version='v1',
      description="API documentation for Extra Credit Union",
   ),
   public=True,
   permission_classes=(AllowAny,),
)

urlpatterns += [
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
