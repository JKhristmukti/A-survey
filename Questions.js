class Questions{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val();
        });
    }

    static update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    static getYesAnswers(){
        var YesAnsRef = database.ref('yesAnswers');
        YesAnsRef.on("value",(data)=>{
            yesAnswers = data.val();
        });
    }

    static updateYesAnswer(ans){
        database.ref('/').update({
            yesAnswers: ans
        })
    }

    static getNoAnswers(){
        var NoAnsRef = database.ref('noAnswers');
        NoAnsRef.on("value",(data)=>{
            noAnswers = data.val();
        });
    }

    static updateNoAnswer(ans){
        database.ref('/').update({
            noAnswers: ans
        })
    }

}