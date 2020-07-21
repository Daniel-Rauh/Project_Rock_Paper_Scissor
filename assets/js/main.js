const box = document.getElementById("rounds")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twenty = document.getElementById("twenty")
const roundStatus = document.getElementById("round-status")
const user = document.getElementById("user")
const comp = document.getElementById("comp")
const display = document.getElementById("display")
const status = document.getElementById("status")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorBtn = document.getElementById("scissor")
let scoreUser = 0
let scoreComputer = 0
let round
let roundCounter = 0
let compNumber
function getRounds() {
    if (five.checked) {
        round = 5
    } else if (ten.checked) {
        round = 10
    } else if (fifteen.checked) {
        round = 15
    } else {
        round = 20
    }
}
function updateDisplay() {
    getRounds()
    display.innerHTML = `${scoreUser} : ${scoreComputer}`
    box.style.display = `none`
    roundStatus.style.display = "block"
    roundStatus.innerHTML = `${roundCounter} / ${round}`
    if (scoreUser == scoreComputer) {
        user.style.backgroundColor = "#312a22"
        comp.style.backgroundColor = "#312a22"
    } else if (scoreUser > scoreComputer) {
        user.style.backgroundColor = "#0a570a"
        comp.style.backgroundColor = "red"
    } else {
        comp.style.backgroundColor = "#0a570a"
        user.style.backgroundColor = "red"
    }
    if (roundCounter == round) {
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorBtn.disabled = true
        if (scoreUser > scoreComputer) {
            status.innerHTML += `<br>Player wins the game!`
        } else if (scoreComputer > scoreUser) {
            status.innerHTML += `<br>Computer wins the game!`
        } else {
            status.innerHTML += `<br>Game ended in a draw`
        }
    }
}
function rock() {
    roundCounter++
    compNumber = Math.floor(Math.random() * 3) + 1
    paperBtn.style.backgroundColor = "#836d53"
    scissorBtn.style.backgroundColor = "#836d53"
    if (compNumber == 1) {
        status.innerHTML = `It was a draw. You both chose Rock.`
        rockBtn.style.backgroundColor = "#836d53"
    } if (compNumber == 2) {
        status.innerHTML = `Paper<span class="upper">(comp)</span> beats Rock<span class="upper">(user)</span>. You lose!`
        scoreComputer += 1
        rockBtn.style.backgroundColor = "red"
    } else if (compNumber == 3) {
        status.innerHTML = `Rock<span class="upper">(user)</span> beats Scissor<span class="upper">(comp)</span>. You win!`
        scoreUser += 1
        rockBtn.style.backgroundColor = "#0d8a0d"
    }
    updateDisplay()
}
function paper() {
    roundCounter++
    compNumber = Math.floor(Math.random() * 3) + 1
    rockBtn.style.backgroundColor = "#836d53"
    scissorBtn.style.backgroundColor = "#836d53"
    if (compNumber == 1) {
        status.innerHTML = `It was a draw. You both chose Paper.`
        paperBtn.style.backgroundColor = "#836d53"
    } if (compNumber == 2) {
        status.innerHTML = `Scissor<span class="upper">(comp)</span> beats Paper<span class="upper">(user)</span>. You lose!`
        scoreComputer += 1
        paperBtn.style.backgroundColor = "red"
    } else if (compNumber == 3) {
        status.innerHTML = `Paper<span class="upper">(user)</span> beats Rock<span class="upper">(comp)</span>. You win!`
        scoreUser += 1
        paperBtn.style.backgroundColor = "#0d8a0d"
    }
    updateDisplay()
}
function scissor() {
    roundCounter++
    compNumber = Math.floor(Math.random() * 3) + 1
    rockBtn.style.backgroundColor = "#836d53"
    paperBtn.style.backgroundColor = "#836d53"
    if (compNumber == 1) {
        status.innerHTML = `It was a draw. You both chose Scissor.`
        scissorBtn.style.backgroundColor = "#836d53"
    } if (compNumber == 2) {
        status.innerHTML = `Rock<span class="upper">(comp)</span> beats Scissor<span class="upper">(user)</span>. You lose!`
        scoreComputer += 1
        scissorBtn.style.backgroundColor = "red"
    } else if (compNumber == 3) {
        status.innerHTML = `Scissor<span class="upper">(user)</span> beats Paper<span class="upper">(comp)</span>. You win!`
        scoreUser += 1
        scissorBtn.style.backgroundColor = "#0d8a0d"
    }
    updateDisplay()
}
function restart() {
    box.style.display = "block"
    roundStatus.style.display = "none"
    display.innerHTML = `0 : 0`
    status.innerHTML = `Let's play again!`
    scoreUser = 0
    scoreComputer = 0
    roundCounter = 0
    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorBtn.disabled = false
    rockBtn.style.backgroundColor = "#836d53"
    paperBtn.style.backgroundColor = "#836d53"
    scissorBtn.style.backgroundColor = "#836d53"
}