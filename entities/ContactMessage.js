{
  "name": "ContactMessage",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Name"
    },
    "email": {
      "type": "string",
      "title": "Email"
    },
    "phone": {
      "type": "string",
      "title": "Phone"
    },
    "subject": {
      "type": "string",
      "title": "Subject"
    },
    "message": {
      "type": "string",
      "title": "Message"
    }
  },
  "required": [
    "name",
    "phone",
    "message"
  ]
}