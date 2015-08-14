
/* global Tools, P_HEX, COLOR */

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
};

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
            var chosenColor = Tools.ifWhiteElseIfBlack(color, this.positionsCastling.white, this.positionsCastling.black)

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
                    'bigCastling': true
                };
            } else {
                //petit roque
                rookOrigin = to + 1;
                rookDestination = to - 1;
                moveName = {
                    'littleCastling': true
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
            if (positions.length === 3 && pos === 0 && !box.isEmpty()) {
                return false;
            } else if (!box.isEmpty() || box.isBegunBy(Tools.getInvertColor(color))) {
                return false;
            }
        }
        return true;
    },
    updateForCastling: function (chess, positions, piece) {
        var kingIndex = positions.length === 2 ? positions[0] : positions[1];
        chess.board.chessBoard.at(kingIndex).addTrack(piece);
    }
};

var pawnTransform = {
    init: function () {
        var self = this;
        $(".modal-close").on("click", function () {
            $("#newpiece").modal("hide");
            self.changePawn(this);
        });
    },
    events: {
        "secondClick": "transformPawn"
    },
    transformPawn: function (chess, event, move) {
        this.chess = chess;
        this.event = event;
        var piece = event.case.getCurrent();
        if (Tools.sameType(piece, P_HEX.PAWN) && Tools.isOnHisLastLine(piece, event.indexCase)) {
            //Le pion est arrivé sur sa dernière case, on doit le transformer
            $("#newpiece").modal({
                keyboard: false
            });
        }
        return move;
    },
    changePawn: function (target) {
        var nwType = $(target).data("hex");
        var pawn = this.event.case.getCurrent();
        var nwPiece = Tools.changeType(pawn, nwType);
        this.chess.board.chessBoard.at(this.event.indexCase).setCurrent(nwPiece);
        this.chess.board.chessBoard.updateAll();
        this.chess.board.renderPieces();
    }

};

var mat = {
    events: {
        "secondClick": "checkForMat"
    },
    checkForMat: function (chess, event, move) {
        /**
         * Mat signifie : à la find de mon tour, l'autre roi :
         *  - Est en échec
         *  - Toutes les cases autour sont menacées, ou contiennent un allié
         *  - Les "begun" listes ne peuvent pas être protégées
         * 
         */
        var color = Tools.getInvertColor(event.turn);
        //console.log(Tools.getColorName(color));
        //console.log("Mon roi est en échec", chess.board.chessBoard.myKingIsChess(color));
//        console.log(chess.board.chessBoard.whiteKingBegunTrack);
//        console.log(chess.board.chessBoard.blackKingBegunTrack);
//        console.log("Mon roi ne peut pas bouger", chess.board.chessBoard.kingCannotMove(color));
        if (chess.board.chessBoard.myKingIsChess(color)
                && chess.board.chessBoard.kingCannotMove(color)) {
//            console.log("Echec et mat !");
        }
        return move;
    },
    cinematiqueCheckMate: function (colorWin) {

    }
};

var pat = {
    events: {
        "secondClick": "checkForPat"
    },
    checkForPat: function (chess, event, move) {
        /**
         * Pat signifie, à la fin de mon tour, l'autre roi :
         * - N'est pas en échec
         * - Est le seul à pouvoir bouger
         * - A toutes les cases autour de lui menacées
         */
        return move;

    },
    cinematiqueCheckPat: function () {

    }
};