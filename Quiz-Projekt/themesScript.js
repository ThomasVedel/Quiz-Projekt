document.getElementById("sportContainer").onclick = function() {chooseSport()}

document.getElementById("musicContainer").onclick = function() {chooseMusic()}

document.getElementById("animalContainer").onclick = function() {chooseAnimal()}

document.getElementById("memeContainer").onclick = function() {chooseMeme()}

function chooseSport(){
    window.location = "SportQuestion1.html"
}

function chooseMusic(){
    window.location="musicQuestion1.html"
}

function chooseAnimal(){
    window.location="AnimalQuestion1.html"
}

function chooseMeme(){
    window.location="memeQuestion1.html"
}


