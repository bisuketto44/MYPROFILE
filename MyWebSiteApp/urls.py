from django.urls import path
from .views import indexview, languagesview, portfolioview

urlpatterns = [
    path('', indexview.as_view()),
    path('languages/', languagesview.as_view()),
    path('portfolio/', portfolioview.as_view()),
]
