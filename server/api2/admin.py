from django.contrib import admin

from .models import Incident

@admin.register(Incident)
class IncidentAdmin(admin.ModelAdmin):
    pass

