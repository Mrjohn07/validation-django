from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    number = models.CharField(max_length=15)    
    message = models.TextField()
    
    def __str__ (self):
        return self.name + " - " + self.email