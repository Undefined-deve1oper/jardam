from rest_framework import status
from rest_framework.response import Response

from rest_framework.viewsets import ModelViewSet

from .models import Incident, Client, Volunteer
from .serializers import IncidentSerializer, ClientSerializer, VolunteerSerializer

from .utils import upload_image

class IncidentViewSet(ModelViewSet):
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        image = request.FILES.get('image')  # Получите файл изображения из запроса
        if image:
            secure_url = upload_image(image)
            serializer.validated_data['image'] = secure_url  # Обновите данные для изображения

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer


class VolunteerViewSet(ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


