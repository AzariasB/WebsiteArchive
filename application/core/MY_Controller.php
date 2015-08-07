<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MY_Controller
 *
 * @author root
 */
class MY_Controller extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->library('Twig/twig');
        $this->load->library('assetic');
        if (ENVIRONMENT == 'development') {
            error_reporting(E_ALL);
            ini_set('display_errors', 1);
        }
    }

    protected function add_css($file, $name = 'style') {
        $this->assetic->addCss('assets/css/' . $file, $name);
    }

    protected function add_js($file, $name = 'common') {
        $this->assetic->addJsDir('assets/js/' . $file, $name);
    }

    protected function add_twig_function($function_name) {
        if (function_exists($function_name)) {
            $this->twig->add_function($function_name);
        }
    }

}
