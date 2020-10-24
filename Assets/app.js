
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

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
    //get the position of 'question' from the availableQuestion Array
    const index1= availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' fromt he availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1,1);
    //console.log(questionIndex)
    //console.log(availableQuestions)

    // set options
    // get the length of options
    const optionLen = currentQuestion.options.length
    //push options into availableOptions Array
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    // creat options in html
    for(let i=0; i<optionLen; i++){
        //random option
        const optionIndex = availableOptions[Math.random() * availableOptions.length];
        // get the position of 'optionIndex' from the availableOptions
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from the availableOptions,
        availableOptions.splice(index2,1)
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[i];
        option.id = i;
        option.className = "option";
        optionContainer.appendChild(option)

    }

    questionCounter++   
}
   
function next(){
    if(questionCounter === quiz.length){
        console.log("quiz over");
    }
    else {
        getNewQuestion();
    }
}

window.onload = function(){
    //First we will set all questions in availableQuestions Array
    setAvailableQuestions();
    //Second we will call  getNewQuestion(); function
    getNewQuestion();

}