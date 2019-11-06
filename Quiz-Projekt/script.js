//function "use strict";

 
var questionCounter = 1;
var question = "";

function wrongGuess() {
    document.getElementById("checkAnswer").innerHTML = "False"
} 


function correctGuess(){
    incrementPoints()    
    document.getElementById("checkAnswer").innerHTML = "True"
   /*
    if (points == 10){
<<<<<<< HEAD
        window.location = path + "endPage.html"

    }
    */
    if (location.href === path +'SportQuestion1.html') {
        window.location = path +"SportQuestion2.html"
    }
    
    if (location.href === path +'SportQuestion2.html') {
        window.location = path +"SportQuestion3.html"
    } 

    if (location.href === path +'SportQuestion3.html') {
        window.location = path +"SportQuestion4.html"
    } 

    if (location.href === path +'SportQuestion4.html') {
        window.location = path +"endPage.html"
    }
    
    if (location.href === path +'musicQuestion1.html') {
        window.location = path +"musicQuestion2.html"
    }
    if (location.href === path +'musicQuestion2.html') {
        window.location = path +"musicQuestion3.html"
    } 

    if (location.href === path +'musicQuestion3.html') {
        window.location = path +"musicQuestion4.html"
    } 

    if (location.href === path +'musicQuestion4.html') {
        window.location = path +"endPage.html"
    } 
    
=======
        window.location = "endPage.html"
    }
>>>>>>> 93eb63f352d974a4e03a0eccb18039f7a30777ca
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

<<<<<<< HEAD
if (location.href == path +'SportQuestion4.html') {
    document.getElementById("button0").onclick = function () {correctGuess()}
=======
if (location.href == 'SportQuestion4.html') {
    document.getElementById("button0").onclick = function () {correctGuess(}
>>>>>>> 93eb63f352d974a4e03a0eccb18039f7a30777ca
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
<<<<<<< HEAD

function changeValue() {
  document.getElementById("demo").innerHTML = ++value;
}
//document.getElementById("h1").innerHTML = sessionStorage.getItem("points")

function incrementPoints(){
  var currentValue = getPoints();
     sessionStorage['points'] = currentValue + 1;
}
function getPoints() {
   return parseInt(sessionStorage["points"]);
}

    function setDefault(){    
  if(sessionStorage['points'] === undefined) {
     sessionStorage['points'] = 0;
  }
}
setDefault();
document.getElementById("h1").innerHTML = getPoints();
=======
>>>>>>> 93eb63f352d974a4e03a0eccb18039f7a30777ca
