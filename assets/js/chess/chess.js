
/* global Backbone, COLOR, Tools, P_HEX */


$(document).ready(function () {

    var enPassant = {
        events: {
            "firstClick": "proposeEnPassant",
            "secondClick": "validEnPassant"
        },
        proposeEnPassant: function (chess, event) {
            var pieceSelect = event.case.getCurrent();
            if (Tools.sameType(pieceSelect, P_HEX.PAWN)) {
                var indexSelect = parseInt(event.indexCase);
                var lastMove = chess.moves.moves.getLastMove();
                if (lastMove) {
                    var dest = parseInt(lastMove.get("to"));
                    var difference = Math.abs(lastMove.get("from") - dest);
                    if (Tools.sameType(P_HEX.PAWN, lastMove.get("piece")) && difference === 16
                            && ((!Tools.isAtLeftBorder(dest) && indexSelect === (dest - 1))
                                    || (!Tools.isAtRightBorder(dest) && indexSelect === (dest + 1)))
                            ) {
                        //Possibilité de faire un "en passant"
                        var turn = event.turn;
                        var board = chess.board;
                        var incr = 8;
                        if (Tools.isBlack(turn)) {
                            incr = -incr;
                        }
                        //Ajouter un "en passant" plus loin
                        board.chessBoard.at(dest + incr).addTrAndBg(pieceSelect);
                    }
                }
            }
            return;
        },
        validEnPassant: function (chess, event, move) {
            //Manger il faut qu'il s'agisse d'un pion, et qu'il n'y ai personne dans la case en question
            if (Tools.sameType(move.get("piece"), P_HEX.PAWN) && !move.get("eat")) {
                var lastMove = chess.moves.moves.getLastMove();
                if (lastMove) {
                    var origin = parseInt(move.get("from"));
                    var now = parseInt(move.get("to"));
                    var lastTo = parseInt(lastMove.get("to"));
                    if (Tools.sameColumn(lastTo, now)
                            && !Tools.sameColumn(lastTo, origin)) {
                        //On peut manger la pièce en question ! (l'enlever du jeu)
                        move.set({
                            eat: chess.board.chessBoard.removePiece(lastMove.get("to")),
                            enPassant: true
                        });
                    }
                }
            }
            return move;
        }
    }

    var castling = {
        events: {
            "firstClick": "proposeCastling",
            "secondClick": "confirmCastling"
        },
        positionsCastling: {
            white: {
                left: [1, 2, 3],
                right: [6, 5]
            },
            black: {
                left: [57, 58, 59],
                right: [62, 61]
            }
        },
        proposeCastling: function (chess, event) {
            var selected = event.case.getCurrent();
            var color = event.turn;
            if (Tools.sameType(selected, P_HEX.KING) && !chess.moves.moves.myKingMoved(color)
                    && !event.case.currentIsBegun()
                    ) {
                var chosenColor = color === COLOR.WHITE ? this.positionsCastling.white :
                        color === COLOR.BLACK ? this.positionsCastling.black : undefined;

                !chess.moves.moves.myRightRookMoved(color)
                        && this.castlingPossible(chess, chosenColor.right, color) &&
                        this.updateForCastling(chess, chosenColor.right, event.case.getCurrent());


                !chess.moves.moves.myLeftRookMoved(color) &&
                        this.castlingPossible(chess, chosenColor.left, color) &&
                        this.updateForCastling(chess, chosenColor.left, event.case.getCurrent());
            }

        },
        confirmCastling: function (chess, event, move) {
            var moved = move.get("piece"),
                    from = parseInt(move.get("from")),
                    to = parseInt(move.get("to")),
                    difference = to - from;
            //Le roi a fait un roque
            if (Tools.sameType(moved, P_HEX.KING) && Math.abs(difference) === 2) {
                var rookOrigin,
                        rookDestination,
                        moveName;
                if (difference < 0) {
                    //grand roque
                    rookOrigin = to - 2;
                    rookDestination = to + 1;
                    moveName = {
                        'bigCastling' : true
                    };
                } else {
                    //petit roque
                    rookOrigin = to + 1;
                    rookDestination = to - 1;
                    moveName = {
                        'littleCastling' : true
                    };
                }
                var rook = chess.board.chessBoard.removePiece(rookOrigin);
                chess.board.chessBoard.at(rookDestination).setCurrent(rook);
                move.set(moveName);
            }
            return move;
        },
        castlingPossible: function (chess, positions, color) {
            for (var pos in positions) {
                var index = positions[pos];
                var box = chess.board.chessBoard.at(index);
                if (!box.isEmpty() || box.isBegunBy(Tools.getInvertColor(color))) {
                    return false;
                }
            }
            return true;
        },
        updateForCastling: function (chess, positions, piece) {
            var kingIndex = positions.length === 2 ? positions[0] : positions[1];
            chess.board.chessBoard.at(kingIndex).addTrack(piece);
        }
    }

    var Main = Backbone.View.extend({
        el: "#chess2",
        turn: COLOR.WHITE,
        numTurn: 0,
        rules: [],
        board: new ChessView(),
        moves: new MoveView(),
        eaten: new EatenView(),
        events: {
            "click": "handleClick",
            "dblclick": "rollBack"
        },
        addRule: function (rule) {
            this.rules.push(rule);
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
            var move = this.board.select(this, target, this.turn);
            if (move) {
                move.set({turn: this.numTurn});
                this.addMove(move);
                //Si un pion s'est fait mangé
                if (move.get("eat")) {
                    var eaten = new Eaten({
                        turn: this.numTurn,
                        lastPosition: move.get("to"),
                        piece: move.get("eat")
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
        addEaten: function (eatenObj) {
            this.eaten.addEaten(eatenObj);
        },
        rollBack: function () {
            var eat;
            var lastMove = this.moves.rollBack();
            eat = lastMove && lastMove.get("eat") && this.eaten.rollBack();
            if (lastMove) {
                var before = lastMove.get("to");
                var after = lastMove.get("from");
                this.board.chessBoard.moveFromTo(before, after, true);
                if (eat) {
                    this.board.chessBoard.at(eat.get("lastPosition")).setCurrent(eat.get("piece"));
                }
                this.board.secondClickEnd();
                this.numTurn--;
                this.switchTurn();
            }
        },
        switchTurn: function () {
            this.turn = Tools.getInvertColor(this.turn);
        }
    });
    var chess = new Main();
    chess.addRule(enPassant);
    chess.addRule(castling);
});