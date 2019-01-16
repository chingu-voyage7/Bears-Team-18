from django.db import models

# Create your models here.
class Gamer(models.Model):
    username = models.CharField(max_length=50, unique=True)
    level = models.IntegerField()
    score = models.IntegerField()
