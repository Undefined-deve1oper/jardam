from rest_framework.routers import SimpleRouter

from . import views

router = SimpleRouter()

router.register('incidents', views.IncidentViewSet)
router.register('clients', views.ClientViewSet)
router.register('volunteers', views.VolunteerViewSet)

urlpatterns = router.urls