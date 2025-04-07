from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RawProblemViewSet, SolutionViewSet, ProjectViewSet,
    VerifiedProblemListView, VerifiedSolutionListByProblemView
)

router = DefaultRouter()
router.register(r'rawproblems', RawProblemViewSet)
router.register(r'solutions', SolutionViewSet)
router.register(r'projects', ProjectViewSet)

urlpatterns = [
    path('api/', include(router.urls)),

    # ✅ New custom endpoints
    path('api/verified-problems/', VerifiedProblemListView.as_view(), name='verified-problem-list'),
    path('api/verified-problems/<int:problem_id>/solutions/', VerifiedSolutionListByProblemView.as_view(), name='verified-solutions-for-problem'),
]
