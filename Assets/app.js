
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// Push the questions into availableQuestions Array
function setAvailableQuestions (){
    const totalQuestion = quiz.length;
        for(let i=0; i<totalQuestion; i++){
            availableQuestions.push(quiz[i])  
        }
}

//Set question number and question and options
function getNewQuestion(){
    //Set question number
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    //set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    //console.log(questionIndex)
}
window.onload = function(){
    //First we will set all questions in availableQuestions Array
    setAvailableQuestions();
    //Second we will call  getNewQuestion(); function
    getNewQuestion();

}