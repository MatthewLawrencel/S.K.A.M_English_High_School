import { useState, useCallback } from 'react';

const translations = {
  // Navbar
  "Home": "ಮುಖಪುಟ",
  "About Us": "ನಮ್ಮ ಬಗ್ಗೆ",
  "Academics": "ಶೈಕ್ಷಣಿಕ",
  "Admissions": "ಪ್ರವೇಶ",
  "Activities": "ಚಟುವಟಿಕೆಗಳು",
  "Facilities": "ಸೌಲಭ್ಯಗಳು",
  "Achievements": "ಸಾಧನೆಗಳು",
  "Attendance": "ಹಾಜರಾತಿ",
  "Contact Us": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
  "Results": "ಫಲಿತಾಂಶ",
  "Sports": "ಕ್ರೀಡೆ",

  // Hero
  "S.K.A.M English High School": "ಎಸ್.ಕೆ.ಎ.ಎಂ ಇಂಗ್ಲಿಷ್ ಹೈ ಸ್ಕೂಲ್",
  "Huliyurdurga": "ಹುಳಿಯೂರ್ದುರ್ಗ",
  "Nurturing Young Minds, Building Tomorrow's Leaders": "ಎಳೆಯ ಮನಸ್ಸುಗಳನ್ನು ಪೋಷಿಸುವುದು, ನಾಳೆಯ ನಾಯಕರನ್ನು ನಿರ್ಮಿಸುವುದು",
  "Committed to academic excellence, character building, and holistic development of every student since establishment.": "ಸ್ಥಾಪನೆಯ ಸಮಯದಿಂದ ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಯ ಶೈಕ್ಷಣಿಕ ಶ್ರೇಷ್ಠತೆ, ಪಾತ್ರ ನಿರ್ಮಾಣ ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗೆ ಬದ್ಧ.",
  "Apply Now": "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
  "Explore More": "ಇನ್ನಷ್ಟು ಅನ್ವೇಷಿಸಿ",

  // Stats
  "Students": "ವಿದ್ಯಾರ್ಥಿಗಳು",
  "Teachers": "ಶಿಕ್ಷಕರು",
  "Years of Excellence": "ಶ್ರೇಷ್ಠತೆಯ ವರ್ಷಗಳು",
  "Pass Rate": "ಉತ್ತೀರ್ಣ ದರ",

  // About
  "About Our School": "ನಮ್ಮ ಶಾಲೆಯ ಬಗ್ಗೆ",
  "Our Vision": "ನಮ್ಮ ದೃಷ್ಟಿ",
  "Our Mission": "ನಮ್ಮ ಧ್ಯೇಯ",
  "Principal's Message": "ಪ್ರಾಂಶುಪಾಲರ ಸಂದೇಶ",
  "To be a leading institution that empowers students with knowledge, values, and skills to become responsible global citizens.": "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜ್ಞಾನ, ಮೌಲ್ಯಗಳು ಮತ್ತು ಕೌಶಲ್ಯಗಳನ್ನು ನೀಡಿ ಜವಾಬ್ದಾರಿಯುತ ಜಾಗತಿಕ ಪ್ರಜೆಗಳಾಗಲು ಸಶಕ್ತಗೊಳಿಸುವ ಮುಂಚೂಣಿ ಸಂಸ್ಥೆಯಾಗಲು.",
  "To provide quality education in a nurturing environment that fosters intellectual curiosity, creativity, physical fitness, and moral values through innovative teaching methods and holistic development programs.": "ನವೀನ ಬೋಧನಾ ವಿಧಾನಗಳು ಮತ್ತು ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಬೌದ್ಧಿಕ ಕುತೂಹಲ, ಸೃಜನಶೀಲತೆ, ದೈಹಿಕ ಸ್ವಾಸ್ಥ್ಯ ಮತ್ತು ನೈತಿಕ ಮೌಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವ ಪೋಷಕ ವಾತಾವರಣದಲ್ಲಿ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸುವುದು.",
  "S.K.A.M English High School, located in the historic town of Huliyurdurga, has been a beacon of quality education. Our school is dedicated to providing a comprehensive learning experience that goes beyond textbooks. We believe in nurturing every child's potential through a balanced approach of academics, sports, arts, and value education.": "ಐತಿಹಾಸಿಕ ಹುಳಿಯೂರ್ದುರ್ಗ ಪಟ್ಟಣದಲ್ಲಿರುವ ಎಸ್.ಕೆ.ಎ.ಎಂ ಇಂಗ್ಲಿಷ್ ಹೈ ಸ್ಕೂಲ್ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣದ ದೀಪಸ್ತಂಭವಾಗಿದೆ. ನಮ್ಮ ಶಾಲೆಯು ಪಠ್ಯಪುಸ್ತಕಗಳನ್ನು ಮೀರಿದ ಸಮಗ್ರ ಕಲಿಕೆಯ ಅನುಭವವನ್ನು ಒದಗಿಸಲು ಸಮರ್ಪಿತವಾಗಿದೆ. ಶೈಕ್ಷಣಿಕ, ಕ್ರೀಡೆ, ಕಲೆ ಮತ್ತು ಮೌಲ್ಯ ಶಿಕ್ಷಣದ ಸಮತೋಲಿತ ವಿಧಾನದ ಮೂಲಕ ಪ್ರತಿ ಮಗುವಿನ ಸಾಮರ್ಥ್ಯವನ್ನು ಪೋಷಿಸುವುದರಲ್ಲಿ ನಾವು ನಂಬಿಕೆ ಇಟ್ಟಿದ್ದೇವೆ.",
  "Dear Parents and Students, at S.K.A.M English High School, we are committed to providing an environment where every child can thrive. Our dedicated faculty, modern facilities, and comprehensive curriculum ensure that students receive the best education possible. We look forward to partnering with you in your child's educational journey.": "ಆತ್ಮೀಯ ಪೋಷಕರೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳೆ, ಎಸ್.ಕೆ.ಎ.ಎಂ ಇಂಗ್ಲಿಷ್ ಹೈ ಸ್ಕೂಲ್‌ನಲ್ಲಿ ಪ್ರತಿ ಮಗು ಬೆಳೆಯಬಹುದಾದ ವಾತಾವರಣವನ್ನು ಒದಗಿಸಲು ನಾವು ಬದ್ಧರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ಸಮರ್ಪಿತ ಸಿಬ್ಬಂದಿ, ಆಧುನಿಕ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ಸಮಗ್ರ ಪಠ್ಯಕ್ರಮವು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣ ಸಿಗುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ. ನಿಮ್ಮ ಮಗುವಿನ ಶೈಕ್ಷಣಿಕ ಪ್ರಯಾಣದಲ್ಲಿ ನಿಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಲು ನಾವು ಎದುರು ನೋಡುತ್ತೇವೆ.",

  // Academics
  "Curriculum": "ಪಠ್ಯಕ್ರಮ",
  "Year Calendar": "ವರ್ಷದ ಕ್ಯಾಲೆಂಡರ್",
  "Our school follows the Karnataka State Board curriculum, providing a strong foundation in all subjects.": "ನಮ್ಮ ಶಾಲೆಯು ಕರ್ನಾಟಕ ರಾಜ್ಯ ಮಂಡಳಿ ಪಠ್ಯಕ್ರಮವನ್ನು ಅನುಸರಿಸುತ್ತದೆ, ಎಲ್ಲಾ ವಿಷಯಗಳಲ್ಲಿ ಬಲವಾದ ಅಡಿಪಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
  "Subjects Offered": "ಒದಗಿಸಲಾದ ವಿಷಯಗಳು",
  "Kannada": "ಕನ್ನಡ",
  "English": "ಇಂಗ್ಲಿಷ್",
  "Hindi": "ಹಿಂದಿ",
  "Mathematics": "ಗಣಿತ",
  "Science": "ವಿಜ್ಞಾನ",
  "Social Science": "ಸಮಾಜ ವಿಜ್ಞಾನ",
  "Physical Education": "ದೈಹಿಕ ಶಿಕ್ಷಣ",
  "Computer Science": "ಕಂಪ್ಯೂಟರ್ ವಿಜ್ಞಾನ",
  "Art & Craft": "ಕಲೆ ಮತ್ತು ಕರಕುಶಲ",
  "Moral Science": "ನೈತಿಕ ವಿಜ್ಞಾನ",

  // Academic Calendar
  "June": "ಜೂನ್",
  "July": "ಜುಲೈ",
  "August": "ಆಗಸ್ಟ್",
  "September": "ಸೆಪ್ಟೆಂಬರ್",
  "October": "ಅಕ್ಟೋಬರ್",
  "November": "ನವೆಂಬರ್",
  "December": "ಡಿಸೆಂಬರ್",
  "January": "ಜನವರಿ",
  "February": "ಫೆಬ್ರವರಿ",
  "March": "ಮಾರ್ಚ್",
  "April": "ಏಪ್ರಿಲ್",
  "School Reopening": "ಶಾಲೆ ಪುನರಾರಂಭ",
  "Unit Test 1": "ಘಟಕ ಪರೀಕ್ಷೆ ೧",
  "Independence Day": "ಸ್ವಾತಂತ್ರ್ಯ ದಿನಾಚರಣೆ",
  "Mid Term Exams": "ಅರ್ಧ ವಾರ್ಷಿಕ ಪರೀಕ್ಷೆ",
  "Dasara Holidays": "ದಸರಾ ರಜೆ",
  "Unit Test 2": "ಘಟಕ ಪರೀಕ್ಷೆ ೨",
  "Annual Day": "ವಾರ್ಷಿಕೋತ್ಸವ",
  "Republic Day": "ಗಣರಾಜ್ಯೋತ್ಸವ",
  "Annual Exams": "ವಾರ್ಷಿಕ ಪರೀಕ್ಷೆ",
  "Results Declaration": "ಫಲಿತಾಂಶ ಪ್ರಕಟಣೆ",
  "Summer Vacation": "ಬೇಸಿಗೆ ರಜೆ",
  "Sports Day": "ಕ್ರೀಡಾ ದಿನ",
  "Science Exhibition": "ವಿಜ್ಞಾನ ಪ್ರದರ್ಶನ",
  "Children's Day": "ಮಕ್ಕಳ ದಿನ",
  "Christmas Holidays": "ಕ್ರಿಸ್ಮಸ್ ರಜೆ",

  // Admissions
  "Admission Enquiry": "ಪ್ರವೇಶ ವಿಚಾರಣೆ",
  "Admission Process": "ಪ್ರವೇಶ ಪ್ರಕ್ರಿಯೆ",
  "Fill out the form below and we will get back to you soon.": "ಕೆಳಗಿನ ಅರ್ಜಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ, ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
  "Parent/Guardian Name": "ಪೋಷಕರ/ರಕ್ಷಕರ ಹೆಸರು",
  "Student Name": "ವಿದ್ಯಾರ್ಥಿಯ ಹೆಸರು",
  "Phone Number": "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
  "Email": "ಇಮೇಲ್",
  "Class Seeking Admission": "ಪ್ರವೇಶ ಬಯಸುವ ತರಗತಿ",
  "Previous School": "ಹಿಂದಿನ ಶಾಲೆ",
  "Message": "ಸಂದೇಶ",
  "Submit Enquiry": "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ",
  "Enquiry submitted successfully! We will contact you soon.": "ವಿಚಾರಣೆ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ! ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
  "Step 1: Fill the enquiry form": "ಹಂತ ೧: ವಿಚಾರಣಾ ಅರ್ಜಿ ಭರ್ತಿ ಮಾಡಿ",
  "Step 2: Visit the school for interaction": "ಹಂತ ೨: ಸಂವಾದಕ್ಕಾಗಿ ಶಾಲೆಗೆ ಭೇಟಿ ನೀಡಿ",
  "Step 3: Submit required documents": "ಹಂತ ೩: ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿ",
  "Step 4: Pay admission fees": "ಹಂತ ೪: ಪ್ರವೇಶ ಶುಲ್ಕ ಪಾವತಿಸಿ",
  "Step 5: Receive confirmation": "ಹಂತ ೫: ಖಚಿತೀಕರಣ ಪಡೆಯಿರಿ",

  // Activities & Sports
  "School Activities": "ಶಾಲೆಯ ಚಟುವಟಿಕೆಗಳು",
  "Our school offers a wide range of activities to ensure holistic development of students.": "ನಮ್ಮ ಶಾಲೆಯು ವಿದ್ಯಾರ್ಥಿಗಳ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಚಟುವಟಿಕೆಗಳನ್ನು ನೀಡುತ್ತದೆ.",
  "Cricket": "ಕ್ರಿಕೆಟ್",
  "Kabaddi": "ಕಬಡ್ಡಿ",
  "Athletics": "ಅಥ್ಲೆಟಿಕ್ಸ್",
  "Volleyball": "ವಾಲಿಬಾಲ್",
  "Kho-Kho": "ಖೋ-ಖೋ",
  "Badminton": "ಬ್ಯಾಡ್ಮಿಂಟನ್",
  "Cultural Programs": "ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು",
  "Science Club": "ವಿಜ್ಞಾನ ಕ್ಲಬ್",
  "Art Club": "ಕಲಾ ಕ್ಲಬ್",
  "Eco Club": "ಪರಿಸರ ಕ್ಲಬ್",
  "Literary Club": "ಸಾಹಿತ್ಯ ಕ್ಲಬ್",
  "NSS/NCC": "ಎನ್‌ಎಸ್‌ಎಸ್/ಎನ್‌ಸಿಸಿ",
  "Scout & Guide": "ಸ್ಕೌಟ್ ಮತ್ತು ಗೈಡ್",
  "Yoga & Meditation": "ಯೋಗ ಮತ್ತು ಧ್ಯಾನ",
  "Music & Dance": "ಸಂಗೀತ ಮತ್ತು ನೃತ್ಯ",

  // Facilities
  "Our Facilities": "ನಮ್ಮ ಸೌಲಭ್ಯಗಳು",
  "State-of-the-art infrastructure to support learning and growth.": "ಕಲಿಕೆ ಮತ್ತು ಬೆಳವಣಿಗೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಅತ್ಯಾಧುನಿಕ ಮೂಲಸೌಕರ್ಯ.",
  "Smart Classrooms": "ಸ್ಮಾರ್ಟ್ ತರಗತಿ ಕೊಠಡಿಗಳು",
  "Computer Lab": "ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್",
  "Science Laboratory": "ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ",
  "Library": "ಗ್ರಂಥಾಲಯ",
  "Playground": "ಆಟದ ಮೈದಾನ",
  "Auditorium": "ಸಭಾಂಗಣ",
  "Transport": "ಸಾರಿಗೆ",
  "Safe Drinking Water": "ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು",
  "Digital learning tools in every classroom": "ಪ್ರತಿ ತರಗತಿ ಕೊಠಡಿಯಲ್ಲಿ ಡಿಜಿಟಲ್ ಕಲಿಕಾ ಸಾಧನಗಳು",
  "Well-equipped computer lab with internet": "ಇಂಟರ್ನೆಟ್ ಸಹಿತ ಉತ್ತಮ ಸಜ್ಜಿತ ಕಂಪ್ಯೂಟರ್ ಲ್ಯಾಬ್",
  "Fully equipped physics, chemistry & biology labs": "ಸಂಪೂರ್ಣ ಸಜ್ಜಿತ ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ ಮತ್ತು ಜೀವಶಾಸ್ತ್ರ ಪ್ರಯೋಗಾಲಯಗಳು",
  "Vast collection of books and periodicals": "ಪುಸ್ತಕಗಳು ಮತ್ತು ನಿಯತಕಾಲಿಕಗಳ ವಿಶಾಲ ಸಂಗ್ರಹ",
  "Spacious ground for multiple sports": "ಹಲವು ಕ್ರೀಡೆಗಳಿಗಾಗಿ ವಿಶಾಲ ಮೈದಾನ",
  "Multi-purpose hall for events": "ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ಬಹುಉದ್ದೇಶ ಸಭಾಂಗಣ",
  "Bus facility covering nearby areas": "ಸಮೀಪದ ಪ್ರದೇಶಗಳನ್ನು ಒಳಗೊಂಡ ಬಸ್ ಸೌಲಭ್ಯ",
  "RO purified drinking water for all": "ಎಲ್ಲರಿಗೂ ಆರ್‌ಒ ಶುದ್ಧೀಕರಿಸಿದ ಕುಡಿಯುವ ನೀರು",

  // Achievements
  "Our Achievements": "ನಮ್ಮ ಸಾಧನೆಗಳು",
  "Celebrating excellence in academics, sports, and beyond.": "ಶೈಕ್ಷಣಿಕ, ಕ್ರೀಡೆ ಮತ್ತು ಇತರ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಆಚರಿಸುವುದು.",
  "Academic": "ಶೈಕ್ಷಣಿಕ",
  "Cultural": "ಸಾಂಸ್ಕೃತಿಕ",
  "Other": "ಇತರ",
  "All": "ಎಲ್ಲಾ",

  // Attendance
  "Student Attendance": "ವಿದ್ಯಾರ್ಥಿ ಹಾಜರಾತಿ",
  "Check your attendance records": "ನಿಮ್ಮ ಹಾಜರಾತಿ ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
  "Student ID": "ವಿದ್ಯಾರ್ಥಿ ಐಡಿ",
  "Enter Student ID": "ವಿದ್ಯಾರ್ಥಿ ಐಡಿ ನಮೂದಿಸಿ",
  "Search": "ಹುಡುಕು",
  "Date": "ದಿನಾಂಕ",
  "Status": "ಸ್ಥಿತಿ",
  "Class": "ತರಗತಿ",
  "Section": "ವಿಭಾಗ",
  "Present": "ಹಾಜರು",
  "Absent": "ಗೈರುಹಾಜರು",
  "Late": "ತಡವಾಗಿ",
  "Holiday": "ರಜೆ",
  "No records found": "ದಾಖಲೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ",

  // Results
  "Exam Results": "ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶ",
  "Check your exam results": "ನಿಮ್ಮ ಪರೀಕ್ಷಾ ಫಲಿತಾಂಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
  "Exam Type": "ಪರೀಕ್ಷೆಯ ಪ್ರಕಾರ",
  "Total Marks": "ಒಟ್ಟು ಅಂಕಗಳು",
  "Percentage": "ಶೇಕಡಾ",
  "Grade": "ಶ್ರೇಣಿ",
  "Rank": "ದರ್ಜೆ",
  "Result": "ಫಲಿತಾಂಶ",
  "Pass": "ಉತ್ತೀರ್ಣ",
  "Fail": "ಅನುತ್ತೀರ್ಣ",
  "Distinction": "ವಿಶಿಷ್ಟ ಶ್ರೇಣಿ",

  // Contact
  "Get In Touch": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
  "We'd love to hear from you": "ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ",
  "Name": "ಹೆಸರು",
  "Phone": "ದೂರವಾಣಿ",
  "Subject": "ವಿಷಯ",
  "Send Message": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
  "Message sent successfully!": "ಸಂದೇಶ ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ!",
  "Address": "ವಿಳಾಸ",
  "S.K.A.M English High School, Huliyurdurga, Ramanagara District, Karnataka - 562120": "ಎಸ್.ಕೆ.ಎ.ಎಂ ಇಂಗ್ಲಿಷ್ ಹೈ ಸ್ಕೂಲ್, ಹುಳಿಯೂರ್ದುರ್ಗ, ರಾಮನಗರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ - ೫೬೨೧೨೦",

  // Footer
  "Quick Links": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
  "All Rights Reserved": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
  "Follow Us": "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",

  // Language
  "English": "English",
  "ಕನ್ನಡ": "ಕನ್ನಡ",

  // Common
  "Loading...": "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
  "Select": "ಆಯ್ಕೆ ಮಾಡಿ",
  "Academic Year": "ಶೈಕ್ಷಣಿಕ ವರ್ಷ",
};

let globalLang = 'en';
let listeners = [];

export function useLanguage() {
  const [lang, setLangState] = useState(globalLang);

  const toggleLang = useCallback(() => {
    globalLang = globalLang === 'en' ? 'kn' : 'en';
    listeners.forEach(fn => fn(globalLang));
  }, []);

  useState(() => {
    const listener = (newLang) => setLangState(newLang);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  });

  const t = useCallback((key) => {
    if (lang === 'en') return key;
    return translations[key] || key;
  }, [lang]);

  return { lang, toggleLang, t };
}