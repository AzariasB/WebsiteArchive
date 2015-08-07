
/* global Backbone, COLOR, Tools */


$(document).ready(function () {

    var Main = Backbone.View.extend({
        el: "#chess2",
        turn: COLOR.WHITE,
        numTurn: 0,
        board: new ChessView(),
        moves: new MoveView(),
        eaten: new EatenView(),
        events: {
            "click": "handleClick",
            "dblclick" : "rollBack"
        },
        handleClick: function (event) {
            var target = event.target;
            if ($(target).parents("#board")) {
                this.boardClick(target);
            } else if ($(target).parents("#lst_coups")) {
                this.movesclick(target);
            } else if ($(target).parent("#eaten")) {
                this.eatenClick(target);
            }
        },
        boardClick: function (target) {
            var move = this.board.select(target, this.turn);
            if (move) {
                move.set({turn: this.numTurn});
                this.addMove(move);
                //Si un pion s'est fait mangé
                if(move.get("eat")){
                    var eaten = new Eaten({
                        turn : this.numTurn,
                        lastPosition : move.get("to"),
                        piece : move.get("eat")
                    });
                    this.eaten.addEaten(eaten);
                }
                this.numTurn++;
                this.switchTurn();
            }
        },
        eatenClick: function (target) {
            console.log(target);
        },
        movesclick: function (target) {
            console.log(target);
        },
        addMove: function (move) {
            this.moves.addMove(move);
        },
        addEaten : function(eatenObj){
            this.eaten.addEaten(eatenObj);
        },
        rollBack : function(){
            var eat;
            var lastMove = this.moves.rollBack();
            eat = lastMove && lastMove.get("eat") && this.eaten.rollBack();
            
            if(lastMove){
                var before = lastMove.get("to");
                var after = lastMove.get("from");
                this.board.chessBoard.moveFromTo(before,after,true);
                if(eat){
                    this.board.chessBoard.at(eat.get("lastPosition")).setCurrent(eat.get("piece"));
                }
                this.board.secondClickEnd();
                this.numTurn--;
                this.switchTurn();
            }
        },
        switchTurn : function(){
            this.turn = Tools.getInvertColor(this.turn);
        }
    });

    var chess = new Main();
});