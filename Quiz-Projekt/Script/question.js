
function Question(id, question, option1, option2, option3, option4, answer) {
    this.id = id;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
}

var path = "file:///C:/wamp64/www/Quiz/Quiz-Projekt/View/";
var sportQuestion1 = new Question(1, 'Who is this man?', "Christian Eriksen", "Kasper Schmeichel", "Jan Midtgaard", "Donald Obama", "Kasper Schmeichel");
var sportQuestion2 = new Question(2, 'What is the national sport in Japan?', "Fencing", "Rugby", "Sumo Wrestling", "Jiu Jitsu", "Sumo Wrestling");
var sportQuestion3 = new Question(3, 'What was the Olympic city of 1992?', "Barcelona", "London", "Hong Kong", "Copenhagen", "Barcelona");
var sportQuestion4 = new Question(4, 'How matches did Mohammed Ali lose in his career?', "1", "3", "10", "15", "1");

var musicQuestion1 = new Question(1, 'What is the name of this gentleman?', "50 Cent", "David Beckham", "Machine Gun Kelly", "Frank Sinatra", "Frank Sinatra");
var musicQuestion2 = new Question(2, 'What is the name of Jay-Zs wife?', "Elisabeth", "Kylle", "Beyonce", "Ibi Makienok", "Beyonce");
var musicQuestion3 = new Question(3, 'At what age did Elvis Presley die?', "39", "42", "58", "49", "42");
var musicQuestion4 = new Question(4, 'What is the name of the rap-group, who made hits like "stik den ind" and "Makreles uber alles"', "Suspekt", "G-unit", "TDB-Den Klamme Hets", "F.I.P");

var memeQuestion1 = new Question(1, 'What is this?', "Bike frog", "Dat boi", "Frogman", "A dank frog", "Dat boi");
var memeQuestion2 = new Question(2, 'What happened to this meme?', "It has been deepfried", "It has been cooked", "It has been heavily edited", "It has been boiled", "It has been deepfried");
var memeQuestion3 = new Question(3, 'Where is this meme from?', "Battlefield", "Call of Duty", "Counter Strike", "Dota", "Call of Duty");
var memeQuestion4 = new Question(4, 'Which song made this girl legendary?', "Ocean man", "Shooting stars", "Man's not hot", "Boom boom boom", "Boom boom boom");

var animalQuestion1 = new Question(1, 'Which animmal never sleeps?', "Deer", "Bullfrog", "Seals", "Whales", "Bullfrog");
var animalQuestion2 = new Question(2, 'How many heart chambers does a cockroach have?', "6", "9", "12", "15", "12");
var animalQuestion3 = new Question(3, 'Where is the horse from the greatest horsemovie ever from?', "Cimabue", "Cimbalom", "Cimbri", "Cimarron", "Cimarron");
var animalQuestion4 = new Question(4, 'Out of 12, how many dogs survived the Titanic disaster?', "2", "3", "4", "5", "3");


function updateQuestion1() {
    document.getElementById("button0").value = sportQuestion1.option1;
    document.getElementById("button1").value = sportQuestion1.option2;
    document.getElementById("button2").value = sportQuestion1.option3;
    document.getElementById("button3").value = sportQuestion1.option4;
    document.getElementById("question").innerHTML = sportQuestion1.question;
}

function updateQuestion2() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1Gitten\Quiz-Projekt\Quiz-Projekt\JapanSport.jpg';

    document.getElementById("button0").value = sportQuestion2.option1;
    document.getElementById("button1").value = sportQuestion2.option2;
    document.getElementById("button2").value = sportQuestion2.option3;
    document.getElementById("button3").value = sportQuestion2.option4;

    document.getElementById("question").innerHTML = sportQuestion2.question;
}

function updateQuestion3() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1Gitten\Quiz-Projekt\Quiz-Projekt\Olympics.jpg';

    document.getElementById("button0").value = sportQuestion3.option1;
    document.getElementById("button1").value = sportQuestion3.option2;
    document.getElementById("button2").value = sportQuestion3.option3;
    document.getElementById("button3").value = sportQuestion3.option4;

    document.getElementById("question").innerHTML = sportQuestion3.question;
}

function updateQuestion4() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1Gitten\Quiz-Projekt\Quiz-Projekt\muhammadali.jpg';

    document.getElementById("button0").value = sportQuestion4.option1;
    document.getElementById("button1").value = sportQuestion4.option2;
    document.getElementById("button2").value = sportQuestion4.option3;
    document.getElementById("button3").value = sportQuestion4.option4;

    document.getElementById("question").innerHTML = sportQuestion4.question;
}

function updateMusicQuestion1() {

    document.getElementById("button0").value = musicQuestion1.option1;
    document.getElementById("button1").value = musicQuestion1.option2;
    document.getElementById("button2").value = musicQuestion1.option3;
    document.getElementById("button3").value = musicQuestion1.option4;

    document.getElementById("question").innerHTML = musicQuestion1.question;
}

function updateMusicQuestion2() {

    document.getElementById("button0").value = musicQuestion2.option1;
    document.getElementById("button1").value = musicQuestion2.option2;
    document.getElementById("button2").value = musicQuestion2.option3;
    document.getElementById("button3").value = musicQuestion2.option4;

    document.getElementById("question").innerHTML = musicQuestion2.question;
}

function updateMusicQuestion3() {

    document.getElementById("button0").value = musicQuestion3.option1;
    document.getElementById("button1").value = musicQuestion3.option2;
    document.getElementById("button2").value = musicQuestion3.option3;
    document.getElementById("button3").value = musicQuestion3.option4;

    document.getElementById("question").innerHTML = musicQuestion3.question;
}

function updateMusicQuestion4() {

    document.getElementById("button0").value = musicQuestion4.option1;
    document.getElementById("button1").value = musicQuestion4.option2;
    document.getElementById("button2").value = musicQuestion4.option3;
    document.getElementById("button3").value = musicQuestion4.option4;

    document.getElementById("question").innerHTML = musicQuestion4.question;
}

function updateAnimalQuestion1() {

    document.getElementById("button0").value = animalQuestion1.option1;
    document.getElementById("button1").value = animalQuestion1.option2;
    document.getElementById("button2").value = animalQuestion1.option3;
    document.getElementById("button3").value = animalQuestion1.option4;

    document.getElementById("question").innerHTML = animalQuestion1.question;
}

function updateAnimalQuestion2() {

    document.getElementById("button0").value = animalQuestion2.option1;
    document.getElementById("button1").value = animalQuestion2.option2;
    document.getElementById("button2").value = animalQuestion2.option3;
    document.getElementById("button3").value = animalQuestion2.option4;

    document.getElementById("question").innerHTML = animalQuestion2.question;
}

function updateAnimalQuestion3() {

    document.getElementById("button0").value = animalQuestion3.option1;
    document.getElementById("button1").value = animalQuestion3.option2;
    document.getElementById("button2").value = animalQuestion3.option3;
    document.getElementById("button3").value = animalQuestion3.option4;

    document.getElementById("question").innerHTML = animalQuestion3.question;
}

function updateAnimalQuestion4() {

    document.getElementById("button0").value = animalQuestion4.option1;
    document.getElementById("button1").value = animalQuestion4.option2;
    document.getElementById("button2").value = animalQuestion4.option3;
    document.getElementById("button3").value = animalQuestion4.option4;

    document.getElementById("question").innerHTML = animalQuestion4.question;
}

function updateMemeQuestion1() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Christian Eriksen.jpg';

    document.getElementById("button0").value = memeQuestion1.option1;
    document.getElementById("button1").value = memeQuestion1.option2;
    document.getElementById("button3").value = memeQuestion1.option3;
    document.getElementById("button2").value = memeQuestion1.option4;

    document.getElementById("question").innerHTML = memeQuestion1.question;
}

function updateMemeQuestion2() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Christian Eriksen.jpg';

    document.getElementById("button0").value = memeQuestion2.option1;
    document.getElementById("button1").value = memeQuestion2.option2;
    document.getElementById("button2").value = memeQuestion2.option3;
    document.getElementById("button3").value = memeQuestion2.option4;

    document.getElementById("question").innerHTML = memeQuestion2.question;
}

function updateMemeQuestion3() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Christian Eriksen.jpg';

    document.getElementById("button0").value = memeQuestion3.option1;
    document.getElementById("button1").value = memeQuestion3.option2;
    document.getElementById("button2").value = memeQuestion3.option3;
    document.getElementById("button3").value = memeQuestion3.option4;

    document.getElementById("question").innerHTML = memeQuestion3.question;
}

function updateMemeQuestion4() {

    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Christian Eriksen.jpg';

    document.getElementById("button0").value = memeQuestion4.option1;
    document.getElementById("button1").value = memeQuestion4.option2;
    document.getElementById("button2").value = memeQuestion4.option3;
    document.getElementById("button3").value = memeQuestion4.option4;

    document.getElementById("question").innerHTML = memeQuestion4.question;
}


if (location.href == path + 'SportQuestion1.html') {
    updateQuestion1()
}
if (location.href == path +'SportQuestion2.html') {
    updateQuestion2()
}
if (location.href == path +'SportQuestion3.html') {
    updateQuestion3()
}
if (location.href == path +'SportQuestion4.html') {
    updateQuestion4()
}
if (location.href == path + 'memeQuestion1.html') {
    updateMemeQuestion1()
}
if (location.href == path +'memeQuestion2.html') {
    updateMemeQuestion2()
}
if (location.href == path +'memeQuestion3.html') {
   updateMemeQuestion3()
}
if (location.href == path +'memeQuestion4.html') {
   updateMemeQuestion4()
}
if (location.href == path +'musicQuestion1.html') {
    updateMusicQuestion1()
}
if (location.href == path +'musicQuestion2.html') {
    updateMusicQuestion2()
}
if (location.href == path +'musicQuestion3.html') {
    updateMusicQuestion3()
}
if (location.href == path +'musicQuestion4.html') {
    updateMusicQuestion4()
}
if (location.href == path +'AnimalQuestion1.html') {
    updateAnimalQuestion1()
}
if (location.href == path +'AnimalQuestion2.html') {
    updateAnimalQuestion2()
}
if (location.href == path +'AnimalQuestion3.html') {
    updateAnimalQuestion3()
}
if (location.href == path +'AnimalQuestion4.html') {
    updateAnimalQuestion4()
}
