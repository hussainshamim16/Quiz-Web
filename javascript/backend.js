import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getFirestore,
  doc,
  setDoc,
  auth,
  db,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  limit,
} from './config.js'

// Spacials Id's
const signupForm = document.getElementById("signup");
const loginForm = document.getElementById("login");
const adminForm = document.getElementById("adminForm");
const infobox = document.getElementById("infobox");
const loader = document.getElementById("loaderParent");
// error box
const errorBox = document.getElementById("errorPopup");
const errorBtn = document.getElementById("errorBtn");
const textPopup = document.querySelector(".errormessage")

// fetch Student 
const studentR = JSON.parse(localStorage.getItem("student"));
// My Questions File
import { questions } from "./question.js";

// SIGNUP
if (signupForm) {
  if (studentR) {
    window.location.href = "/pages/teacher-permission.html";
  }else{
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("teacherEmailNameSignup").value;
    const email = document.getElementById("teacherEmailSignup").value;
    const password = document.getElementById("teacherPasswordSignup").value;
    const batch = document.getElementById("batch").value;
    const trainer = document.getElementById("trainer").value;

    try {
      if (loader) loader.classList.remove('none');

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // Firestore save
      await setDoc(doc(db, "students", uid), {
        Student_name: name,
        Student_email: email,
        Student_batch: batch,
        Student_trainer: trainer,
        Student_id: uid,
        createdAt: new Date(),
      });

      // ✅ LocalStorage me User Info Save
      localStorage.setItem("student", JSON.stringify({
        uid: uid,
        name: name,
        email: email
      }));

      if (loader) loader.classList.add('none');

      window.location.href = "/pages/teacher-permission.html";

    } catch (error) {
      showErrorMessage(error.code);
    }

  });}
}

// LOGIN
if (loginForm) {
  if (studentR) {
    window.location.replace("/pages/teacher-permission.html");
  }else{
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("teacherEmailLogin").value;
    const password = document.getElementById("teacherPasswordLogin").value;

    try {
      if (loader) loader.classList.remove('none');

      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // Firestore se user data get karo
      const userRef = doc(db, "students", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        // ✅ LocalStorage me save
        localStorage.setItem("student", JSON.stringify({
          uid: uid,
          name: userData.Student_name,
          email: email
        }));
      }

      if (loader) loader.classList.add('none');
      window.location.href = "/pages/Teacher-Permission.html";

    } catch (error) {
      showErrorMessage(error.code)
      // alert(error.message);
      // window.location.reload()
    }

  });}
}

// Teacher Confirmation
if (adminForm) {
  if(!studentR){
    window.location = '../index.html'
  }
  else{
  let teacherName = document.getElementById('teacherName');
  let courseName = document.getElementById('courseName');
  let quizDuration = document.getElementById('quizDuration');
  let quizQuestion = document.getElementById('quizQuestion');
  let NumberWord = document.getElementById('NumberWord');

  adminForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (NumberWord.value === "kig8324") {
      try {

        if (loader) {
          loader.classList.remove('none')
        }

        let student = JSON.parse(localStorage.getItem("student"))
        const colRefE = collection(db, "teacherApprovel");
        const snapshot = await getDocs(colRefE);
        let checkDocument = snapshot.docs.find(async doc => { doc.data() })

        if (!checkDocument) {
          await addDoc(collection(db, "teacherApprovel"), {
            teacherName: teacherName.value,
            courseName: courseName.value,
            quizDuration: quizDuration.value,
            quizQuestion: quizQuestion.value,
            studentId: student.uid,
            createdAt: new Date(),
          })

          if (loader) {
            loader.classList.add('none')
          }

          localStorage.setItem("teacherPermission", JSON.stringify({
            mentorName: teacherName.value,
            quizname: courseName.value,
            quizseconds: quizDuration.value,
            quizsawaal: quizQuestion.value,
          }))

          window.location.href = "/pages/info.html";
        }

        const pehlyYeQuizDeyDeaHEyStudentNey = snapshot.docs.find(async doc => {
          if (doc.data().studentId === student.uid) {
            if (doc.data().courseName === courseName.value) {
              showErrorMessage("This student has already attempted the quiz.")
              // window.location.reload()
            }
            else {
              await addDoc(collection(db, "teacherApprovel"), {
                teacherName: teacherName.value,
                courseName: courseName.value,
                quizDuration: quizDuration.value,
                quizQuestion: quizQuestion.value,
                studentId: student.uid,
                createdAt: new Date(),
              })

              if (loader) {
                loader.classList.add('none')
              }

              localStorage.setItem("teacherPermission", JSON.stringify({
                mentorName: teacherName.value,
                quizname: courseName.value,
                quizseconds: quizDuration.value,
                quizsawaal: quizQuestion.value,
              }))

              window.location.href = "/pages/info.html";
            }
          }
        });


      } catch (error) {
        showErrorMessage(error.code);
        // window.location.reload()
      }
    } else {
      showErrorMessage("Teacher Password Incorrect !")
      // window.location.reload()
    }
  })
}
}

// Info Box
if (infobox) {
  if(!studentR){
    window.location = '../index.html'
  }else{
  function infoBox() {
    let DatInLocal = JSON.parse(localStorage.getItem("teacherPermission"));
    document.getElementById('infoSeconds').innerText = DatInLocal.quizseconds;
    document.getElementById('questionCount').innerText = DatInLocal.quizsawaal;
    document.getElementById('Selectescourse').innerText = DatInLocal.quizname;
  }
  infoBox()}
}

// quiz Screen
if (window.location.pathname === "/pages/quiz-start.html") {
    if(!studentR){
    window.location = '../index.html'
  }else{
  // ------------------ DOM ELEMENTS (as you already had) ------------------
  const elements = {
    quizBox: document.querySelector(".quiz_box"),
    infoBox: document.querySelector(".info_box"),
    adminScreen: document.querySelector(".adminScreen"),
    // continueBtn: document.querySelector(".info_box .continueBtn") || document.querySelector(".info_box .buttons .restart"),
    continueBtn: document.querySelector(".continueBtn"),
    nextBtn: document.querySelector(".next_btn"),
    optionList: document.querySelector(".option_list"),
    queText: document.querySelector(".que_text"),
    timeLeftTxt: document.querySelector(".time_left_txt"),
    timerSec: document.querySelector(".timer_sec"),
    time_line: document.querySelector(".time_line"),
    bottomCounter: document.querySelector(".total_que"),
    resultBox: document.querySelector(".result_box"),
    scoreEl: document.querySelector(".score_text"),
    teacherNameDisplay: document.querySelector(".teacherNameDisplay"),
    infoSeconds: document.querySelector(".infoSeconds"),
    restartBtns: document.querySelectorAll(".result_box .restart"),
    quitBtns: document.querySelectorAll(".result_box .quit, .quit"),
    courseTitle: document.querySelectorAll(".title"),
    containerQuiz: document.querySelectorAll(".quizcontainer"),
    btnParent: document.querySelectorAll(".btnParent"),
  };

  // ------------------ QUIZ STATE ------------------
  let quizData = null; // { teacherName, name, questions[], duration, maxQuestions }
  let que_count = 0;
  let que_numb = 1;
  let userScore = 0;
  let counter, counterLine;
  let lineWidth = 0;

  // ------------------ HELPERS ------------------
  function pad(n) { return n < 10 ? '0' + n : n; }

  // ------------------ LOAD SETTINGS FROM FIRESTORE ------------------
  async function loadSettingsFromFirestore() {
    try {
      if (!studentR || !studentR.uid) {
        showErrorMessage("Student not logged in.");
        setTimeout(() => {
          window.location = '../index.html'
        }, 2000);
        return null;
      }

      const studentId = studentR.uid;

      // teacherApprovel collection
      const colRef = collection(db, "teacherApprovel");
      const q = query(colRef, orderBy("createdAt", "desc")); // sab documents la lo
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        showErrorMessage("No teacher approval documents found in Firestore.");
        return null;
      }

      // Find the document for this student
      const docForStudent = snapshot.docs.find(doc => doc.data().studentId === studentId);

      if (!docForStudent) {
        showErrorMessage("No quiz assigned for your account yet.");
        return null;
      }

      const docData = docForStudent.data();

      // Map and sanitize values
      return {
        courseName: (docData.courseName || "").toLowerCase(),
        teacherName: docData.teacherName || "Teacher",
        quizDuration: parseInt(docData.quizDuration || "50", 10),
        quizQuestion: parseInt(docData.quizQuestion || "10", 10),
        studentId: docData.studentId
      };

    } catch (err) {
      showErrorMessage(err.code);
      // alert("Error loading settings from Firestore: " + err.message);
      return null;
      // window.location.reload()
    }
  }


  // ------------------ ADMIN FORM → LOAD & PREPARE QUIZ ------------------

  async function fetchData() {

    // OPTIONAL: check a secret input if you want (NumberWord)
    const secret = document.getElementById('NumberWord')?.value?.trim();
    // if you want to restrict, uncomment:
    // if (secret !== "@kig8324") { alert("Wrong Password"); return; }

    const setting = await loadSettingsFromFirestore();
    if (!setting) return;

    // find course object inside questions.js
    const courseObj = questions.find(q => q.name.toLowerCase() === setting.courseName);
    if (!courseObj) {
      showErrorMessage(`Course "${setting.courseName}" not found in your question file`);
      return;
    }

    // slice questions based on quizQuestion (ensure bounds)
    const selectedQuestions = courseObj.questions.slice(0, Math.min(setting.quizQuestion, courseObj.questions.length));

    quizData = {
      teacherName: setting.teacherName,
      name: courseObj.name,
      questions: selectedQuestions,
      duration: setting.quizDuration,  // duration PER QUESTION (seconds)
      maxQuestions: selectedQuestions.length
    };

    // update UI (info box)
    if (elements.infoSeconds) elements.infoSeconds.textContent = quizData.duration;
    if (elements.teacherNameDisplay) elements.teacherNameDisplay.textContent = quizData.teacherName;



  }

  fetchData()

  // ------------------ INFO → Start Quiz (Start button) ------------------
  document.getElementById("areyouready").addEventListener('click', () => {
    if (!quizData) {
    console.log("Data Nhi AYA")
    //   showErrorMessage("Quiz data not loaded.");
    //   return;
    }else{
    console.log("Data Nhi AYA")
      
    }
    // document.getElementById("btnParent").classList.add("remove")
    // resetQuizState();
    // showQuestion(0);
    // queCounter(1);
    // startTimer(quizData.duration);
    // startTimerLine(0);
    // document.getElementById('courseName').textContent = quizData.name;
  });

  // ------------------ NEXT BUTTON ------------------
  if (elements.nextBtn) {
    elements.nextBtn.addEventListener('click', async () => {
      if (!quizData) return;
      elements.nextBtn.classList.remove('show')
      if (que_count < quizData.questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestion(que_count);
        queCounter(que_numb);
        resetTimer();
        startTimer(quizData.duration);
        startTimerLine(0);
      } else {
        clearInterval(counter);
        clearInterval(counterLine);


        if (loader) {
          loader.classList.remove('none')
        }


        const studentX = JSON.parse(localStorage.getItem("student"));
        await addDoc(collection(db, "Results"), {
          QuizSubject: quizData.name,
          QuizTeacher: quizData.teacherName,
          QuizStudent: studentX.uid,
          QuizQuestion: quizData.questions.length,
          StudentScore: userScore,
          createdAt: new Date(),
        })

        if (loader) {
          loader.classList.add('none')
        }

        window.location = './pages/Result.html'
      }
    });
  }
  // ------------------ RESTART / QUIT (result box) ------------------
  elements.restartBtns.forEach(btn => btn.addEventListener('click', () => {
    elements.resultBox.classList.remove('activeResult');
    elements.quizBox.classList.add('activeQuiz');

    resetQuizState();
    showQuestion(0);
    queCounter(1);
    startTimer(quizData.duration);
    startTimerLine(0);
  }));

  elements.quitBtns.forEach(btn => btn.addEventListener('click', () => location.reload()));

  // ------------------ CORE FUNCTIONS ------------------
  function resetQuizState() {
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    lineWidth = 0;
    elements.nextBtn.classList.remove('show');
  }

  function resetTimer() {
    clearInterval(counter);
    clearInterval(counterLine);
    elements.timeLeftTxt.textContent = 'Time Left';
    elements.timerSec.textContent = pad(quizData.duration);
  }

  function showQuestion(idx) {
    elements.optionList.innerHTML = "";
    elements.courseTitle.innerHTML = "";
    const q = quizData.questions[idx];
    elements.queText.textContent = `${q.numb}. ${q.question}`;

    q.options.forEach(optionText => {
      const div = document.createElement("div");
      div.classList.add("option");
      div.onclick = function () { optionSelected(this); };

      const span = document.createElement("span");
      span.textContent = optionText;
      div.appendChild(span);
      elements.optionList.appendChild(div);
    });
  }

  function queCounter(num) {
    elements.bottomCounter.innerHTML = `${num} | ${quizData.questions.length} Questions</span>`;
  }

  function optionSelected(el) {
    clearInterval(counter);
    clearInterval(counterLine);

    const userAns = el.textContent.trim();
    const correct = quizData.questions[que_count].answer;

    const all = elements.optionList.children;

    if (userAns === correct) {
      userScore++;
      el.classList.add('correct');
      el.insertAdjacentHTML('beforeend', '<div class="icon tick"><i class="fas fa-check"></i></div>');
    } else {
      el.classList.add('incorrect');
      el.insertAdjacentHTML('beforeend', '<div class="icon cross"><i class="fas fa-times"></i></div>');

      // highlight correct one
      for (let i = 0; i < all.length; i++) {
        if (all[i].textContent.trim() === correct) {
          all[i].classList.add('correct');
          all[i].insertAdjacentHTML('beforeend', '<div class="icon tick"><i class="fas fa-check"></i></div>');
        }

      }
    }

    // disable all
    for (let i = 0; i < all.length; i++) all[i].classList.add('disabled');

    elements.nextBtn.classList.add('show');
  }

  // Timer per question
  function startTimer(time) {
    elements.timerSec.textContent = pad(time);
    let current = time;
    counter = setInterval(() => {
      current--;
      elements.timerSec.textContent = pad(current);
      if (current < 0) {
        clearInterval(counter);
        elements.timeLeftTxt.textContent = 'Time Off';
        autoSelectCorrect();
        elements.nextBtn.classList.add('show');
      }
    }, 1000);
  }

  // Timeline bar (fills over the question duration)
  function startTimerLine(start) {
    const container = elements.time_line.parentElement;
    const maxWidth = container ? container.clientWidth : 300;
    const perSec = maxWidth / quizData.duration;

    lineWidth = start;
    // elements.time_line.style.width = lineWidth + 'px';

    counterLine = setInterval(() => {
      lineWidth += perSec;
      // elements.time_line.style.width = lineWidth + 'px';
      if (lineWidth >= maxWidth) {
        clearInterval(counterLine);
      }
    }, 1000);
  }

  function autoSelectCorrect() {
    const correct = quizData.questions[que_count].answer;
    const all = elements.optionList.children;
    for (let i = 0; i < all.length; i++) {
      if (all[i].textContent.trim() === correct) {
        all[i].classList.add('correct');
        all[i].insertAdjacentHTML('beforeend', '<div class="icon tick"><i class="fas fa-check"></i></div>');
      }
      all[i].classList.add('disabled');
    }
  }
}
}

// Result Of Quiz
if (window.location.pathname === "/pages/Result.html") {
    if(!studentR){
    window.location = '../index.html'
  }else{
  async function showResult() {

    const student = JSON.parse(localStorage.getItem("student"));
    let studentId = student.uid
    try {
      if (loader) loader.classList.remove('none');
      // Firestore se user data get karo
      const colRef = collection(db, "Results");
      const q = query(colRef, orderBy("createdAt", "desc")); // sab documents la lo

      const snapshot = await getDocs(q);
      if (loader) loader.classList.add('none');
      const docForStudent = snapshot.docs.find(doc => doc.data().QuizStudent === studentId);
      const docData = docForStudent.data();

      let percent = Math.round((docData.StudentScore / docData.QuizQuestion) * 100);

      const progress = document.querySelector(".circular-progress");
      const progressValue = document.querySelector(".progress-value");
      const resultMessage = document.querySelector(".result_message");

      let startValue = 0;
      let speed = 20;

      let progressColor = "#4b8df8";
      let message = "";

      if (percent < 60) {
        message = "Fail — Keep trying! You can improve.";
        progressColor = "#ff4b4b";
      } else if (percent < 70) {
        message = "Good — Nice effort!";
        progressColor = "#f2b94b";
      } else if (percent < 80) {
        message = "Very Good — You're getting strong!";
        progressColor = "#4bbf73";
      } else {
        message = "Excellent — Outstanding performance!";
        progressColor = "#4b8df8";
      }

      resultMessage.innerText = message;

      if (percent === 0) {
        progressValue.textContent = "0%";
        progress.style.background = `conic-gradient(${progressColor} 0deg, #ddd 0deg)`;
        return;
      }

      let updateProgress = setInterval(() => {
        startValue++;

        progressValue.textContent = `${startValue}%`;
        progress.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg, #ddd 0deg)`;

        if (startValue === percent) {
          clearInterval(updateProgress);
        }
      }, speed);

    }
    catch (error) {
      showErrorMessage(error.code);
    }
  }
  showResult()
}
}

// show error popup
function showErrorMessage(message) {

  if (message === "auth/invalid-email") {
    message = "Please enter a valid email address.";
  }

  else if (message === "auth/user-disabled") {
    message = "This account has been disabled by the administrator.";
  }

  else if (message === "auth/user-not-found") {
    message = "No account found with this email.";
  }

  else if (message === "auth/wrong-password") {
    message = "Incorrect password. Please try again.";
  }

  else if (message === "auth/weak-password") {
    message = "Password should be at least 6 characters long.";
  }

  else if (message === "auth/email-already-in-use") {
    message = "This email is already registered.";
  }

  else if (message === "auth/invalid-credential") {
    message = "Invalid email or password.";
  }

  else if (message === "auth/too-many-requests") {
    message = "Too many attempts. Please try again later.";
  }

  else if (message === "auth/missing-password") {
    message = "Please enter your password.";
  }

  else if (message === "auth/missing-email") {
    message = "Please enter your email.";
  }

  else if (message === "auth/network-request-failed") {
    message = "Network error. Check your internet connection.";
  }

  else if (message === "auth/operation-not-allowed") {
    message = "Email/Password authentication is not enabled.";
  }
  else if (message === "permission-denied") {
    message = "You do not have permission to add this document.";
  } else if (message === "unavailable") {
    message = "Firestore service is currently unavailable. Try again later.";
  } else if (message === "deadline-exceeded") {
    message = "Request timed out. Please try again.";
  } else if (message === "resource-exhausted") {
    message = "Quota exceeded. Cannot add more documents at the moment.";
  } else if (message === "invalid-argument") {
    message = "Invalid data provided. Check your input fields.";
  } else if (message === "internal") {
    message = "Internal server error. Please try again.";
  }
  else if (message === "unavailable") {
    message = "Network unavailable. Please check your internet connection.";
  } else if (message === "deadline-exceeded") {
    message = "Request timed out. Check your internet and try again.";
  } else if (message === "network-request-failed") {
    message = "Network error. Unable to reach server.";
  } else {
    message = "error: " + message;
  }
  errorBox.classList.remove('none')
  textPopup.innerHTML = message
}

// remove error popup
if (errorBtn) {
  errorBtn.addEventListener("click", () => closeErrorPopup())
  function closeErrorPopup() {
    errorBox.classList.add('none')
    if (loader) loader.classList.add('none');
  }
}


// Detect when user goes offline
window.addEventListener('offline', () => {
  document.getElementById("Offlne").classList.remove("none")
});

// Detect when user goes offline
window.addEventListener('online', () => {
  document.getElementById("Offlne").classList.add("none")
});




