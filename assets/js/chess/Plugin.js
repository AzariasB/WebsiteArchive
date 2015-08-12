

/* global Backbone, _, PIECES_CHAR, Tools, COLOR, P_HEX */

var Move = Backbone.Model.extend({
    defaults: {
        turn: -1,
        from: 0,
        to: 0,
        piece: PIECES_CHAR.WHITE.PAWN,
        eat: false,
        check: false,
        checkmate: false,
        enPassant: false,
        littleCastling: false,
        bigCastling: false
    },
    getString: function () {
        var piece = Tools.getHtmlName(this.get("piece"));
        var fromAl = Tools.getAlebraFromPosition(this.get("from"));
        var toAl = Tools.getAlebraFromPosition(this.get("to"));
        return piece + " " + fromAl + this.getMiddleString() + toAl +
                (this.getEndString() ? this.getEndString() : "");
    },
    getMiddleString: function () {
        if (this.get("eat")) {
            return "x";
        } else if (this.get("check")) {
            return "+";
        } else if (this.get("checkmate")) {
            return "#";
        } else if (this.get("littleCastling")) {
            return " 0-0 ";
        } else if (this.get("bigCastling")) {
            return " 0-0-0 ";
        } else {
            return "-";
        }
    },
    getEndString: function () {
        if (this.get("enPassant")) {
            return " e.p. ";
        } 
    }
});


var Eaten = Backbone.Model.extend({
    defaults: {
        turn: -1,
        lastPosition: 0,
        piece: PIECES_CHAR.WHITE.PAWN
    },
    getString: function () {
        return Tools.getHtmlName(this.get("piece"));
    }
});


var Moves = Backbone.Collection.extend({
    model: Move,
    kingMoved: {
        white: false,
        black: false
    },
    rookMoved: {
        left: {
            white: false,
            black: false
        },
        right: {
            white: false,
            black: false
        }
    },
    addMove: function (move) {
        var piece = move.get("piece");
        if (Tools.sameType(piece, P_HEX.KING)) {
            this.updateKingMoved(piece);
        } else if (Tools.sameType(piece, P_HEX.ROOK)) {
            this.updateRookMoved(move);
        }
        this.add(move);
    },
    getMove: function (index) {
        return this.at(index);
    },
    getLastMove: function () {
        return this.at(this.length - 1);
    },
    removeLastMove: function () {
        return this.pop();
    },
    updateKingMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        color === COLOR.WHITE ? (this.whiteKingMoved = true) :
                color === COLOR.BLACK ? (this.blackKingMoved = true) : "";
    },
    updateRookMoved: function (move) {
        var from = parseInt(move.get("from"));
        var color = Tools.getPieceColor(parseInt(move.get("piece")));
        if (Tools.isAtLeftBorder(from)) {
            color === COLOR.WHITE ? (this.rookMoved.left.white = true) :
                    color === COLOR.BLACK ? (this.rookMoved.left.black = true) : undefined;
        } else if (Tools.isAtRightBorder(from)) {
            color === COLOR.WHITE ? (this.rookMoved.right.white = true) :
                    color === COLOR.BLACK ? (this.rookMoved.right.black = true) : undefined;
        }
    },
    myKingMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return color === COLOR.WHITE ? this.whiteKingMoved :
                color === COLOR.BLACK ? this.blackKingMoved : undefined;
    },
    myLeftRookMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return color === COLOR.WHITE ? this.rookMoved.left.white :
                color === COLOR.BLACK ? this.rookMoved.left.black : undefined;
    },
    myRightRookMoved: function (piece) {
        var color = Tools.getPieceColor(piece);
        return color === COLOR.WHITE ? this.rookMoved.right.white :
                color === COLOR.BLACK ? this.rookMoved.right.black : undefined;
    }
});

var Eatens = Backbone.Collection.extend({
    model: Eaten,
    addEaten: function (eat) {
        this.add(eat);
    },
    getLast: function () {
        return this.at(this.length - 1);
    },
    removeLastEat: function () {
        return this.pop();
    }
});

var MoveView = Backbone.View.extend({
    el: '#lst_coups',
    moves: new Moves(),
    intitialize: function () {

    },
    addMove: function (moveObject) {
        this.moves.addMove(moveObject);
        this.renderLast();
    },
    renderLast: function () {
        var lastMove = this.moves.getLastMove();
        var $p = $("<p/>", {
            html: lastMove.getString()
        });
        this.$el.prepend($p);
    },
    rollBack: function () {
        this.$el.children().first().remove();
        return this.moves.removeLastMove();
    }
});

var EatenView = Backbone.View.extend({
    el: '#eaten',
    eatens: new Eatens(),
    addEaten: function (eatObject) {
        this.eatens.addEaten(eatObject);
        this.renderLast();
    },
    renderLast: function () {
        var lastEat = this.eatens.getLast();
        var $p = $("<p/>", {
            html: lastEat.getString()
        });
        this.$el.append($p);
    },
    rollBack: function () {
        this.$el.children().first().remove();
        return this.eatens.removeLastEat();
    }
});