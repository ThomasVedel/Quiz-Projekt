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
        window.location = "endPage.html"
    }
}

if (location.href == 'SportQuestion1.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {correctGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
} 

if (location.href == 'SportQuestion2.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {correctGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}

if (location.href == 'SportQuestion3.html') {
    document.getElementById("button0").onclick = function () {correctGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}

if (location.href == 'SportQuestion4.html') {
    document.getElementById("button0").onclick = function () {correctGuess(}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
                                                             }

if (location.href == 'musicQuestion1.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}       document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {correctGuess()}
}

if (location.href == 'musicQuestion2.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {correctGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}

if (location.href == 'musicQuestion3.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {correctGuess()}
    document.getElementById("button2").onclick = function () {wrongGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}

if (location.href == 'musicQuestion4.html') {
    document.getElementById("button0").onclick = function () {wrongGuess()}
    document.getElementById("button1").onclick = function () {wrongGuess()}
    document.getElementById("button2").onclick = function () {correctGuess()}
    document.getElementById("button3").onclick = function () {wrongGuess()}
}
