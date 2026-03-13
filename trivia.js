// trivia.js

// ---------------------------
// Date and Time
// ---------------------------
function displayDate() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let dayName = days[now.getDay()];
    let monthName = months[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12; // convert 0 -> 12
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("date").innerHTML =
        `Today is ${dayName}, ${monthName} ${date}, ${year}. It is ${hours}:${minutes} ${ampm}.`;
}

// ---------------------------
// Personalized Greeting
// ---------------------------
function greetingUser() {
    let name = prompt("Enter your name:");
    while (!name) {
        name = prompt("Please enter your name:");
    }
    // Capitalize first letter
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const hour = new Date().getHours();
    let greeting = "";

    switch (true) {
        case (hour >= 5 && hour < 12):
            greeting = "Good Morning";
            break;
        case (hour >= 12 && hour < 18):
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }

    document.getElementById("greeting").innerHTML = `${greeting}, ${name}!`;
}

// ---------------------------
// Email Validation
// ---------------------------
function validateEmail() {
    let email = prompt("Enter your email address:");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    while (!emailRegex.test(email)) {
        email = prompt("Invalid email. Please enter a valid email address:");
    }

    const [username, domain] = email.split("@");
    document.getElementById("email").innerHTML =
        `Username: ${username.toUpperCase()} <br> Domain: ${domain.toLowerCase()}`;
}

// ---------------------------
// Quote of the Day
// ---------------------------
function displayQuote() {
    const quotes = [
        "Believe you can and you're halfway there.",
        "Do one thing every day that scares you.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Happiness is not something ready made. It comes from your own actions.",
        "The only way to do great work is to love what you do."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = `"${quotes[randomIndex]}"`;
}

// ---------------------------
// Trivia Quiz
// ---------------------------
function quiz() {
    const questions = [
        "What is the capital of Texas?",
        "Which language runs in the browser?",
        "What does CSS stand for?"
    ];

    const answers = ["austin", "javascript", "cascading style sheets"];
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let correct = false;

        while (guesses > 0 && !correct) {
            let response = prompt(`${questions[i]} (Attempt ${4 - guesses}/3)`).toLowerCase();
            if (response === answers[i]) {
                score += guesses; // 3 points first try, 2 second, 1 third
                alert("Correct!");
                correct = true;
            } else {
                guesses--;
                if (guesses > 0) {
                    alert(`Incorrect. Try again. You have ${guesses} guesses left.`);
                } else {
                    alert(`Incorrect. The correct answer was: ${answers[i]}`);
                }
            }
        }
    }

    const totalPoints = answers.length * 3;
    const percentage = ((score / totalPoints) * 100).toFixed(2);

    document.getElementById("score").innerHTML =
        `Your score: ${score} out of ${totalPoints} (${percentage}%)`;
}

// ---------------------------
// Initialize Page
// ---------------------------
window.onload = function() {
    displayDate();
    greetingUser();
    validateEmail();
    displayQuote();
    quiz();
};