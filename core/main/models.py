from django.db import models
from django.core.validators import FileExtensionValidator

class Subject(models.Model):
    title = models.CharField("Subject name", max_length=200)
    description = models.TextField("Subject description")
    # img = models.ImageField(upload_to="media")
    # img = models.ImageField(upload_to="media/subjects", blank=True, null=True)
    img = models.FileField(upload_to="media/subjects", validators=[FileExtensionValidator(['svg'])])
    subjectstatus = models.BooleanField()
    link = models.CharField("link name", max_length=100)
    

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Subject"
        verbose_name_plural = "Subjects"


from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    school = models.CharField(max_length=100, blank=True, null=True)
    region = models.CharField(max_length=100, blank=True, null=True)