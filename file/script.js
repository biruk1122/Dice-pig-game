"use strict"

const score0Element = document.querySelector("#score--0")
const score1Element = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")
const diceElement = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")

let scores, currentScore, activePlayer, playing

//Starting condition
const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0Element.textContent = 0
  score1Element.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceElement.classList.add("hidden")
  player0El.classList.remove("player--winner")
  player1El.classList.remove("player--winner")
  player0El.classList.add("player--active")
  player1El.classList.remove("player--active")
}
init()

const switchPlayer = function () {
  //Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle("player--active")
  player1El.classList.toggle("player--active")
}

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1, Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1
    console.log(dice)

    //2, display dice
    diceElement.classList.remove("hidden")
    diceElement.src = `../image/dice-${dice}.png`

    //3, Check for rolled 1: if it is true. switch to next player
    if (dice !== 1) {
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore
    } else {
      switchPlayer()
    }
  }
})

btnHold.addEventListener("click", function () {
  if (playing) {
    //1, Add current score to active player's score
    scores[activePlayer] += currentScore
    //scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]

    //Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false
      diceElement.classList.add("hidden")
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner")
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active")
    } else {
      //Switch to the next player
      switchPlayer()
    }
  }
})

btnNew.addEventListener("click", function () {
  init()
})
