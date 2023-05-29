function getFistRoll() {
    let roll = getRandomNumber(0, 2)

    console.log(roll)
    if (roll == 0) return "ROCK"
    if (roll == 1) return "PAPER"
    if (roll == 2) return "SCISSORS"
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getFistRoll())