class Answers{
    constructor(){

    }

    display(){
        title = createElement('h2');
        title.html("A Survey To Bring About Change");
        title.position(150,70);

        var a1 = createButton("Yes");
        var a2 = createButton("No");

        a1.position(0,0);
        a2.position(0,0);

        a1.mousePressed(function(){
            update();
        });

        a2.mousePressed(function(){
            update();
        });
    }
}