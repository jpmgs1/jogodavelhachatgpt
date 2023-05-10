const words = ["banana", "abacaxi", "morango", "laranja", "uva", "melancia", "pera", "manga", "limao", "caju"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let remainingGuesses = 6;
let correctGuesses = 0;
let guessedLetters = [];
let wordDisplay = document.querySelector("#word-display");
let guessesDisplay = document.querySelector("#guesses");
let guessInput = document.querySelector("#guess-input");
let guessButton = document.querySelector("#guess-button");

// Inicializa a exibição da palavra com traços
let initialDisplay = "";
for (let i = 0; i < chosenWord.length; i++) {
  initialDisplay += "_ ";
}
wordDisplay.textContent = initialDisplay;

// Trata o palpite do jogador
function handleGuess() {
  let guess = guessInput.value.toLowerCase();
  guessInput.value = "";
  if (guessedLetters.includes(guess)) {
    alert("Você já adivinhou essa letra. Tente outra.");
    return;
  }
  guessedLetters.push(guess);
  let correctGuess = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === guess) {
      correctGuess = true;
      correctGuesses++;
      let wordArray = wordDisplay.textContent.split(" ");
      wordArray[i] = guess;
      wordDisplay.textContent = wordArray.join(" ");
    }
  }
  if (correctGuess) {
    if (correctGuesses === chosenWord.length) {
      alert("Parabéns! Você adivinhou a palavra.");
      resetGame();
    }
  } else {
    remainingGuesses--;
    if (remainingGuesses === 0) {
      alert("Game over! A palavra era " + chosenWord + ".");
     
const guessButton = document.querySelector("#guess");

const guessButton = document.querySelector("#guess");

guessButton.addEventListener("click", () => {
  const guessInput = document.querySelector("#guess-input");
  const guess = guessInput.value.toLowerCase();

  if (!guess.match(/^[a-zA-Z]+$/)) {
    alert("Por favor, insira apenas letras.");
    return;
  }

  if (guessedLetters.includes(guess)) {
    alert("Você já adivinhou essa letra.");
    return;
  }

  guessedLetters.push(guess);

  if (word.includes(guess)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        displayWord[i] = guess;
      }
    }

    updateDisplay();
    checkForWin();
  } else {
    remainingGuesses--;
    updateGuesses();
    checkForLoss();
  }

  guessInput.value = "";
});
