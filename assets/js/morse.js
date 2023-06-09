var morse = angular.module('morse', []);
var DOT = '<div class="dot"></div>';
var DASH = '<div class="dash"></div>';
var EMPTY_SQUARE = '&#x2610';
var CHECK_SQUARE = '&#x2611';

morse.controller('ScoreBoard', function ($timeout, $http, $scope,$sce) {
    $http.defaults.headers.post["Content-Type"] =
            "application/x-www-form-urlencoded; charset=UTF-8;";
    //Pour l'ajax
    //Launch le modal si besoin
    get_user();


    var that = this;
    this.pseudo = (sessionStorage['pseudo'] === undefined ? 'Anonyme' : sessionStorage['pseudo']);
    this.nbr_questions = 10;
    this.nbr_questions_rest = this.nbr_questions;
    this.answer = '';
    this.eraser;

    this.with_alphabet = true;
    this.with_ponctuation = false;
    this.whith_chiffres = false;
    this.paused = 1;
    this.current_letter = 25;
    this.morse = new Array();
    this.letters = new Array();
    this.total_car = 0;


    this.d_score = 0;
    this.d_morse;
    this.d_time = '00:00:00';
    this.r_time = 0;
    this.d_countdown = 3;
    this.d_commentaire = 'Choix des options ...';

    this.d_alphabet = CHECK_SQUARE;
    this.d_chiffre =
            this.d_ponctuation = EMPTY_SQUARE;

    this.debut_jeu = function () {
        if (!this.with_alphabet && !this.with_chiffres && !this.with_ponctuation) {
            this.d_commentaire = 'Une séléction nécessaire';
        } else {
            this.letters = this.get_letters();
            this.morse = this.get_morse();
            this.total_car = this.letters.length;
            this.d_commentaire = '';
            this.answer = '';
            $('#choix').fadeOut('fast');
            $('#before').hide();
            $('#after').fadeIn('fast');
            $('#answer').focus();
            $('#answer').blur(function () {
                $('#answer').focus();
            });
            this.new_morse();
            this.paused = 0;
            this.chrono();
        }
        document.getElementById('answer').addEventListener("blur", function () {
            var element = this;
            setTimeout(function () {
                element.focus();
            }, 1);
        }, true);

        $(window).focus(function () {
            $('#answer').focus();
        });

        $('#pseudo').attr("readonly", "");
        sessionStorage['pseudo'] = this.pseudo;
    };


    this.getkey = function () {
        try {
            if (this.paused !== 1) {
                var r_ans = this.answer;
                this.answer = '';
                this.nbr_questions_rest--;
                if (this.letters[this.current_letter] === r_ans) {
                    this.right();
                } else {
                    this.wrong();
                }
            }
        } catch (ex) {
            console.error(ex);
        }
    };

    this.end = function () {
        var score_calc = $('<span/>').addClass("fa fa-circle-o-notch fa-spin").get(0).outerHTML;
        this.send_score();
        this.paused = 1;
        $('#answer').hide();
        $("#pause_text").text("Fini !!!");
        var text = "Résultat :" + this.d_score + "/" + this.nbr_questions;
        if (this.d_score === this.nbr_questions) {
            text += "<br/> Bien joué, tu as fait un sans-fautes !";
        }

        $("#pause_score").html(text);
        $("#pause_time").html("Réalisé en " + this.time(this.r_time));
        $("#score_calc").html("Score : " + score_calc);
        $('#pause').addClass('disabled');
        $('#continue').addClass('disabled');
        $('#pause_screen').fadeIn(1000);
      //  $('#pause_screen').click(function () {
      //      $('#pause_screen').fadeOut(500);
      //  });
    };

    this.send_score = function () {
        var url = '/Ajax/add_morse_score';

        $http({
            method: 'POST',
            url: url,
            data: $.param({
                pseudo: this.pseudo,
                temps: this.r_time,
                nbrquestions: this.nbr_questions,
                score: this.d_score,
                lettres: this.with_alphabet,
                chiffres: this.with_chiffres,
                ponctuation: this.with_ponctuation
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data){
           $("#score_calc").text("Score : " + data);
        });
        
        return this.d_score;
    };


    this.right = function () {
        try {
            this.d_commentaire = 'Bien joué !';
            this.d_score++;
            if (this.nbr_questions_rest === 0) {
                this.end();
            } else {
                $timeout.cancel(this.eraser);
                this.eraser = $timeout(function () {
                    that.d_commentaire = '';
                }, 1000);
                this.new_morse();
            }
        } catch (ex) {
            alert(ex);
        }

    };

    this.wrong = function () {
        this.paused = 1;
        $('#answer').hide();
        this.d_commentaire = 'Faux, la réponse était : ' + this.letters[this.current_letter];
        if (this.nbr_questions_rest === 0) {
            this.end();
        } else {
            $timeout.cancel(this.eraser);
            this.eraser = $timeout(function () {
                $('#answer').show();
                $('#answer').focus();
                that.new_morse();
                that.d_commentaire = '';
                that.paused = 0;
                that.chrono();
                
            }, 1500);
        }

    };

    this.new_morse = function () {
        var rand = Math.floor(Math.random() * this.total_car);
        //  Pour éviter de tomber deux fois de suite sur la même lettre
        while (rand === this.current_letter) {
            rand = Math.floor(Math.random() * this.total_car - 1);
        }

        this.current_letter = rand;
        this.d_morse = this.print_code(this.morse[rand]);
    };


    this.print_code = function (binarie) {
        var newimg = '';
        for (var i = 0; i < binarie.length; i++) {
            if (binarie.charAt(i) === '1') {
                newimg = newimg.concat(DASH);
            } else {
                newimg = newimg.concat(DOT);
            }
        }
        return newimg;
    };

    this.chrono = function () {
        if (this.paused !== 1) {
            if (this.d_time !== null) {
                this.d_time = this.time(this.r_time);
                this.r_time++;
            }
            $timeout(function () {
                that.chrono();
            }, 1000);
        }
    };

    this.pause = function () {
        $('#answer').hide();
        $('#pause').addClass('disabled');
        $('#continue').removeClass("disabled");
        this.paused = 1;
        $('#image').fadeOut(200);
    };

    this.unpause = function () {
        $('#answer').show();
        $('#answer').focus();
        $('#continue').addClass("disabled");
        $('#pause').removeClass("disabled");
        this.paused = 0;
        this.chrono();
        $('#image').fadeIn(200);
    };

    this.time = function (time) {
        var second = time % 60;
        second = (second < 10 ? '0' : '') + second;

        var minutes = ((time - second) / 60) % 60;
        minutes = (minutes < 10 ? '0' : '') + minutes;

        var heures = Math.floor((time - second) / 3600);
        heures = (heures < 10 ? '0' : '') + heures;

        return heures + ':' + minutes + ':' + second;

    };
    /*
     * Met à jour le nombre de questions de la partie
     * @param le nombres de questions
     */
    this.nbr_question = function () {
        if (this.nbr_questions < 40) {
            this.nbr_questions += 10;
        } else {
            this.nbr_questions = 10;
        }
        this.nbr_questions_rest = this.nbr_questions;
    };

    this.check_alphabet = function () {
        this.d_alphabet = this.change_option(this.d_alphabet);
        this.with_alphabet = (this.d_alphabet === EMPTY_SQUARE ? false : true);
    };

    this.check_chiffre = function () {
        this.d_chiffre = this.change_option(this.d_chiffre);
        this.with_chiffres = (this.d_chiffre === EMPTY_SQUARE ? false : true);
    };

    this.check_ponctuation = function () {
        this.d_ponctuation = this.change_option(this.d_ponctuation);
        this.with_ponctuation = (this.d_ponctuation === EMPTY_SQUARE ? false : true);
    };

    this.change_option = function (vartocheck) {
        return (vartocheck === EMPTY_SQUARE ? CHECK_SQUARE : EMPTY_SQUARE);
    };


    this.get_morse = function () {
        //De base, on met les lettres de l'alphabet
        var morses = new Array();
        if (this.with_alphabet) {
            morses = morses.concat(Array('01', '1000', '1010', '100', '0', '0010', '110', '0000', '00', '0111', '101', '0100', '11', '10', '111', '0110', '1101', '010', '000', '1', '001', '0001', '011', '1001', '1011', '1100'));
        }

        //Si cela été demandé, on met les chiffres
        if (this.with_chiffres) {
            morses = morses.concat(new Array('11111', '01111', '00111', '00011', '00001', '00000', '10000', '11000', '11100', '11110'));
        }

        //Si cela été demandé, on met les caractères spéciaux
        if (this.with_ponctuation) {
            var speciaux = new Array('010101', '01010', '001100', '10010', '100001', '011110', '110011', '10001');
            morses = morses.concat(speciaux);
        }
        return morses;
    };

    this.get_letters = function () {
        //Si demandé, l'alphabet
        var letters = new Array();
        if (this.with_alphabet) {
            letters = letters.concat(new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'));
        }

        //S'il le faut, on met les chiffres
        if (this.with_chiffres) {
            for (var i = 0; i < 10; i++) {
                letters.push(i.toString());
            }
        }

        //S'il le faut, on ajoute les caractères spéciaux
        if (this.with_ponctuation) {
            letters = letters.concat(new Array('.', '+', '?', '/', '-', '\'', ',', '='));
        }

        return letters;
    };
});

/*
 * Ajouter un filtre
 * Pour pouvoir injecter de l'HTML dans la vue via Angular
 */
morse.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});

morse.controller('Explications', function () {
    var that = this;
    this.explications = new Array();

    try {
        $.getJSON("/assets/json/morse_explication.json", function (json) {
            var ms = json['explications'];
            for (var i in ms) {
                that.add_explain(ms[i], i);
            }
        });
    } catch (ex) {
        console.error(ex);
    }

    this.add_explain = function (expl_array, title) {
        var premier = false;
        if (title === "lejeu") {
            premier = true;
        }
        this.explications.push(new button_bool(expl_array["button"], premier, title, expl_array["text"].join("\n")));
    };

    this.change_button = function (quebouton) {
        var exp = this.explications;
        for (var m_ex in exp) {
            if (exp[m_ex].button_name === quebouton) {
                this.explications[m_ex].button_b = true;
            } else {
                this.explications[m_ex].button_b = false;
            }
        }
    };

});

function button_bool(b_text, b_bool, b_title, text) {
    this.button_text = b_text;
    this.button_name = b_title;
    this.button_b = b_bool;
    this.ex_text = text;
}

function get_user() {
    //Utiliser un sessionStorage
    if (sessionStorage['pseudo'] === 'undefined' || sessionStorage['pseudo'] === undefined) {
        $(window).load(function () {
            $('#modal_pseudo').modal('toggle');
        });
    }


}
