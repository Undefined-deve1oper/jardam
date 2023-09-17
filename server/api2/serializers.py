from rest_framework.serializers import ModelSerializer, SerializerMethodField

from .models import Incident, Client, Volunteer

class IncidentSerializer(ModelSerializer):
    image = SerializerMethodField()
    class Meta:
        model = Incident
        fields = ('id', 'image', 'title', 'description', 'type', 'critical', 'goal_amount', 'raised_amount', 'createdAt', 'updatedAt')

    def get_image(self, obj):
        return obj.image.url

class ClientSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'name', 'phone_number', 'email', 'region', 'problem_text', 'createdAt', 'updatedAt')

class VolunteerSerializer(ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'name', 'phone_number', 'email', 'region', 'help_text', 'createdAt', 'updatedAt')
