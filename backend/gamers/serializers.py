from rest_framework import serializers
from .models import Gamer


class GamerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gamer
        fields = ('url', 'username', 'level', 'score')
