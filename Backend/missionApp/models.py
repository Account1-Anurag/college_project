# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('public', 'Public User'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='public')
    roll_number = models.CharField(max_length=20, blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.username

class RawProblem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    submitted_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    submitted_on = models.DateTimeField(auto_now_add=True)

class VerifiedProblem(models.Model):
    raw_problem = models.ForeignKey(RawProblem, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    statement = models.TextField()
    verified_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name='verified_problems')
    verified_on = models.DateTimeField(auto_now_add=True)

class Solution(models.Model):
    problem = models.ForeignKey(VerifiedProblem, on_delete=models.CASCADE)
    content = models.TextField()
    submitted_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    submitted_on = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)
    verified_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True, related_name='verified_solutions')

class Project(models.Model):
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)
    github_link = models.URLField()
    youtube_link = models.URLField(blank=True, null=True)
    submitted_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    submitted_on = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)
