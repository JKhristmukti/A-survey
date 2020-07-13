class Answer{
    constructor(){
        this.title = createElement('h1');
        this.a1 = createButton("Yes");
        this.a2 = createButton("No");
        this.reset = createButton('Again');
        this.q1 = createElement('h2');
        this.q2 = createElement('h2');
        this.q3 = createElement('h2');
        this.thankYou = createElement('h1');
    }

    display(){
        this.title.html("A Survey To Bring About Change");
        this.title.position(displayWidth/4,50);

        this.reset.position(displayWidth-50,50);

        this.a1.position(displayWidth/3,displayHeight/2+50);
        this.a2.position(displayWidth/3,displayHeight/2+80);

        question.getState();
        Questions.getYesAnswers();
        Questions.getNoAnswers();
        this.reset.mousePressed(function(){
            Questions.update(0);
            Questions.updateYesAnswer(0);
            Questions.updateNoAnswer(0);
        })
    }

    Q1display(){
        this.q1.html('Do you know about the Coronavirus ?');
        this.q1.position(displayWidth/4,displayHeight/2-100);
    }

    Q2display(){
        this.q2.html('Are your relatives infected ?');
        this.q2.position(displayWidth/4,displayHeight/2-50);
        this.q1.hide();
    }

    Q3display(){
        this.q3.html('Do you believe God can stop this pandemic ?');
        this.q3.position(displayWidth/4,displayHeight/2);
        this.q1.hide();
        this.q2.hide();
    }

    ThankYou(){
        this.thankYou.html('THANK - YOU!');
        this.thankYou.position(displayWidth/4,100);
        this.q1.hide();
        this.q2.hide();
        this.q3.hide();
        this.a1.hide();
        this.a2.hide();
    }

    YesUpdate(state){
        Questions.getYesAnswers();
        this.a1.mousePressed(function(){
            Questions.update(state);
            YesAns+=1;
            Questions.updateYesAnswer(YesAns);
        });
    }

    NoUpdate(state){
        Questions.getNoAnswers();
        this.a2.mousePressed(function(){
            Questions.update(state);
            NoAns+=1;
            Questions.updateNoAnswer(NoAns);
        });
    }
}