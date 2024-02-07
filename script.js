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
    resultTextElement.innerText = `You scored ${score} out of ${quizData.length}.`;

    if (score === quizData.length) {
        setTimeout(() => {
            window.location.href = 'email-input.html';
        }, 3000);
    }

    resultContainer.style.display = "block";
}

document.addEventListener("DOMContentLoaded", startQuiz);

//email-input
document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c1d4fd72864d2e50dcbf86";
    const emailInput = document.getElementById('emailInput');
    const emailSubmitButton = document.getElementById('email-submit');
    const addUpdateMsg = document.getElementById('add-update-msg');

    emailInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            handleEmailInput();
        }
    });

    emailInput.addEventListener('blur', function () {
        handleEmailInput();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMsg(message, isSuccess) {
        addUpdateMsg.innerText = message;
        addUpdateMsg.style.color = isSuccess ? 'green' : 'red';
        addUpdateMsg.style.display = 'block';

        setTimeout(function () {
            addUpdateMsg.style.display = 'none';
        }, 3000);
    }

    function handleEmailInput() {
        const enteredEmail = emailInput.value.trim();

        if (isValidEmail(enteredEmail)) {
            const jsonData = { "email": enteredEmail };
            const settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(jsonData),
                beforeSend: function () {
                    emailSubmitButton.disabled = true;
                }
            };

            fetch("https://assignment2-0234.restdb.io/rest/email-list", settings)
                .then(response => response.json())
                .then(() => {
                    
                    emailSubmitButton.disabled = false;
                    showMsg('Email successfully submitted.', true);

                    setTimeout(function () {
                        window.location.href = 'minigame-finish.html';
                    }, 3000);
                })
                .catch(error => {
                    console.error('Error:', error);
                    showMsg('An error occurred. Please try again later.', false);
                });
        } else {
            showMsg('Invalid email. Please enter a valid email address.', false);
        }
    }
});
