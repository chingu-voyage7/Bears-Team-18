from django.shortcuts import render
from rest_framework import viewsets
from .models import Gamer
from .serializers import GamerSerializer


class GamerView(viewsets.ModelViewSet):
    queryset = Gamer.objects.all()
    serializer_class = GamerSerializer
