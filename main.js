const startButton  = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement =document.getElementById('answer-buttons');

let shuffeledQuestions,currentQuestionIndex;
let quizScore =0;



startButton.addEventListener('click',startGame)

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++; 
    setnextQuestion();
})


function startGame(){
    startButton.classList.add('hide')
    shuffeledQuestions=questions.sort(() =>Math.random() -0.5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffeledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button =document.createElement('button')
        button.innerText=answer.text;
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffeledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText ="restart"
        startButton.classList.remove('hide')
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }

}


function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'which of these is a javaScript framework?',
        answers :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},


        ]
    },
    {
        question: 'who is the Governor of Oyo State?',
        answers :[
            {text: 'Sanwo Olu', correct: false},
            {text: 'Seyi Makinde', correct: true},
            {text: 'Peter Obi', correct: false},
            {text: 'Awofodu Samuel', correct: false},


        ]
    },
    {
        question: 'who is the best fooballer in the world?',
        answers :[
            {text: 'Neymar Jr', correct: false},
            {text: 'Lionel Messi', correct: true},
            {text: 'Ousmane Dembele', correct: false},
            {text: 'Cristiano Ronaldo', correct: false},


        ]
    },
    {
        question: 'who is the next president of Nigeria?',
        answers :[
            {text: 'Peter Obi', correct: true},
            {text: 'Wole Soyinka', correct: false},
            {text: 'Muhamadu Buhari', correct: false},
            {text: 'Olusegun Obasanjo', correct: false},


        ]
    },
    {
        question: 'who is the president of Nigeria?',
        answers :[
            {text: 'Peter Obi', correct: false},
            {text: 'Wole Soyinka', correct: false},
            {text: 'Muhamadu Buhari', correct: true},
            {text: 'Olusegun Obasanjo', correct: false},


        ]
    }
]