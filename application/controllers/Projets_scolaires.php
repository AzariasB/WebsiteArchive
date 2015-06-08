<?php


/**
 * Description of Projets_scolaire
 *
 * @author Azarias
 */
class Projets_scolaires extends MY_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function CowGow(){
        $this->add_js('lightbox.js');
        $this->add_css('contact_style.css');
        $this->add_css('projets_scol_style.css');
        $this->twig->display('Scolaire/CowGow.html.twig');
    }
    
    function GameJam(){
        $this->add_js('lightbox.js');
        $this->add_css('contact_style.css');
        $this->add_css('projets_scol_style.css');
        $this->twig->display('Scolaire/GameJam.html.twig');
    }
}
