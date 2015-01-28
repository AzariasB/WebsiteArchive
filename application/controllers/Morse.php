<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Projets
 *
 * @author Azarias
 */
class Morse extends CI_Controller {
    //put your code here
    
    function __construct() {
        parent::__construct();
    }
    

    
    function entrainement(){
        $this->load->view('Links');
        $this->load->view('Projets/Morse');
    }
    
    function entrainement_retour(){
        $this->session->set_flashdata('retour','morse');
        redirect(site_url('Accueil'));
    }
}
