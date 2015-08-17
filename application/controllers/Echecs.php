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


    function v2() {
        //Lib
        $this->add_css("chess.css");
        $this->add_js("underscore.js");
        $this->add_js('backbone.min.js');
        
        //Explications
        $this->add_js('chess_expl.js');
        
        //Dev
        $this->add_js("chess/tools.js");
        $this->add_js('chess/ChessBox.js');
        $this->add_js('chess/Plugin.js');
        $this->add_js('chess/ChessBoard.js');
        $this->add_js("chess/ChessView.js");
        $this->add_js('chess/rules.js');

        $data = array('titre' => 'Echecs v2.0');
        $this->twig->display("Echecs/chess2.html.twig", $data);
    }

}
