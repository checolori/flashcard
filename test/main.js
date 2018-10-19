const questions  = [
    {
        question: 'Do you live in Amsterdam?',
        answer: 'Yes'
    },
    {
        question: 'Do You like drik?',
        answer: 'not a lot'
    },
    {
        question: 'Are you fine',
        answer: 'a3'
    }
]

var randomQuestion = questions[Math.floor((Math.random()*questions.length-1)+1)];

let showQuestion = randomQuestion.question
let showAnswer = randomQuestion.answer

let label = document.createElement("label");
label.setAttribute("id", "someid")
label.innerHTML = showQuestion;
let parent = document.getElementsByClassName("flashcard")[0];
parent.appendChild(label);


function pressAnswer(){
    document.getElementById("someid").innerText = showAnswer
 }

function nextQuestion(){
    var otherQuestion  = questions[Math.floor((Math.random()*questions.length-1)+1)];

    showQuestion = otherQuestion.question
    showAnswer = otherQuestion.answer

    label.innerHTML = showQuestion;
}
