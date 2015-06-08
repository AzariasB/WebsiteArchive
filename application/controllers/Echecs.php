<?php

/**
 * Description of Echecs
 *
 * @author Azarias
 */
class Echecs extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function simple() {
        $this->add_css("chess.css");
        $this->add_js("chess.js");
        $data = array();
        $data['titre'] = "Echecs";
        
        $this->twig->display('Echecs/chess1.html.twig',$data);
    }

}
