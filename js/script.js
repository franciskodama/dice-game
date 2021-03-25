let player1Score = 0
let player2Score = 0
let player1Turn = true


//SELECTORS --------------------------------
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')  
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')


//EVENT LISTENERS --------------------------
rollBtn.addEventListener('click', rollDice)
resetBtn.addEventListener('click', reset)


//FUNCTIONS --------------------------------
function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    message.innerHTML = "Player 1 Turn"
    player1Dice.innerHTML = "-"
    player2Dice.innerHTML = "-"
    player1Scoreboard.innerHTML = player1Score
    player2Scoreboard.innerHTML = player2Score
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
}

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber  // = player1Score = player1Score + randomNumber
        player1Scoreboard.innerHTML = player1Score
        player1Dice.innerHTML = randomNumber
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.innerHTML = "Player 2 Turn"
        // player1Turn = false


    } else {
        player2Score += randomNumber  // = player2Score = player2Score + randomNumber
        player2Scoreboard.innerHTML = player2Score
        player2Dice.innerHTML = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.innerHTML = "Player 1 Turn"
        // player1Turn = true
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🎉"
        showDisplayButton()
    }
    // This piece of code do the same thing of player1Turn = false/true
    player1Turn = !player1Turn
}
