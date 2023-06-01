const buttons = document.querySelectorAll('button');
const playerScoreElement = document.querySelector('#player-score')
const computerScoreElement = document.querySelector('#computer-score')
const gameResultElement = document.querySelector('#game-result')

let playerScoreValue = 0
let computerScoreValue = 0
let gameResultText = ""
let gameCount = 0

updateGameScores()

function updateGameScores() {
    playerScoreElement.textContent = "Player Score: " + playerScoreValue
    computerScoreElement.textContent = "Computer Score: " + computerScoreValue
    gameResultElement.textContent = gameResultText
}

buttons.forEach((button) => {
    let winner = ""

    button.addEventListener('click', () => {
        if (button.id === "b1") {
            winner = gameRound("rock", computerRoll())
        }

        if (button.id === "b2") {
           winner = gameRound("paper", computerRoll())
        }

        if (button.id === "b3") {
           winner = gameRound("scissors", computerRoll())
        }


        if (winner == "Player Win") {
            playerScoreValue++
        } else if (winner == "Player Loss") {
            computerScoreValue++
        } else winner = "Tie!"
    
        gameResultText = winner
        gameCount++
        
        if (playerScoreValue === 5) {
            gameResultText += "- Player Wins It All!"
        }

        if (computerScoreValue === 5) {
            gameResultText += "- Computer Wins It All!"
        }

        updateGameScores()

    });
});

function gameRound(playerSelection, computerSelection) {
    console.log("player selection is " + playerSelection)
    console.log("comp selection is " + computerSelection)

    if (playerSelection === computerSelection) {
        return "Tie"
    }

    if (playerSelection === "rock") {
        if (computerSelection === ("scissors")) return "Player Win"; return "Player Loss"
    }

    if (playerSelection === "paper") {
        if (computerSelection ===("rock")) return "Player Win"; return "Player Loss"
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "paper") return "Player Win"; return "Player Loss"
    }
}

function playerRoll() {
    let promptText = prompt("Input, please!")
    lowerCase(promptText)

    if (promptText === null) return

    while (promptText !== "rock" && promptText !== "paper" && promptText !== "scissors") {
        promptText = prompt("No! Wrong input!")
        lowerCase(promptText)
    }

    return promptText
}

function computerRoll() {
    let roll = getRandomNumber(0, 2)

    if (roll == 0) return "rock"
    if (roll == 1) return "paper"
    if (roll == 2) return "scissors"
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function lowerCase(ourString) { if (ourString !== null) ourString.toLowerCase }