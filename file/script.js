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

score0Element.textContent = 0
score1Element.textContent = 0
diceElement.classList.add("hidden")

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
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
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
  }
})
