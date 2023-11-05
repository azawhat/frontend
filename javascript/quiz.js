const questions = [
    {
        question: "Who is the creator and developer of the website?",
        options: ["Angsar", "Amir", "Sanzhar", "Azamat"],
        correctAnswer: "Azamat",
    },
    {
        question: "How many achievements are listed in the carousell?",
        options: ["5", "4", "3", "2"],
        correctAnswer: "3",
    },
    {
        question: "What grade did I get for the lab 1?",
        options: ["100", "90", "85", "50"],
        correctAnswer: "100",
    },
    {
        question: "What about the Lab 4 quiz?",
        options: ["63", "56", "92", "74"],
        correctAnswer: "74",
    },
    {
        question: "Who is our sponsor?",
        options: ["Nvidia", "Adobe", "Microsoft", "Apple"],
        correctAnswer: "Adobe",
    },
    {
        question: "Who is our another sponsor?",
        options: ["Samruk", "Red bull", "Nokia", "AMD"],
        correctAnswer: "Red bull",
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");
const maxTimePerQuestion = 5; // max time for each bar
let currentTime = 0;
let progressInterval;

function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        startBar();
    } else {
        redirect();
    }
}

function redirect() {
    questionElement.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";

    // the result displaying
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
        resultElement.textContent = "You got 100%! Promo Code: FREE gives you 20$ discount. Copy it to not forget!";
        playSound();
    } else {
        resultElement.textContent = `You got only ${Math.round(percentage)}%`;
    }
    checkRedirect();
}

function playSound() {
    const audio = new Audio("success.mp3"); // audio that plays
    audio.play();
}

function updateBar() {
    if (currentTime < maxTimePerQuestion) {
        currentTime++;
        const width = (currentTime / maxTimePerQuestion) * 100;
        progressBar.style.width = width + "%";
    } else {
        clearInterval(progressInterval);
        const correctAnswer = questions[currentQuestion - 1].correctAnswer;
        showCorrectAnswer(correctAnswer);
        startBar();

        if (currentQuestion >= questions.length) {
            redirect();
        }
    }
}

function checkRedirect() {
    if (progressBar.style.width === "100%") {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000); // redirect after 1 second 
    } else {
        setTimeout(checkRedirect, 100);
    }
}

function startBar() {
    clearInterval(progressInterval);
    currentTime = 0;
    progressBar.style.width = "0%";
    progressInterval = setInterval(updateBar, 1000);
}

displayQuestion();
startBar();
