<?php


/**
 * Description of Projets_scolaire
 *
 * @author Azarias
 */
class Projets_scolaires extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function CowGow(){
        $this->load->view('Links');
        $this->load->view('Scolaire/CowGow');
    }
}
