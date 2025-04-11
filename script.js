let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsText = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsText.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    feedback.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    feedback.style.color = "#0f0";
    document.getElementById("resetBtn").style.display = "inline-block";
  } else if (guess < randomNumber) {
    feedback.textContent = "📉 Too low! Try a higher number.";
    feedback.style.color = "#ff0";
  } else {
    feedback.textContent = "📈 Too high! Try a lower number.";
    feedback.style.color = "#ff0";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("resetBtn").style.display = "none";
}
