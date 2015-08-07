

/* global Backbone, _, PIECES_CHAR, Tools */

var Move = Backbone.Model.extend({
    defaults : {
        turn : -1,
        from : 0,
        to : 0,
        piece : PIECES_CHAR.WHITE.PAWN,
        eat : false,
        check : false,
        checkmate : false,
        enPassant : false,
        littleCastling : false,
        bigCastling : false
    },
    
    getString : function(){
        var piece = Tools.getHtmlName(this.get("piece"));
        var fromAl = Tools.getAlebraFromPosition(this.get("from"));
        var toAl = Tools.getAlebraFromPosition(this.get("to"));
        return piece + " " + fromAl + this.getMiddleString() + toAl;
    },
    
    getMiddleString : function(){
        if(this.get("eat")){
            return "x";
        }else if(this.get("check")){
            return "+";
        }else if(this.get("checkmate")){
            return "#";
        }else if(this.get("enPassant")){
            return "e.p.";
        }else if(this.get("littleCastling")){
            return "0-0";
        }else if(this.get("bigCastlin")){
            return "0-0-0";
        }else{
            return "-";
        }
    }
});


var Eaten = Backbone.Model.extend({   
    defaults : {
        turn : -1,
        lastPosition : 0,
        piece : PIECES_CHAR.WHITE.PAWN
    },
    
    getString : function(){
        return Tools.getHtmlName(this.get("piece"));
    }
});


var Moves = Backbone.Collection.extend({
    model : Move,

    
    addMove : function(move){
        this.add(move);
    },
    getMove : function(index){
        return this.at(index);
    },
    getLastMove : function(){
        return this.at(this.length - 1);
    },
    removeLastMove : function(){
        return this.pop();
    }
});

var Eatens = Backbone.Collection.extend({
    model : Eaten,
    
    addEaten : function(eat){
        this.add(eat);
    },
    
    getLast : function(){
        return this.at(this.length -1);
    },
    
    removeLastEat : function(){
        return this.pop();
    }
});

var MoveView = Backbone.View.extend({
    el : '#lst_coups',
    moves : new Moves(),
    intitialize : function(){
        
    },
    
    addMove : function(moveObject){
        this.moves.addMove(moveObject);
        this.renderLast();
    },
    
    renderLast : function(){
        var lastMove = this.moves.getLastMove();
        var $p = $("<p/>",{
            html : lastMove.getString()
        });
        this.$el.prepend($p);
    },
    rollBack : function(){
        this.$el.children().first().remove();
        return this.moves.removeLastMove();
    }
});

var EatenView = Backbone.View.extend({
    el : '#eaten',
    eatens : new Eatens(),
    
    addEaten : function(eatObject){
        this.eatens.addEaten(eatObject);
        this.renderLast();
    },
    
    renderLast : function(){
        var lastEat = this.eatens.getLast();
        var $p = $("<p/>",{
            html : lastEat.getString()
        });
        this.$el.append($p);
    },
    
    rollBack : function(){
        this.$el.children().first().remove();
        return this.eatens.removeLastEat();
    }
});