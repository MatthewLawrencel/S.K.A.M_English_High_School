{
  "name": "Attendance",
  "type": "object",
  "properties": {
    "student_name": {
      "type": "string",
      "title": "Student Name"
    },
    "student_id": {
      "type": "string",
      "title": "Student ID"
    },
    "class_name": {
      "type": "string",
      "title": "Class",
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
    "section": {
      "type": "string",
      "title": "Section",
      "enum": [
        "A",
        "B",
        "C"
      ]
    },
    "date": {
      "type": "string",
      "format": "date",
      "title": "Date"
    },
    "status": {
      "type": "string",
      "title": "Status",
      "enum": [
        "Present",
        "Absent",
        "Late",
        "Holiday"
      ]
    }
  },
  "required": [
    "student_name",
    "student_id",
    "class_name",
    "date",
    "status"
  ]
}