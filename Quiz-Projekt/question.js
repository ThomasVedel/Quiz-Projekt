function Question(id, question, option1, option2, option3, option4, answer) {
    this.id = id;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
}

var sportQuestion1 = new Question(1, 'Who is this man?', "Christian Eriksen", "Kasper Schmeichel", "Jan Midtgaard", "Donald Obama", "Kasper Schmeichel");
var sportQuestion2 = new Question(2, 'What is the national sport in Japan?', "Fencing", "Rugby", "Sumo Wrestling", "Jiu Jitsu", "Sumo Wrestling");
var sportQuestion3 = new Question(3, 'What was the Olympic city of 1992?', "Barcelona", "London", "Hong Kong", "Copenhagen", "Barcelona");
var sportQuestion4 = new Question(4, 'How matches did Mohammed Ali lose in his career?', "1", "3", "10", "15", "1");


//var questionArray = [sportQuestion1, sportQuestion2, sportQuestion3, sportQuestion4];

function updateQuestion1() {
    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1Gitten\Quiz-Projekt\Quiz-Projekt\Schmeichel.png';

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

    

         
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion1.html') {
    updateQuestion1()
} 
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion2.html') {
    updateQuestion2()
}
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion3.html') {
    updateQuestion3()
}
if (location.href == 'file:///C:/Users/mehgn/OneDrive/Dokumenter/Brackets/Aflevering1Gitten/Quiz-Projekt/Quiz-Projekt/SportQuestion4.html') {
    updateQuestion4()
}