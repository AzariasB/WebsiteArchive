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
        var eaten = this.get("PRESENT");
        this.set({"PRESENT": piece});
        return eaten;
    },
    getCurrent: function () {
        return this.get("PRESENT");
    },
    removePiece: function () {
        var p = this.get("PRESENT");
        this.setCurrent(0);
        return p;
    },
    addTrAndBg: function (piece) {
        this.addTrack(piece);
        this.addBegun(piece);
    },
    addTrack: function (piece) {
        this.get("TRACKS").push(piece);
    },
    getTracks: function (color) {
        return Tools.ifWhiteElseIfBlack(color, this.get("WHITEBEGUN"), this.get("BLACKBEGUN"));
    },
    currentIsBegun: function () {
        return this.get("PRESENT") &&
                !_.isEmpty(this.getTracks(Tools.getInvertColor(this.get("PRESENT"))));
    },
    addBegun: function (piece) {
        var toPush = Tools.ifWhiteElseIfBlack(piece, this.get("WHITEBEGUN"), this.get("BLACKBEGUN"));
        toPush && toPush.push(piece);
    },
    getBegunner: function () {
        var present = this.getCurrent();
        if (present && this.currentIsBegun()) {
            return Tools.ifWhiteElseIfBlack(present, this.get("BLACKBEGUN"), this.get("WHITEBEGUN"));
            return Tools.getPieceColor(present) === COLOR.WHITE ? this.get("BLACKBEGUN") : this.get("WHITEBEGUN");
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
        _.each(this.get("TRACKS"), function (tracker, index) {
            if (Tools.sameId(tracker, piece)) {
                self.get("TRACKS").split(index, 1);
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
        _.each(this.get("TRACKS"), function (piece, index) {
            if (Tools.sameColor(piece, color)) {
                this.get("TRACKS").splice(index, 1);
            }
        });
    },
    removeBegun: function (piece) {
        var toRemove = Tools.ifWhiteElseIfBlack(piece, this.get("WHITEBEGUN"), this.get("BLACKBEGUN"));
        _.each(toRemove, function (mPiece, index) {
            if (Tools.sameId(mPiece, piece)) {
                toRemove.splice(index, 1);
            }
        });
        Tools.isWhite(piece) ? (this.set({WHITEBEGUN: toRemove})) : (this.set({BLACKGEBUN: toRemove}));

    },
    isBegunBy: function (begunner) {
        var color = Tools.getPieceColor(begunner);
        console.log(this.get("WHITEBEGUN"));
        return Tools.isWhite(color) ? !_.isEmpty(this.get("WHITEBEGUN")) :
                Tools.isBlack(color) ? !_.isEmpty(this.get("BLACKBEGUN")) : undefined;

    },
    isEmpty: function () {
        return (this.get("PRESENT") === 0);
    },
    canBeEaten: function (eater) {
        return !this.isEmpty() && !Tools.sameColor(this.get("PRESENT"), eater);
    },
    containsPiece: function (pieceHex) {
        var present = this.getCurrent();
        return Tools.sameType(pieceHex, present);
    },
    containKing: function (color) {
        var present = this.get("PRESENT");
        return Tools.sameType(present, P_HEX.KING) && Tools.sameColor(color, present);
    },
    hasATrack: function (piece) {
        var color = Tools.getPieceColor(piece);

        var hasTrack = false;
        _.each(this.get("TRACKS"), function (value) {
            if (Tools.sameId(value, piece) && Tools.sameType(value, piece) && Tools.sameColor(value, piece)) {
                hasTrack = true;
            }
        });
        return hasTrack;
    },
});