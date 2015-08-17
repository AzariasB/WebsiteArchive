/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global Backbone, Tools, _, COLOR, P_HEX */

var ChessBox = Backbone.Model.extend({
    defaults: {
        PRESENT: 0,
        WHITEBEGUN: [],
        BLACKBEGUN: [],
        TRACKS: [],
    },
    setCurrent: function (piece) {
        var eaten = this.getCurrent();
        this.set({"PRESENT": piece});
        return eaten;
    },
    getCurrent: function () {
        return this.get("PRESENT");
    },
    getWhiteBegun: function () {
        return this.get("WHITEBEGUN");
    },
    getBlackBegun: function () {
        return this.get("BLACKBEGUN");
    },
    getTracks : function(){
        return this.get("TRACKS");
    },
    removePiece: function () {
        var p = this.getCurrent();
        this.setCurrent(0);
        return p;
    },
    addTrAndBg: function (piece) {
        this.addTrack(piece);
        this.addBegun(piece);
    },
    addTrack: function (piece) {
        this.getTracks().push(piece);
    },
    getBegun: function (color) {
        return Tools.ifWhiteElseIfBlack(color, this.getWhiteBegun(), this.getBlackBegun());
    },
    currentIsBegun: function () {
        return this.getCurrent() &&
                !_.isEmpty(this.getBegun(Tools.getInvertColor(this.getCurrent())));
    },
    addBegun: function (piece) {
        var toPush = Tools.ifWhiteElseIfBlack(piece, this.getWhiteBegun(), this.getBlackBegun());
        toPush && toPush.push(piece);
    },
    getBegunner: function () {
        var present = this.getCurrent();
        if (present && this.currentIsBegun()) {
            return Tools.ifWhiteElseIfBlack(present, this.getBlackBegun(), this.getWhiteBegun());
            return Tools.getPieceColor(present) === COLOR.WHITE ? this.getBlackBegun() : this.getWhiteBegun();
        } else {
            return;
        }
    },
    removeTrAndBg: function (piece) {
        this.removeTrack(piece);
        this.removeBegun(piece);
    },
    removeTrack: function (piece) {
        var self = this;
        _.each(this.getTracks(), function (tracker, index) {
            if (Tools.sameId(tracker, piece)) {
                self.getTracks().split(index, 1);
            }
        });
    },
    reset: function (color) {
        if (!color) {
            this.set({
                WHITEBEGUN: [],
                BLACKBEGUN: [],
                TRACKS: []
            });
        } else {
            if (color === COLOR.BLACK) {
                this.set({
                    BLACKBEGUN: []
                });
                this.resetTrackByColor(COLOR.BLACK);
            } else {
                this.set({
                    WHITEBEGUN: []
                });
                this.resetTrackByColor(COLOR.WHITE);
            }
        }
    },
    resetTrackByColor: function (color) {
        var self = this;
        _.each(this.getTracks(), function (piece, index) {
            if (Tools.sameColor(piece, color)) {
                self.getTracks().splice(index, 1);
            }
        });
    },
    removeBegun: function (piece) {
        var toRemove = Tools.ifWhiteElseIfBlack(piece, this.getWhiteBegun(), this.getBlackBegun());
        _.each(toRemove, function (mPiece, index) {
            if (Tools.sameId(mPiece, piece)) {
                toRemove.splice(index, 1);
            }
        });
        Tools.isWhite(piece) ? (this.set({WHITEBEGUN: toRemove})) : (this.set({BLACKGEBUN: toRemove}));

    },
    isBegunBy: function (begunner) {
        var color = Tools.getPieceColor(begunner);
        return Tools.isWhite(color) ? !_.isEmpty(this.getWhiteBegun()) :
                Tools.isBlack(color) ? !_.isEmpty(this.getBlackBegun()) : undefined;
    },
    kingCanComeHere: function (king) {
        var color = Tools.getPieceColor(king);
        return (this.isEmpty() && Tools.ifWhiteElseIfBlack(king,_.isEmpty(this.getBlackBegun()),_.isEmpty(this.getWhiteBegun())) )
                || ( !this.isEmpty() && !Tools.sameColor(this.getCurrent(), color) &&
                Tools.ifWhiteElseIfBlack(king, _.isEmpty(this.getBlackBegun(), _.isEmpty(this.getWhiteBegun()))) );
    },
    isEmpty: function () {
        return (this.getCurrent() === 0);
    },
    canBeEaten: function (eater) {
        return !this.isEmpty() && !Tools.sameColor(this.getCurrent(), eater);
    },
    containsPiece: function (pieceHex) {
        var present = this.getCurrent();
        return Tools.sameType(pieceHex, present);
    },
    containKing: function (color) {
        var present = this.getCurrent();
        return Tools.sameType(present, P_HEX.KING) && Tools.sameColor(color, present);
    },
    hasATrack: function (piece) {
        var color = Tools.getPieceColor(piece);

        var hasTrack = false;
        _.each(this.getTracks(), function (value) {
            if (Tools.sameId(value, piece) && Tools.sameType(value, piece) && Tools.sameColor(value, piece)) {
                hasTrack = true;
            }
        });
        return hasTrack;
    },
    colorHasTrack : function(color){
        var hasTrack = false;
        _.each(this.getTracks(),function(track){
            if(Tools.sameColor(track,color)){
                hasTrack = true;
            }
        });
        return hasTrack;
    }
});