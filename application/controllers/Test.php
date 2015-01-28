<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Test
 *
 * @author Azarias
 */
class Test  extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index(){
        $this->load->view('Links');
        $this->load->view('Testaccueil');
    }
}
