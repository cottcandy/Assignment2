// Globe in index.html
function initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2xhcmlzIiwiYSI6ImNscmoyMWpocDBmZmgya3N6cWt3d3NtM2wifQ.wFSXb4hFR0fpbXiRejoPQg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 2 // starting zoom
    });
}

document.addEventListener('DOMContentLoaded', initializeMap);

//for loading page
function redirectToPlayPage() {
    if (window.location.pathname.endsWith('minigame-loading.html')) {
        setTimeout(function() {
            window.location.href = 'minigame-play-page.html';
        }, 3000);
    }
}
redirectToPlayPage();

//minigame

const quizData = [
    {
        question: "QUESTION HERE?",
        options: ["ANSWERRR", "ANSWERRRRRRR", "corRect ANSWERRR", "ANSWERR"],
        correctAnswer: "corRect ANSWERRR"
    },
    {
        question: "QUESTION HERE!!",
        options: ["COrrcet", "ANSWERRRRRRR", "ANSWERRR", "ANSWERR"],
        correctAnswer: "COrrcet"
    },
    {
        question: "QUESTION HERE?!",
        options: ["ANSWERRR", "Correct", "ANSWERRR", "ANSWERR"],
        correctAnswer: "Correct"
    }
];
let currentQuestion = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const resultTextElement = document.getElementById("result-text");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionTextElement.innerText = currentQuizData.question;

    optionsContainer.innerHTML = "";
    for (let i = 0; i < currentQuizData.options.length; i++) {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerText = currentQuizData.options[i];
        optionElement.addEventListener("click", function() {
            checkAnswer(i);
        });
        optionsContainer.appendChild(optionElement);
    }

    resultContainer.style.display = "none";
}
function checkAnswer(optionIndex) {
    const currentQuizData = quizData[currentQuestion];
    const optionsElements = optionsContainer.getElementsByClassName("option");

    for (let i = 0; i < currentQuizData.options.length; i++) {
        if (currentQuizData.options[i] === currentQuizData.correctAnswer) {
            optionsElements[i].classList.add("correct");
        } else if (i === optionIndex) {
            optionsElements[i].classList.add("wrong");
        }
    }

    if (currentQuizData.options[optionIndex] === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            showQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            showResult();
        }, 1000);
    }
}
function showResult() {
    const qnContainer = document.getElementById('question-container');
    const resultTextElement = document.getElementById('result-text');
    
    qnContainer.style.display = 'none';
    optionsContainer.innerHTML = "";
    if (score < 3) {
        resultTextElement.innerText = `You scored ${score} out of ${quizData.length}.\n\nNice Try! However, you have failed the quiz :(\n\nYou will be redirected to the main page in 5 seconds`;
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 5000);
    } else {
        resultTextElement.innerText = `Congratulations!\n\nYou scored ${score} out of ${quizData.length}.`
        setTimeout(() => {
            window.location.href = 'email-input.html';
        }, 3000);
    }

    resultContainer.style.display = "block";
}
document.addEventListener("DOMContentLoaded", startQuiz);

//email-input
document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById('emailInput');

    emailInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            handleEmailInput();
        }
    });

    emailInput.addEventListener('blur', function() {
        handleEmailInput();
    });

    function handleEmailInput() {
        const enteredEmail = emailInput.value.trim();

        if (enteredEmail !== '') {
            window.location.href = 'minigame-finish.html';
        }
    }
});