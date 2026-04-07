{
  "name": "Achievement",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title"
    },
    "title_kn": {
      "type": "string",
      "title": "Title (Kannada)"
    },
    "description": {
      "type": "string",
      "title": "Description"
    },
    "description_kn": {
      "type": "string",
      "title": "Description (Kannada)"
    },
    "category": {
      "type": "string",
      "title": "Category",
      "enum": [
        "Academic",
        "Sports",
        "Cultural",
        "Science",
        "Other"
      ]
    },
    "year": {
      "type": "string",
      "title": "Year"
    },
    "student_name": {
      "type": "string",
      "title": "Student Name"
    },
    "image_url": {
      "type": "string",
      "title": "Image URL"
    }
  },
  "required": [
    "title",
    "category",
    "year"
  ]
}