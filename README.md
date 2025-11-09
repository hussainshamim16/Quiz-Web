# Quiz App

A simple and interactive Quiz Application built with HTML, CSS, JavaScript, and Firebase. This app allows teachers to create quizzes and approve students to take them. Students can attempt quizzes in a timed environment, track their scores, and view results with a circular progress bar.

---

## Features

- Teacher Management: Teachers can create quizzes and approve students via Firebase.
- Student Authentication: Signup and login using Firebase Authentication.
- Dynamic Quiz Loading: Fetches quiz data from Firebase Firestore.
- Timed Questions: Each question has a timer and progress bar.
- Option Locking: Users cannot change answers once selected.
- Next Question Validation: Students cannot proceed without selecting an answer.
- Results Display: Shows circular progress bar, percentage score, and personalized messages:
  - 0–59% → Fail
  - 60–69% → Good
  - 70–79% → Very Good
  - 80–100% → Excellent
- Network Handling: Alerts students if internet is disconnected during quiz.

---

## Installation & Setup

1. Clone this repository:

   git clone <repository-url>

2. Open the project in your code editor.

3. Setup Firebase:
   - Create a project on Firebase Console
   - Enable Authentication (Email/Password)
   - Create Firestore Database
   - Update the `config.js` with your Firebase credentials.

4. Run the project by opening `index.html` in your browser.

---

## Usage

1. Signup/Login as a student.
2. Teacher Approval: Teacher adds the quiz for the student.
3. Attempt Quiz: Students see the quiz, answer questions, and track their progress.
4. View Results: After quiz submission, students see their score with a circular progress bar and feedback message.

---

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend / Database: Firebase Firestore, Firebase Authentication

---

## Notes

- Students cannot retake a quiz they have already attempted.
- If the internet connection is lost during a quiz, an alert is shown to inform the user.
- All quiz data is securely stored in Firebase Firestore.

---

## Author

Hussain Shamim – Web Developer
