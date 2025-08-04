const form = document.querySelector(".form");
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultsArea = document.querySelector(".resultParas");
const p = document.createElement("p");

let previousGuess = [];
let numberOfGuesses = 0;
const MAX_GUESSES = 10;
let playGame = true;
let randomNumber = parseInt(Math.random() * 100 + 1);

if (playGame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    previousGuess.push(guess);
    numberOfGuesses++;
    cleanUpDisplay(guess);
    if (numberOfGuesses >= MAX_GUESSES) {
      displayMessage(`Game Over. The correct number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed right! 🎉 The number was ${randomNumber}`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Your guess is too high!");
  } else {
    displayMessage("Your guess is too low!");
  }
}

function cleanUpDisplay(guess) {
  userInput.value = "";
  guessSlot.textContent += ` ${guess},`;
  remaining.textContent = `${MAX_GUESSES - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.disabled = true;
  submit.disabled = true;
  p.innerHTML = `<h2 id="restartGame" style="cursor: pointer;">New Game</h2>`;
  resultsArea.appendChild(p);
  document.querySelector("#restartGame").addEventListener("click", newGame);
}

function newGame() {
  userInput.disabled = false;
  submit.disabled = false;
  randomNumber = parseInt(Math.random() * 100 + 1);
  previousGuess = [];
  numberOfGuesses = 0;
  guessSlot.textContent = "";
  remaining.textContent = MAX_GUESSES;
  lowOrHi.innerHTML = "";
  resultsArea.removeChild(p);
}
