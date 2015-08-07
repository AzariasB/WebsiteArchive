
var PIECES_CHAR = {
    WHITE: {
        KING: '9812',
        QUEEN: '9813',
        ROOK: '9814',
        BISHOP: '9815',
        KNIGHT: '9816',
        PAWN: '9817'
    },
    BLACK: {
        KING: '9818',
        QUEEN: '9819',
        ROOK: '9820',
        BISHOP: '9821',
        KNIGHT: '9822',
        PAWN: '9823'
    }
};
var P_HEX = {
    PAWN: 0x6,
    BISHOP: 0x5,
    KNIGHT: 0x4,
    ROOK: 0x3,
    QUEEN: 0x2,
    KING: 0x1
};
var COLOR = {
    WHITE: 0x8,
    BLACK: 0x10
};


var Gen = {
    idW: 0x20,
    idB: 0x20,
    newWPiece: function (piece_code) {
        if (piece_code !== 0) {
            piece_code += this.idW;
            piece_code += COLOR.WHITE;
            this.idW += 0x20;
        }
        return piece_code;
    },
    newBPiece: function (piece_code) {
        if (piece_code !== 0) {
            piece_code += this.idB;
            piece_code += COLOR.BLACK;
            this.idB += 0x20;
        }
        return piece_code;
    },
};



var Tools = {
    isWhite: function (piece) {
        return (piece & COLOR.WHITE) !== 0;
    },
    isBlack: function (piece) {
        return (piece & COLOR.BLACK) !== 0;
    },
    sameId: function (piece1, piece2) {
        piece1 = piece1 & 0x1111E0;
        piece2 = piece2 & 0x1111E0;
        return piece1 === piece2;
    },
    sameType : function(piece1,piece2){
        return this.getPieceType(piece1) === this.getPieceType(piece2);
    },
    getPieceColor: function (piece_code) {
        return Tools.isWhite(piece_code) ? COLOR.WHITE : Tools.isBlack(piece_code) ? COLOR.BLACK : null;
    },
    getPieceType: function (piece_code) {
        return (piece_code & 0x7);
    },
    getName: function (piece_hex,algebra) {
        algebra = algebra || false;
        var piece_type = Tools.getPieceType(piece_hex);
        switch (piece_type) {
            case P_HEX.KING :
                return algebra ? "R" : "Roi";
                break;
            case P_HEX.QUEEN :
                return algebra ? "D" : "Dame";
                break;
            case P_HEX.ROOK :
                return algebra ? "T" : "Tour";
                break;
            case P_HEX.BISHOP:
                return algebra ? "F" : "Fou";
                break;
            case P_HEX.KNIGHT:
                return algebra ? "C": "Cavalier";
                break;
            case P_HEX.PAWN:
                return algebra ? "" : "Pion";
                break;
            default :
                return "";
                break;
        }
    },    
    
    getHtmlName: function (piece_number) {
        var piece_type = Tools.getPieceType(piece_number);
        //console.log(piece_number.toString(16));
        var color = Tools.getPieceColor(piece_number);
        var code = {};
        var hex = "&#";
        if (color === COLOR.WHITE) {
            code = PIECES_CHAR.WHITE;
        } else {
            code = PIECES_CHAR.BLACK;
        }

        switch (piece_type) {
            case P_HEX.KING:
                return hex + code.KING;
            case P_HEX.QUEEN:
                return hex + code.QUEEN;
            case P_HEX.ROOK:
                return hex +code.ROOK;
            case P_HEX.KNIGHT:
                return hex + code.KNIGHT;
            case P_HEX.BISHOP:
                return hex + code.BISHOP;
            case P_HEX.PAWN:
                return hex + code.PAWN;
            default:
                break;
        }
    },
    isAtLeftBorder: function (div_id) {
        return ((Math.abs(div_id) % 8) === 0);
    },
    isAtRightBorder: function (div_id) {
        return (((Math.abs(div_id) + 1) % 8) === 0);
    },
    sameColor: function (piece1, piece2) {
        return (Tools.getPieceColor(piece1) === Tools.getPieceColor(piece2));
    },
    getPositionFromLeft: function (div_id) {
        return (div_id % 8);
    },
    turnLeft: function (direction) {
        return (direction === 7 || direction === -9 || direction === -1);
    },
    turnRight: function (direction) {
        return (direction === 9 || direction === -7 || direction === 1);
    },
    isEven: function (number) {
        return number & 2 === 2;
    },
    isOdd: function (number) {
        return number & 2 !== 0;
    },
    getInvertColor: function (color) {
        return color === COLOR.BLACK ? COLOR.WHITE : COLOR.BLACK;
    },
    getAlebraFromPosition : function (index) {
        var column = index & 0x7;
        var row = (index - column) / 8;
        return String.fromCharCode(97 + column) + (row+1);
    },
};