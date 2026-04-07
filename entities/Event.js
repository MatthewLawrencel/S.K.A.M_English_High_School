{
  "name": "Event",
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
    "date": {
      "type": "string",
      "format": "date",
      "title": "Date"
    },
    "category": {
      "type": "string",
      "title": "Category",
      "enum": [
        "Academic",
        "Sports",
        "Cultural",
        "Holiday",
        "Exam",
        "Other"
      ]
    },
    "image_url": {
      "type": "string",
      "title": "Image URL"
    }
  },
  "required": [
    "title",
    "date",
    "category"
  ]
}