<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Lorraine
 *
 * @author Azarias
 */
class Lorraine extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index(){
        $this->load->view('Lorraine/L_Links');
        $this->load->view('Lorraine/L_Page');
    }
}
