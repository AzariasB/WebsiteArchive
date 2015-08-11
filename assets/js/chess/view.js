

/* global Backbone, CHESSBOARD, _, Gen, PIECES_CODE, Tools, COLOR, P_HEX */


var ChessView = Backbone.View.extend({
    el: '#board',
    selected: undefined,
    chessBoard: new ChessBoard(),
    initialize: function () {
        this.render();
        //var res = this.showPawnModal(COLOR.BLACK);
    },
    render: function () {
        this.$el.text("");
        var counter = 0;

        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (i === 0) {
                    if (j < 8) {
                        var $letter = $('<div/>', {
                            text: String.fromCharCode(97 + j),
                            class: "up_letter"
                        }).css({"left": (j + 1) * 64 + 1});
                        this.$el.append($letter);
                    }
                } else if (j === 0) {
                    var $letter = $('<div/>', {
                        "text": i,
                        class: "side_number"
                    }).css({top: i * 64 + 10});
                    this.$el.append($letter);
                } else {
                    var sq;
                    sq = $('<div/>', {
                        id: counter,
                        class: "box chessbox"
                    }).css({
                        left: (j - 1 / 4) * 64 + 1,
                        top: (i - 1 / 4) * 64 + 1,
                    });
                    this.$el.append(sq);
                    counter++;
                }
            }
        }
        this.renderPieces();
    },
    renderPieces: function () {
        var self = this;
        this.chessBoard.each(function (value) {
            self.renderPiece(value.id, value.getCurrent());
        });
    },
    renderPiece: function (div_id, piece_code) {
        if (!_.isUndefined(piece_code) && piece_code !== 0) {
            this.$el.find('#' + div_id)
                    .html(Tools.getHtmlName(piece_code))
                    .css({"cursor": "pointer"});
        } else if (!_.isUndefined(piece_code) && piece_code === 0) {
            this.$el.find('#' + div_id)
                    .html("")
                    .css({"cursor": "default"});
        }
    },
    select: function (game, touched, turn) {
        var id_div = touched.id;
        var mCase = this.chessBoard.at(id_div);
        var event = {
            'indexCase': id_div,
            'case': mCase,
            'turn': turn
        };
        if (!_.isUndefined(mCase) &&
                mCase.getCurrent() !== 0 && Tools.sameColor(mCase.getCurrent(), turn)) {
            _.each(game.rules, function (rule) {
                var funcName = rule.events.firstClick;
                if (funcName && rule[funcName]) {
                    rule[funcName](game, event);
                }
            });
            return this.firstClick(id_div, mCase, turn);
        } else if (this.state === "first" && !_.isUndefined(this.selected)) {
            var move = this.chessBoard.moveFromTo(this.selected, id_div);
            if (move) {
                _.each(game.rules, function (rule) {
                    var funcName = rule.events.secondClick;
                    if (funcName && rule[funcName]) {
                        move = rule[funcName](game,event,move);
                    }
                });
                this.secondClickEnd(turn);
                return move;
            }
            return;
        }
    },
    proposeChoice: function (piece_code) {
        var tracks = this.chessBoard.getTracksOf(piece_code);
        this.ableDivs(tracks);
    },
    resetChoice: function () {
        _.each(this.$el.children(), function (value) {
            $(value).css({
                "border": "none"
            });
        });
    },
    ableDivs: function (boxes) {
        var self = this;
        _.each(boxes, function (value) {
            var id = value.id;
            var border = "5px solid green";
            if (value.getCurrent() !== 0 && !Tools.sameColor(value.getCurrent(), self.turn)) {
                border = "5px solid red";
            }

            $('#' + id).css({
                "border": border,
                "cursor": "pointer"
            });
        });
    },
    firstClick: function (indexSelected, mCase, turn) {
        this.state = "first";
        this.resetChoice();
        $('#' + indexSelected).css({
            "border": "5px dotted green"
        });

        this.proposeChoice(mCase.getCurrent());
        this.selected = indexSelected;
        return;
    },
    secondClickEnd: function (turn) {
        this.renderPieces();
        this.chessBoard.updateAll(turn);
        this.hilightChessKing(turn);
        this.resetChoice();
        this.state = "none";
    },
    hilightChessKing: function (turn) {
        _.each(this.$el.children(), function (value) {
            $(value).css({
                "background-color": ''
            });
        });
        var color = Tools.getInvertColor(turn);
        if (this.chessBoard.myKingIsChess(color)) {
            var indexKing = this.chessBoard.findColorKing(color);
            if (indexKing >= 0) {
                $("#" + indexKing).css({
                    "background-color": 'red'
                });
            }
        }
    }
});
