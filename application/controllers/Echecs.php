<?php

/**
 * Description of Echecs
 *
 * @author Azarias
 */
class Echecs extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function simple() {
        $this->load->view('Links');
        $this->load->view('Echecs/Chess1');
    }

}
