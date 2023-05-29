function computerRoll() {
    let roll = getRandomNumber(0, 2)

    if (roll == 0) return "rock"
    if (roll == 1) return "paper"
    if (roll == 2) return "scissors"
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
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

console.log(gameRound("rock", computerRoll()))