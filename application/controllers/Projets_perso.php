<?php

/**
 * Description of Projets_perso
 *
 * @author Azarias
 */

class Projets_perso extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function Morse_score() {
        $this->add_css('contact_style.css');
        $this->add_css('score_style.css');
        $this->load->model('scores_model');
        $scores = $this->scores_model->get_morse_score();
        $this->load_projet(DECODAGE_PATH . 'Morse_score', array('scores' => $scores));
    }


    private function load_projet($projet, $data = array()) {
        $this->twig->display($projet . ".html.twig", $data);
    }

    public function calcul_score($nbrquestions, $lettres, $chiffres, $ponctuation, $res, $temps) {
        $numerateur = ($res / $nbrquestions) * 100 * log($nbrquestions) * (1 * ($lettres == 'true' ) + 1.5 * ($chiffres == 'true' ) + 2 * ($ponctuation == 'true'));
        //           --------------------------------------------------------------------------------------------
        $denominateur = $temps / $nbrquestions;
        return $numerateur / $denominateur;
    }

}
