var W = "Blanc";
var B = "Noir";
var PIECES = ['roi', 'reine', 'tour', 'fou', 'cavalier', 'pion'];
var VERTICAL = 8;
var HORIZONTAL = 1;
var UP_LEFT = false;
var DOWN_RIGHT = true;
var SIDE = 30;

$(function () {

    for (var code in PIECES) {
        PIECES[parseInt(code) + 9818] = new piece_code(parseInt(code) + 9818, PIECES[code]);
        delete PIECES[code];
    }
    delete(PIECES);

    var start_position;
    var start_div;
    var current_player;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var sq;
            sq = $('<div/>');
            sq.css({
                position: 'absolute',
                width: 64,
                height: 64,
                left: j * 64 + 1,
                top: i * 64 + 1,
            });
            $('#board').append(sq);
        }
    }


    var sqlist = $('#board>div');

    var pieceList =
            [9820, 9822, 9821, 9819, 9818, 9821, 9822, 9820,
                9823, 9823, 9823, 9823, 9823, 9823, 9823, 9823,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0,
                9823, 9823, 9823, 9823, 9823, 9823, 9823, 9823,
                9820, 9822, 9821, 9818, 9819, 9821, 9822, 9820
            ];

    for (var piece in pieceList) {
        if (pieceList[piece] !== 0) {
            var br1 = $('<div></div>').html('&#' + pieceList[piece] + ';');
            if (piece < 16) {
                br1
                        .attr("data-color", W)
                        .addClass(W);
            } else if (piece >= 48) {
                br1
                        .attr("data-color", B)
                        .addClass(B);
            }
            br1.attr("data-type", PIECES[pieceList[piece]].p_name);
            $(sqlist[piece]).append(br1);
        }
    }

    $('#board div div').draggable({
        containment: '#board',
        start: function (event, ui) {
            start_position = ui.helper.position();
            start_div = sqlist.index(ui.helper.parent());
            var mPiece = ui.helper[0];
            $(mPiece).css({
               rotation : '45deg',
               "rotation-point" : "bottom left",
               color : "red"
            });
        }
    });

    changeCurrentColor(W);


    $('#board>div').droppable({drop: function (event, ui) {
            var ismoving = mayImove($(this), ui.draggable);

            if (ismoving) {
                $(this).empty();
                ui.draggable.css({
                    left: 0, top: 0
                });
                $(this).empty();
                $(this).append(ui.draggable);
                $(this).show();
                if (current_player === W) {
                    changeCurrentColor(B);
                } else {
                    changeCurrentColor(W);
                }
            } else {
                ui.draggable.draggable({revert: true});
            }
        }});

    function isEmpty(el) {
        return !$.trim(el.html());
    }

    function same_color(piece1, piece2) {
        return piece1.attr("data-color") === piece2.attr("data-color");
    }

    function mayImove(father, moved) {
        // console.log(moved.position());
        switch (moved.attr("data-type")) {
            case 'roi':
                return moveRoi(father, moved);
                break;
            case 'reine':
                return moveReine(father, moved);
                break;
            case 'tour':
                return moveTour(father, moved);
                break;
            case 'fou':
                return moveFou(father, moved);
                break;
            case 'cavalier':
                return moveCavalier(father, moved);
                break;
            case 'pion':
                return movePion(father, moved);
                break;
            default:
                return false;
                break;
        }
        if (same_color($(this).children(), moved)) {
            return false;
        } else {
            return true;
        }
    }

    function moveReine(father, reine) {
        return moveFou(father, reine) || moveTour(father, reine);
    }


    function moveCavalier(father, cavalier) {
        var ind = start_div;
        var posit = sqlist.index(father);
        var possibilities = new Array();
        switch (getpositGauche(ind)) {
            case 0:
                possibilities = [ind - 15, ind - 6, ind + 10, ind + 17];
                break;
            case 1:
                possibilities = [ind - 17, ind - 15, ind - 6, ind + 10, ind + 15, ind + 17];
                break;
            case 6:
                possibilities = [ind - 17, ind - 15, ind - 10, ind + 6, ind + 15, ind + 17];
                break;
            case 7:
                possibilities = [ind - 17, ind - 10, ind + 6, ind + 15];
                break;
            default:
                possibilities = [ind - 17, ind - 15, ind - 10, ind - 6, ind + 6, ind + 10, ind + 15, ind + 17];
                break;
        }
        for (var po in possibilities) {
            if (valid_square(possibilities[po]) && possibilities[po] === posit && (!isEmpty(father) && !same_color(father.children(), cavalier) || isEmpty(father))) {
                return true;
            }
        }
        return false;
    }

    function moveRoi(father, roi) {
        var newpos = roi.position();
        if (!isEmpty(father) && same_color(father.children(), roi) || (isEmpty(father) &&
                newpos.top < -90 || newpos.top > 90 || newpos.left < -90 || newpos.left > 90)) {
            return false;
        } else {
            return true;
        }
    }

    function movePion(father, pion) {
        var newPos = pion.position();
        if (
                (
                        (pion.attr("data-color") === W
                                && (newPos.top > 0 && newPos.top < 90 || (start_div >= 8 && start_div <= 15 && newPos.top > 0 && newPos.top < 150 && !collision(VERTICAL,DOWN_RIGHT,father) )))
                        || (pion.attr("data-color") === B
                                && (newPos.top < 0 && newPos.top > -90 || (start_div >= 48 && start_div <= 55 && newPos.top < 0 && newPos.top > -150 && !collision(VERTICAL,UP_LEFT,father) )))
                        )
                && (
                        (isEmpty(father) && !moveLeft(pion) && !moveRight(pion))
                        || (!isEmpty(father) && diagonal_move(father, pion, 1) && !same_color(father.children(), pion))
                        )
                ) {
            return true;
        } else {
            return false;
        }

    }

    function moveTour(father, tour) {
        if (
                (vertical_move(tour) && (!horizontal_move(tour))
                        && (moveUp(tour) && !collision(VERTICAL, UP_LEFT, father) || moveDown(tour) && !collision(VERTICAL, DOWN_RIGHT, father)))
                || (horizontal_move(tour) && (!vertical_move(tour))
                        && ((moveLeft(tour) && !collision(HORIZONTAL, UP_LEFT, father)) || (moveRight(tour) && !collision(HORIZONTAL, DOWN_RIGHT, father))))
                && (isEmpty(father) || !isEmpty(father) && !same_color(tour, father.children()))
                ) {
            return true;
        } else {
            return false;
        }

    }

    function moveFou(father, fou) {
        if ((diagonal_move(father, fou) && (!isEmpty(father) && !same_color(father.children(), fou))
                || diagonal_move(father, fou) && isEmpty(father)) && !diagonal_collision(father)) {
            return true;
        } else {
            return false;
        }
    }

    function diagonal_collision(father) {
        var incr;
        if ((sqlist.index(father) - start_div) % 7 === 0) {
            incr = 7;
        } else if ((sqlist.index(father) - start_div) % 9 === 0) {
            incr = 9;
        } else {
            return true;
        }
        var startfor;
        var endfor;
        if (sqlist.index(father) > start_div) {
            startfor = start_div;
            endfor = sqlist.index(father);
        } else {
            startfor = sqlist.index(father);
            endfor = start_div;
        }
        for (var i = startfor + incr; i <= endfor - incr; i += incr) {
            if (!isEmpty($(sqlist[i]))) {
                $(sqlist[i]).css("background-color", "red");
                var j = i;
                setTimeout(function () {
                    $(sqlist[j]).css("background-color", "#d18b47");
                }, 2000);
                return true;
            }
        }
    }

/**
 * 
 * @param {constante} v_ou_h Vertical or horizontal move
 * @param {constante} sens LEFT_UP or DOWN_RIGHT way
 * @param {} pere who's your father
 * @returns {Boolean} if there's a collision in the way given
 */
    function collision(v_ou_h, sens, pere) {
        var inc = v_ou_h;
        var new_div = $(sqlist).index(pere);
        var start_for = start_div;
        if (!sens) {
            var temp_start = start_for;
            start_for = new_div;
            new_div = temp_start;
        }
        for (var i = start_for + inc; i < new_div; i += inc) {
            if (!isEmpty($(sqlist[i]))) {
                $(sqlist[i]).css("background-color", "red");
                var j = i;
                setTimeout(function () {
                    $(sqlist[j]).css("background-color", "#d18b47");
                }, 2000);
                return true;
            }
        }
        return false;
    }

    function diagonal_move(father, moved, decalage) {
        return  horizontal_move(moved) && vertical_move(moved) && ((typeof decalage === 'undefined'
                && ((sqlist.index(father) - start_div) % 7 === 0 || (sqlist.index(father) - start_div) % 9 === 0)
                ) || (typeof decalage !== 'undefined'
                && ((sqlist.index(father) - start_div) % 7 === 0 && (sqlist.index(father) - start_div) / 7 === decalage
                        || (sqlist.index(father) - start_div) % 9 === 0 && (sqlist.index(father) - start_div) / 9 === decalage)
                ));
    }

    function vertical_move(moved) {
        var new_pos = moved.position();
        return new_pos.top < -SIDE || new_pos.top > SIDE;
    }

    function horizontal_move(moved) {
        var new_pos = moved.position();
        return new_pos.left < -SIDE || new_pos.left > SIDE;
    }

    function moveUp(moved) {
        var new_pos = moved.position();
        return new_pos.top < -SIDE;
    }

    function moveDown(moved) {
        var new_pos = moved.position();
        return new_pos.top > SIDE;
    }

    function moveLeft(moved) {
        var new_pos = moved.position();
        return new_pos.left < -SIDE;
    }

    function moveRight(moved) {
        var new_pos = moved.position();
        return new_pos.left > SIDE;
    }

    function valid_square(num_case) {
        return num_case >= 0 && num_case <= 64;
    }

    function getpositGauche(val) {
        return val % 8;
    }

    function changeCurrentColor(newColor) {
        $('#currentColor').text(newColor);
        current_player = newColor;
        sqlist.children().each(function () {
            if ($(this).attr("data-color") === newColor) {
                $(this).draggable('enable');
            } else {
                $(this).draggable('disable');
            }
        });


    }

});

function piece_code(code, name) {
    this.p_code = code;
    this.p_name = name;
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


