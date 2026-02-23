let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsCount = 0;

function checkGuess() {

    let userInput = document.getElementById("userInput").value;
    let resultMessage = document.getElementById("resultMessage");
    let attempts = document.getElementById("attempts");

    let guessedNumber = parseInt(userInput);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        resultMessage.textContent = "Enter a valid number between 1 and 100.";
        return;
    }

    attemptsCount++;

    if (guessedNumber === randomNumber) {
        resultMessage.textContent = "Correct! 🎉 You guessed it!";
        resultMessage.style.color = "green";
    } 
    else if (guessedNumber > randomNumber) {
        resultMessage.textContent = "Too High! Try Again.";
        resultMessage.style.color = "red";
    } 
    else {
        resultMessage.textContent = "Too Low! Try Again.";
        resultMessage.style.color = "red";
    }

    attempts.textContent = "Attempts: " + attemptsCount;
}
