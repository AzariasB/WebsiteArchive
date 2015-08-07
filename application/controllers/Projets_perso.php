<?php

/**
 * Description of Projets_perso
 *
 * @author Azarias
 */
define('DECODAGE_PATH', 'Projets/Decodage/');
define('GITHUB_PATH', 'Projets/GitHub/');
define('AUTRE_PATH', 'Projets/Autres/');

class Projets_perso extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function Morse_decodage() {
        $this->add_js('morse.js');
        $this->add_css('morse_style.css');
        $this->load_projet(DECODAGE_PATH . 'Morse');
    }

    function Semaphore_decodage() {
        $this->add_js('semaphore.js');
        $this->add_css('semaphore_style.css');
        $this->add_css('contact_style.css');
        $this->load_projet(DECODAGE_PATH . "Semaphore");
    }

    function Morse_score() {
        $this->add_css('contact_style.css');
        $this->add_css('score_style.css');
        $this->load->model('scores_model');
        $scores = $this->scores_model->get_morse_score();
        $this->load_projet(DECODAGE_PATH . 'Morse_score', array('scores' => $scores));
    }

    function Semaphore_score() {
        $this->load_projet(DECODAGE_PATH . 'Semaphore_score');
    }

    function TicTacToe() {
        $this->add_css("bootstrap-slider.min.css");
        $this->add_css('tictactoe.css');
        $this->add_js("bootstrap-slider.min.js");
        $this->add_js("underscore.js");
        $this->add_js("backbone.min.js");
        $this->add_js("html2canvas.js");
        $this->add_js('TicTacToe.js');

        $this->load_projet(DECODAGE_PATH . 'TicTacToe', array('titre' => 'TicTacToe'));
    }

    function sortjs() {
        $this->add_css("contact_style.css");
        $this->add_css("projets_scol_style.css");
        $this->add_js("lightbox.js");
        $this->load_projet(GITHUB_PATH . 'sort_js');
    }

    function euraka() {
        $this->add_css("contact_style.css");
        $this->add_css("projets_scol_style.css");
        $this->add_js("lightbox.js");
        $this->load_projet(GITHUB_PATH . 'euraka');
    }

    private function load_projet($projet, $data = array()) {
        $this->twig->display($projet . ".html.twig", $data);
    }

    function add_morse_score() {

        $pseudo = $this->input->post('pseudo');
        $nbrquestion = $this->input->post('nbrquestions');
        $lettres = $this->input->post('lettres');
        $chiffres = $this->input->post('chiffres');
        $ponctuation = $this->input->post('ponctuation');
        $score = $this->input->post('score');
        $temps = $this->input->post('temps');
        if (!empty($pseudo) && !empty($nbrquestion) &&
                !empty($score) && !empty($temps)) {
            $score_calc = $this->calcul_score($nbrquestion, $lettres, $chiffres, $ponctuation, $score, $temps);
            $this->load->model('scores_model');
            $this->scores_model->insert_morse_score($pseudo, floor($score_calc), $lettres, $chiffres, $ponctuation, $nbrquestion, $temps);
            echo floor($score_calc);
        } else {
            echo 'failed';
        }
    }

    public function calcul_score($nbrquestions, $lettres, $chiffres, $ponctuation, $res, $temps) {
        $numerateur = ($res / $nbrquestions) * 100 * log($nbrquestions) * (1 * ($lettres == 'true' ) + 1.5 * ($chiffres == 'true' ) + 2 * ($ponctuation == 'true'));
        //           --------------------------------------------------------------------------------------------
        $denominateur = $temps / $nbrquestions;
        return $numerateur / $denominateur;
    }

}
