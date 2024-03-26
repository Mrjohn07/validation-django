from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from home.models import Contact
from django.core.mail import send_mail
# from django.core.mail import send_mail
# Create your views here.
def home(request):
   return render(request, 'index.html')

def event(request):
   return render(request, 'event.html')

def contact(request):
   if request.method == "POST":
      name = request.POST['name']
      email = request.POST['email']
      number = request.POST['number']
      message = request.POST['message']
      subject = "Copy of form you submitted to UWL Nepalese Society"
      send_mail(
         subject,
         # name,#title
         message, #message
         'setting.EMAIL_HOST_USER', #email of sender
         [email], #receiver email
         fail_silently = False
      )
      ins = Contact(name=name, email=email, number=number, message=message)
      ins.save()

   return render(request, 'contact.html')

def members(request):
   return render(request, 'members.html')

def singlePageEvent(request):
   return render(request, 'single-page-event.html')

def allRecentEvents(request):
   return render(request, 'all-recent-events.html')