class Questions{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("values",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({gameState: state});
    }

    getAnswer(){
        if(gameState===0){
            display();
        }
    }
}