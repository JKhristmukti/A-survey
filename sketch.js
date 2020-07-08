var ans,question;

var gameState = 0;

var YesAns = 0;
var NoAns = 0;

function setup() {
    canvas = createCanvas(500,500);
    database = firebase.database();
    question = new Questions();
    ans = new Answer();
}

function draw() {
    if(gameState===0){
        ans.display();
        ans.YesUpdate(1);
        ans.NoUpdate(1);
        ans.Q1display();
    }

    question.getState();
    Questions.getYesAnswers();
    Questions.getNoAnswers();
    if(gameState===1){
        ans.display();
        ans.YesUpdate(2);
        ans.NoUpdate(2);
        ans.Q2display();
    }

    question.getState();
    Questions.getYesAnswers();
    Questions.getNoAnswers();
    if(gameState===2){
        ans.display();
        ans.YesUpdate(3);
        ans.NoUpdate(3);
        ans.Q3display();
    }

    question.getState();
    Questions.getYesAnswers();
    Questions.getNoAnswers();
    if(gameState===3){
        ans.ThankYou();
    }
}