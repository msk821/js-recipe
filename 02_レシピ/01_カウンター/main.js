/*
const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")

let count = 0
plusbutton.onclick = function () {
  count += 1
  display.textContent = count
}
*/

const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const doblebutton = document.getElementById("doble-button")

let count = 0
plusbutton.onclick = function () {
  count += 1
  display.textContent = count
}

doblebutton.onclick = function () {
  count *= 2
  display.textContent = count
}

/*
const display = document.getElementById("display")
const button1 = document.getElementById("1-button")
const button2 = document.getElementById("2-button")
const button3 = document.getElementById("3-button")
const button4 = document.getElementById("4-button")
const button5 = document.getElementById("5-button")
const button6 = document.getElementById("6-button")
const button7 = document.getElementById("7-button")
const button8 = document.getElementById("8-button")
const button9 = document.getElementById("9-button")
const plusbutton = document.getElementById("plus-button")
const dublebutton = document.getElementById("duble-button")
const minsbutton = document.getElementById("mins-button")
const waributton = document.getElementById("wari-button")
const ikorubutton = document.getElementById("ikoru-button")

let count = 0
*/
