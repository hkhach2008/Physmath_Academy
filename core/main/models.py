from django.db import models
from django.core.validators import FileExtensionValidator
# class SubjectStatus(models.Model):
#     status = models.CharField(max_length=100)

#     def __str__(self):
#         return self.status

#     class Meta:
#         verbose_name = "SubjectStatus"
#         verbose_name_plural = "SubjectStatuses"


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
