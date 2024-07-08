from django.db import models

class SubjectStatus(models.Model):
    status = models.CharField(max_length=100)

    def __str__(self):
        return self.status

    class Meta:
        verbose_name = "SubjectStatus"
        verbose_name_plural = "SubjectStatuses"


class Subject(models.Model):
    title = models.CharField("Subject name", max_length=200)
    description = models.TextField("Subject description")
    img = models.ImageField(upload_to="media")
    subjectstatus = models.ForeignKey(SubjectStatus, related_name="subjects", on_delete=models.CASCADE) 

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Subject"
        verbose_name_plural = "Subjects"
