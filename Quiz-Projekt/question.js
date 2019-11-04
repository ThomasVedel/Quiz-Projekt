function Question(id, question, option1, option2, option3, option4, answer) {
    this.id = id;
    this.question = question;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
    this.option4 = option4;
    this.answer = answer;
}

var sportQuestion1 = new Question(0, 'Who is this man?', "Christian Eriksen", "Kasper Schmeichel", "Jan Midtgaard", "Donald Obama", "Kasper Schmeichel");
var sportQuestion2 = new Question(1, 'Who is this man?', "Christian Eriksen", "Dronning Magrethe", "Anders And", "Martin Sørensen", "Christian Eriksen");

{sportQuestion1, sportQuestion2};

function updateQuestion1() {
    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Schmeichel.png';

    document.getElementById("button0").value = sportQuestion1.option1;
    document.getElementById("button1").value = sportQuestion1.option2;
    document.getElementById("button2").value = sportQuestion1.option3;
    document.getElementById("button3").value = sportQuestion1.option4;

    document.getElementById("question").innerHTML = sportQuestion1.question;
}

function updateQuestion2() {
    
    //document.getElementById("questionPicture").src='C:\Users\mehgn\OneDrive\Dokumenter\Brackets\Aflevering1\Christian Eriksen.jpg';

    document.getElementById("button0").value = sportQuestion2.option1;
    document.getElementById("button1").value = sportQuestion2.option2;
    document.getElementById("button2").value = sportQuestion2.option3;
    document.getElementById("button3").value = sportQuestion2.option4;
    
    document.getElementById("question").innerHTML = sportQuestion2.question;
}

updateQuestion1();