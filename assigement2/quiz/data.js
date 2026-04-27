//  use this quizData in your app.
 const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// Render questions
function loadQuestion() {
  let data = quizData[currentQuestion];

  document.getElementById("question").innerText = data.question;
  document.getElementById("a").innerText = data.a;
  document.getElementById("b").innerText = data.b;
  document.getElementById("c").innerText = data.c;
  document.getElementById("d").innerText = data.d;
}

// Load all questions at once (optional)        
 function getSelected() {
  let answers = document.querySelectorAll("input[name='answer']");
  let selected = null;

  answers.forEach(ans => {
    if (ans.checked) {
      selected = ans.value;
    }
  });

  return selected;
}           

 


// Calculate result
document.getElementById("submit").addEventListener("click", () => {
  let answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById("quiz").innerHTML =
        `<h2>Your Score: ${score}/${quizData.length}</h2>`;
    }
  }
});

loadQuestion();




