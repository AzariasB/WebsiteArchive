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
class Test  extends MY_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function index(){
        $this->add_js('app.js');
        $this->add_js('accueil.js');
        
        $this->twig->display('test.html.twig');
    }
}
