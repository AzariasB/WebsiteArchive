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
class Accueil extends MY_Controller {

    //put your code here

    function __construct() {
        parent::__construct();
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
    }

    function index() {
        $data = array();
        $data['titre'] = "Tu as réussi";
        
        $this->twig->display('accueil.html.twig',$data);
    }

}
