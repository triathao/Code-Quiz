
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
        console.log(availableQuestions)
}

window.onload = function(){

    setAvailableQuestions();

}