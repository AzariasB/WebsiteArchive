<?php

if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class A_propos extends CI_Controller {
   
    function __construct() {
        parent::__construct();
        
    }
    
    function index(){
        $this->load->model('a_propos_model');
        $aP = $this->a_propos_model->get_all();
        
        $this->load->view('Links');
        $this->load->view('A_propos',array('data' => $aP));
    }
}
