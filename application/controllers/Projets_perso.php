<?php

/**
 * Description of Projets_perso
 *
 * @author Azarias
 */
class Projets_perso extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function Morse_decodage() {
        $this->load->view('Links');
        $this->load->view('Projets/Morse');
    }

    function Morse_retour() {
        $this->session->set_flashdata('retour', 'morse');
        redirect(site_url('Accueil'));
    }
    
    function Semaphore_decodage(){
        $this->load->view('Links');
        $this->load->view('Projets/Semaphore');
    }
    
    function Morse_score(){
        $this->load->view('Links');
        $this->load->view('Projets/Morse_score');
    }
    
    function Semaphore_score(){
        $this->load->view('Links');
        $this->load->view('Projets/Semaphore_score');
    }

}
