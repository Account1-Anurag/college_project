from rest_framework import serializers
from .models import CustomUser, RawProblem, VerifiedProblem, Solution, Project

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'role', 'year', 'roll_number']

class RawProblemSerializer(serializers.ModelSerializer):
    submitted_by = UserSerializer(read_only=True)

    class Meta:
        model = RawProblem
        fields = ['id', 'title', 'description', 'submitted_by', 'submitted_on']

class VerifiedProblemSerializer(serializers.ModelSerializer):
    raw_problem = RawProblemSerializer(read_only=True)
    verified_by = UserSerializer(read_only=True)

    class Meta:
        model = VerifiedProblem
        fields = ['id', 'raw_problem', 'title', 'statement', 'verified_by', 'verified_on']

class SolutionSerializer(serializers.ModelSerializer):
    problem = VerifiedProblemSerializer(read_only=True)
    submitted_by = UserSerializer(read_only=True)
    verified_by = UserSerializer(read_only=True)

    problem_id = serializers.PrimaryKeyRelatedField(
        source='problem',
        queryset=VerifiedProblem.objects.all(),
        write_only=True
    )

    class Meta:
        model = Solution
        fields = [
            'id', 'problem', 'problem_id', 'content',
            'submitted_by', 'submitted_on',
            'verified', 'verified_by'
        ]

class ProjectSerializer(serializers.ModelSerializer):
    solution = SolutionSerializer(read_only=True)
    solution_id = serializers.PrimaryKeyRelatedField(
        source='solution',
        queryset=Solution.objects.all(),
        write_only=True
    )
    submitted_by = UserSerializer(read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'solution', 'solution_id',
            'github_link', 'youtube_link',
            'submitted_by', 'submitted_on', 'verified'
        ]
