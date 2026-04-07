{
  "name": "Result",
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
    "exam_type": {
      "type": "string",
      "title": "Exam Type",
      "enum": [
        "Unit Test 1",
        "Unit Test 2",
        "Mid Term",
        "Annual Exam",
        "SSLC"
      ]
    },
    "year": {
      "type": "string",
      "title": "Academic Year"
    },
    "total_marks": {
      "type": "number",
      "title": "Total Marks"
    },
    "percentage": {
      "type": "number",
      "title": "Percentage"
    },
    "grade": {
      "type": "string",
      "title": "Grade",
      "enum": [
        "A+",
        "A",
        "B+",
        "B",
        "C+",
        "C",
        "D",
        "F"
      ]
    },
    "rank": {
      "type": "number",
      "title": "Rank"
    },
    "result_status": {
      "type": "string",
      "title": "Result Status",
      "enum": [
        "Pass",
        "Fail",
        "Distinction"
      ]
    }
  },
  "required": [
    "student_name",
    "student_id",
    "class_name",
    "exam_type",
    "year"
  ]
}