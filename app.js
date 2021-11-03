const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const finalScore1 = document.getElementById("final-score-player-1");
const finalScore2 = document.getElementById("final-score-player-2");
const currentScore1 = document.getElementById("current-score-player-1");
const currentScore2 = document.getElementById("current-score-player-2");
const newGame = document.getElementById("new-game");
const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const hold = document.getElementById("hold");
const diceList = ['<i class="bi bi-dice-1"></i>', '<i class="bi bi-dice-2"></i>', '<i class="bi bi-dice-3"></i>', '<i class="bi bi-dice-4"></i>', '<i class="bi bi-dice-5"></i>', '<i class="bi bi-dice-6"></i>'];
const trophy = '<i class="bi bi-trophy"></i>';
let finalCurrentScore = 0;
let finalFinalScore1 = 0;
let finalFinalScore2 = 0;
let currentPlayer = 1;

newGame.addEventListener("click", () => {
  player1.innerHTML = "player 1";
  player2.innerHTML = "player 2";
  finalScore1.innerHTML = 0;
  finalScore2.innerHTML = 0;
  currentScore1.innerHTML = 0;
  currentScore2.innerHTML = 0;
  dice.innerHTML = "";
  currentPlayer = 1;
  finalCurrentScore = 0;
  finalFinalScore1 = 0;
  finalFinalScore2 = 0;
  document.getElementById("card-1").style.transform = "scale(1)";
  document.getElementById("card-1").style.color = "#000000";
  document.getElementById("card-1").style.boxShadow = "none";
  document.getElementById("card-2").style.transform = "scale(1)";
  document.getElementById("card-2").style.color = "#000000";
  document.getElementById("card-2").style.boxShadow = "none";
  roll.style.display = "flex";
  hold.style.display = "flex";
});

roll.addEventListener("click", () => {

  if (currentPlayer == 1) {
    document.getElementById("card-1").style.transform = "scale(1.3)";
    document.getElementById("card-1").style.color = "#3D2AA4";
    document.getElementById("card-1").style.boxShadow = "5px 5px 8px #3D2AA4";
    document.getElementById("card-2").style.transform = "scale(1)";
    document.getElementById("card-2").style.color = "#000000";
    document.getElementById("card-2").style.boxShadow = "none";
  } else {
    document.getElementById("card-2").style.transform = "scale(1.3)";
    document.getElementById("card-2").style.color = "#3D2AA4";
    document.getElementById("card-2").style.boxShadow = "5px 5px 8px #3D2AA4";
    document.getElementById("card-1").style.transform = "scale(1)";
    document.getElementById("card-1").style.color = "#000000";
    document.getElementById("card-1").style.boxShadow = "none";
  }

  let diceId = Math.floor(Math.random() * 6);
  let currentDice = diceList[diceId];
  let currentScore = diceId + 1;
  dice.innerHTML = `${currentDice}`;
  finalCurrentScore += currentScore;

  if (currentPlayer == 1) {
    currentScore1.innerHTML = `${finalCurrentScore}`;
    if (currentScore == 1) {
      currentScore1.innerHTML = 0;
      currentPlayer = 2;
      finalCurrentScore = 0;
    }
  } else {
    currentScore2.innerHTML = `${finalCurrentScore}`;
    if (currentScore == 1) {
      currentScore2.innerHTML = 0;
      currentPlayer = 1;
      finalCurrentScore = 0;
    }
  }
});

hold.addEventListener("click", () => {
  if (currentPlayer == 1) {
    finalFinalScore1 += finalCurrentScore;
    finalScore1.innerHTML = `${finalFinalScore1}`;
    finalCurrentScore = 0;
    currentScore1.innerHTML = `${finalCurrentScore}`;
    currentPlayer = 2;
    if (finalFinalScore1 >= 35) {
      player1.innerHTML = `winner! ${trophy}`;
      roll.style.display = "none";
      hold.style.display = "none";
      dice.innerHTML = "";
    }
  } else {
    finalFinalScore2 += finalCurrentScore;
    finalScore2.innerHTML = `${finalFinalScore2}`;
    finalCurrentScore = 0;
    currentScore2.innerHTML = `${finalCurrentScore}`;
    currentPlayer = 1;
    if (finalFinalScore2 >= 35) {
      player2.innerHTML = `winner! ${trophy}`;
      roll.style.display = "none";
      hold.style.display = "none";
      dice.innerHTML = "";
    }
  }
});
