{
  "name": "AdmissionQuery",
  "type": "object",
  "properties": {
    "parent_name": {
      "type": "string",
      "title": "Parent Name"
    },
    "student_name": {
      "type": "string",
      "title": "Student Name"
    },
    "phone": {
      "type": "string",
      "title": "Phone Number"
    },
    "email": {
      "type": "string",
      "title": "Email"
    },
    "class_seeking": {
      "type": "string",
      "title": "Class Seeking Admission",
      "enum": [
        "1st",
        "2nd",
        "3rd",
        "4th",
        "5th",
        "6th",
        "7th",
        "8th",
        "9th",
        "10th"
      ]
    },
    "previous_school": {
      "type": "string",
      "title": "Previous School"
    },
    "message": {
      "type": "string",
      "title": "Message"
    },
    "status": {
      "type": "string",
      "title": "Status",
      "enum": [
        "New",
        "Contacted",
        "Enrolled",
        "Rejected"
      ],
      "default": "New"
    }
  },
  "required": [
    "parent_name",
    "student_name",
    "phone",
    "class_seeking"
  ]
}