{
  "name": "Achievement",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title",
      "minLength": 3
    },
    "title_kn": {
      "type": "string",
      "title": "Title (Kannada)"
    },
    "description": {
      "type": "string",
      "title": "Description",
      "minLength": 10
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
      "title": "Year",
      "pattern": "^[0-9]{4}$"
    },
    "student_name": {
      "type": "string",
      "title": "Student Name",
      "minLength": 2
    },
    "image_url": {
      "type": "string",
      "title": "Image URL",
      "format": "uri"
    }
  },
  "required": [
    "title",
    "category",
    "year"
  ],
  "additionalProperties": false
}