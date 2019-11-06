document.getElementById("sportContainer").onclick = function() {chooseSport()}

document.getElementById("musicContainer").onclick = function() {chooseMusic()}


var timerInterval = null;
var testVariable = 10;

/*
function start() {
    stop(); // stoping the previous counting (if any)
    value = 0;
    timerInterval = setInterval(changeValue, 1000);  
}
var stop = function() {
    clearInterval(timerInterval);
}
*/
function chooseSport(){
    
    window.location = "SportQuestion1.html"
      
}

function chooseMusic(){
    // start();
    window.location="musicQuestion1.html"
}



function setTimer() {
    sessionStorage.setItem('timerInterval', JSON.stringify(timerInterval));
    document.getElementById("h1").innerHTML = sessionStorage.getItem("timerInterval")
    }

setTimer()



