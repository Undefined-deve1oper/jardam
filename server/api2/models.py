
from django.db import models
from django.core.validators import MaxValueValidator
from django.utils import timezone


# Create your models here.
class Incident(models.Model):
    image = models.ImageField(upload_to='images/s', max_length=9999, default='')
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=128)
    region = models.CharField(max_length=70, default=None, null=True)
    goal_amount = models.PositiveIntegerField()
    raised_amount = models.PositiveIntegerField(default=0)
    critical = models.PositiveIntegerField(validators=[MaxValueValidator(100)])
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Client(models.Model):
    phone_number = models.CharField(max_length=14, unique=True)
    name = models.CharField(max_length=102)
    region = models.CharField(max_length=40)
    problem_text = models.TextField(max_length=255)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class Volunteer(models.Model):
    phone_number = models.CharField(max_length=14, unique=True)
    name = models.CharField(max_length=102)
    region = models.CharField(max_length=40)
    help_text = models.TextField(max_length=600)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
