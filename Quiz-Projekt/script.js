//function "use strict";

var points = 0;
var questionCounter = 1;
var question = "";

function wrongGuess() {
    document.getElementById("checkAnswer").innerHTML = "False"
} 


function correctGuess(){
    document.getElementById("points").innerHTML =points
    document.getElementById("checkAnswer").innerHTML = "True"
    points++
    if (points == 10){
        window.location = "C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/endPage.html"
    }
}



if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion1.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {correctGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
} 
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion2.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {correctGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion3.html') {
    document.getElementById("button0").onclick = function () {correctGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion4.html') {
    document.getElementById("button0").onclick = function () {correctGuess(}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}