seriesOfGames(5)

function seriesOfGames(numberOfGames) {
    for (let i=0; i<numberOfGames; i++) {
        console.log(gameRound(playerRoll(), computerRoll()))
        }
}

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
    if (promptText !== null) lowerCase(promptText)

    while (promptText !== "rock" && promptText !== "paper" && promptText !== "scissors") {
        promptText = prompt("No! Wrong input!")
        if (promptText !== null) lowerCase(promptText)
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