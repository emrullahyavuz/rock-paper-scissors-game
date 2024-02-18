// Player-Side
const playerTurn = document.getElementById("playerTurn");
const playerScore = document.getElementById("playerScore");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

// Computer-Side
const computerTurn = document.getElementById("computerTurn");
const computerScore = document.getElementById("computerScore");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

// All Icons
const allGameIcons = document.querySelectorAll(".icon");
const resultText = document.getElementById("resultText");


let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const choices = {
    rock:{
        name:"Rock",
        win:["scissors"]
    },
    paper:{
        name:"Paper",
        win:["rock"]
    },
    scissors:{
        name:"Scissors",
        win:["paper"]
    },

}

function resetGame() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    resultText.textContent = "";
    playerTurn.textContent = "";
    computerTurn.textContent = "";
    resetSelected();
}


function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove("selected");
        stopConfetti();
    })
}

function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    // console.log(computerChoiceNumber)
    if (computerChoiceNumber < 0.35) {
        computerChoice = "rock";
    }
    else if (computerChoiceNumber <= 0.65){
        computerChoice = "paper";
    }
    else if (computerChoiceNumber <= 1) {
        computerChoice = "scissors";
    }
}

function updateScore(playerChoice) {
    // console.log(playerChoice,computerChoice)
    if (playerChoice === computerChoice) {
        
        playerScoreNumber++;
        computerScoreNumber++;
        
        resultText.textContent = "Berabere !";
        playerScore.textContent = playerScoreNumber;
        computerScore.textContent = computerScoreNumber;

        
    }
    else {
        const choice = choices[playerChoice];
        if(choice.win.indexOf(computerChoice) === 0) {

            playerScoreNumber++;
            resultText.textContent = "Emrullah Yavuz kazandı!";
            playerScore.textContent = playerScoreNumber;
            startConfetti();
        }
        else {
            computerScoreNumber++;
            resultText.textContent = "Bilgisayar kazandı!";
            computerScore.textContent = computerScoreNumber;

        }
    }
 
}

function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    computerChoiceSelected();
    updateScore(playerChoice)
}

function computerChoiceSelected() {

    
  
    switch (computerChoice) {
      case "rock":
        computerRock.classList.add("selected");
        computerTurn.textContent = "- Taş";
        break;
      case "paper":
        computerPaper.classList.add("selected");
        computerTurn.textContent = "- Kağıt";
        break;
      case "scissors":
        computerScissors.classList.add("selected");
        computerTurn.textContent = "- Makas";
        break;
    }
  }
  

function selected(playerChoice) {

  checkResult(playerChoice);

  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerTurn.textContent = "- Taş";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerTurn.textContent = "- Kağıt";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerTurn.textContent = "- Makas";
      break;
  }

  

}
