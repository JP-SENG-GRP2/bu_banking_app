"""
URL configuration for extra_credit_union project.
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('banking.urls')),  # All API endpoints
    path('admin/', admin.site.urls),        # Django admin
    path('', TemplateView.as_view(template_name='index.html')), 
]