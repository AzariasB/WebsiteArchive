<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Static_pages
 *
 * @author Azarias
 */
class Accueil extends CI_Controller {

    //put your code here

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->load->view('Links');
        $backscreen = $this->session->flashdata('retour');
        if (isset($backscreen) && $backscreen != NULL) {
            $retour = array('backscreen' => $backscreen);
            $this->load->view('Accueil', $retour);
        } else {
            $this->load->view('Accueil');
        }
    }

}
