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

    if (currentQuizData.options[optionIndex] === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    optionsContainer.innerHTML = "";
    resultTextElement.innerText = `You scored ${score} out of ${quizData.length}.`;

    resultContainer.style.display = "block";
}

// Start the quiz when the page loads
document.addEventListener("DOMContentLoaded", startQuiz);