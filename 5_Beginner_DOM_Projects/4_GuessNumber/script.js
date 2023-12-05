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
    alert("Please Enter a valid Number!");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else {
    previousGuess.push(guess);
    if (numberOfGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over! Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your guessed Number is too low");
  } else if (guess > randomNumber) {
    displayMessage("Your guessed Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += ` ${guess} `;
  numberOfGuesses++;
  remaining.innerHTML = `${11 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  playGame = false;
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" style="cursor: pointer">Start New Game</h2>`;
  resultsArea.appendChild(p);
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numberOfGuesses = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute("disabled");
    resultsArea.removeChild(p);
    playGame = true;
  });
}
