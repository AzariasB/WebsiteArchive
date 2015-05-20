<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class A_propos extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->load->view('Links');
        $this->load->view('A_propos');
    }

    public function get_a_propos() {
        $this->load->helper('file');
        
        $contenu = read_file('assets/json/a_propos.json');
        
        if(!$contenu){
            echo '{}';
        }else{
            echo $contenu;
        }
    }

}
