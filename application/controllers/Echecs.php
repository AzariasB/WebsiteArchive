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

        $this->twig->display('Echecs/chess1.html.twig', $data);
    }

    function seconde_v() {
        $this->add_css("chess.css");
        $this->add_js("underscore.js");
        $this->add_js('backbone.min.js');
        $this->add_js("chess/data.js");
        $this->add_js('chess/ChessBox.js');
        $this->add_js('chess/Plugin.js');
        $this->add_js('chess/ChessBoard.js');
        $this->add_js("chess/view.js");

        $data = array('titre' => 'Echecs v2.0');
        $this->twig->display("Echecs/chess2.html.twig", $data);
    }

}
