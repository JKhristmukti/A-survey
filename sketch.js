var answer,question;

function setup() {
    canvas = createCanvas(500,500);
    database = firebase.database();
    answer = new Answers();
    question = new Questions();
    question.getState();
    question.getAnswer();
}

function draw() {
    answer.display();
}