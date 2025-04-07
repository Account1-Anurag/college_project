from django.contrib import admin
from .models import CustomUser, RawProblem, VerifiedProblem, Solution, Project
from django.contrib.auth.admin import UserAdmin

admin.site.register(CustomUser, UserAdmin)
admin.site.register(RawProblem)
admin.site.register(VerifiedProblem)
admin.site.register(Solution)
admin.site.register(Project)
