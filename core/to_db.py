import json
from main.models import School  # Replace 'main' with the actual name of your Django app

# Step 1: Load the JSON data from the file
with open('schools.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

# Step 2: Iterate over the data and extract school names
for entry in data:
    school_name = entry.get('school')

    if school_name:
        # Step 3: Save each school name to the database
        School.objects.create(title=school_name)

print("All schools have been successfully added to the database!")
