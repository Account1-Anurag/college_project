from rest_framework import viewsets, permissions
from .models import RawProblem, Solution, Project
from .serializers import RawProblemSerializer, SolutionSerializer, ProjectSerializer
from rest_framework.permissions import IsAuthenticated
from .models import VerifiedProblem
from .serializers import VerifiedProblemSerializer, SolutionSerializer
from rest_framework import generics


class RawProblemViewSet(viewsets.ModelViewSet):
    queryset = RawProblem.objects.all()
    serializer_class = RawProblemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

class SolutionViewSet(viewsets.ModelViewSet):
    queryset = Solution.objects.all()
    serializer_class = SolutionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(submitted_by=self.request.user)

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

class VerifiedProblemListView(generics.ListAPIView):
    queryset = VerifiedProblem.objects.all()
    serializer_class = VerifiedProblemSerializer
    permission_classes = [IsAuthenticated]


# 2. Get verified solutions for a specific problem
class VerifiedSolutionListByProblemView(generics.ListAPIView):
    serializer_class = SolutionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        problem_id = self.kwargs['problem_id']
        return Solution.objects.filter(problem_id=problem_id, verified=True)