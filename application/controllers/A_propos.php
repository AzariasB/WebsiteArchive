<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class A_propos extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->add_js("a_propos.js");
        $this->add_css("a_propos_style.css");
        $this->twig->display('a_propos.html.twig');
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
