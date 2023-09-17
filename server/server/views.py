from django.http import HttpResponseNotFound

def custom_404(request, exception):
    return HttpResponseNotFound('Route does not exist')
