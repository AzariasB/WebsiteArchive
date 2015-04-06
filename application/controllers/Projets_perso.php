<?php

/**
 * Description of Projets_perso
 *
 * @author Azarias
 */
define('DECODAGE_PATH', 'Projets/Decodage/');
define('GITHUB_PATH', 'Projets/GitHub/');
define('AUTRE_PATH', 'Projets/Autres/');

class Projets_perso extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function Morse_decodage() {
        $this->load_projet(DECODAGE_PATH.'Morse');
    }

    function Morse_retour() {
        $this->session->set_flashdata('retour', 'morse');
        redirect(site_url('Accueil'));
    }

    function Semaphore_decodage() {
        $this->load_projet(DECODAGE_PATH."Semaphore");
    }

    function Morse_score() {
        $this->load->model('scores_model');
        $scores = $this->scores_model->get_morse_score();
        $this->load->view('Links');
        $this->load->view(DECODAGE_PATH.'Morse_score', array('scores' => $scores));
    }

    function Semaphore_score() {
        $this->load_projet(DECODAGE_PATH.'Semaphore_score');
    }
    
    function sortjs(){
        $this->load_projet(GITHUB_PATH.'Sort_js');
    }
    
    function euraka(){
        $this->load_projet(GITHUB_PATH.'Euraka');
    }

    function add_morse_score() {
        $infos = $_POST;
        if (
                isset($infos['pseudo']) && isset($infos['nbrquestions']) &&
                isset($infos['lettres']) && isset($infos['chiffres']) &&
                isset($infos['ponctuation']) && isset($infos['score']) &&
                isset($infos['temps'])
        ) {
            $pseudo = $infos['pseudo'];
            $score = $this->calcul_score($infos['score'], $infos['nbrquestions'], $infos['temps']);

            echo $score;
            $this->load->model('scores_model');
            $this->scores_model->insert_morse_score($pseudo, floor($score), $infos['lettres'], $infos['chiffres'], $infos['ponctuation']);
        }
    }

    
    private function load_projet($projet){
        $this->load->view('Links');
        $this->load->view($projet);
    }
}
