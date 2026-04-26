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

// Render questions
function loadQuiz() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `
      <div class="question">
        <p>${currentQuestion + 1}. ${q.question}</p>
        <div class="options">
          <label>
            <input type="radio" name="q${currentQuestion}" value="a">
            ${q.a}
          </label>
          <label>
            <input type="radio" name="q${currentQuestion}" value="b">  
            ${q.b}
          </label>
          <label>
            <input type="radio" name="q${currentQuestion}" value="c">
            ${q.c}
          </label>
          <label>
            <input type="radio" name="q${currentQuestion}" value="d">
            ${q.d}
          </label>
        </div>
      </div>
    `;
}

// Load all questions at once (optional)        
            

 


// Calculate result
submitBtn.addEventListener("click", () => {
  let score = 0;

  quizData.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    
    if (selected && selected.value === q.correct) {
      score++;
    }
});
currentQuestion++;

  resultDiv.innerText = `Your Score: ${score} / ${quizData.length}`;
});

loadQuiz();