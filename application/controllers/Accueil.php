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
    }

    function index() {
        $data = array();
        $data['screens'] = $this->get_screens();
        $this->add_js("app.js");

        $this->twig->display('accueil.html.twig', $data);
    }

    private function get_screens() {
        return array(
            'accueil' => array(
                'Projets personnels' => array('Cible' => 'projet_perso'),
                'Projets scolaires' => array('Cible' => 'projet_scol'),
                'Echecs' => array('Cible' => 'echecs'),
            ),
            'projet_scol' => array(
                'CowGow' => array('Lien' => site_url('Projets_scolaires/CowGow')),
                'GameJam' => array('Lien' => site_url('Projets_scolaires/GameJam')),
                'Retour' => array('Cible_retour' => 'accueil')
            ),
            'echecs' => array(
                'Version simple' => array('Lien' => site_url('Echecs/simple')),
                'Retour' => array('Cible_retour' => 'accueil')
            ),
            'projet_perso' => array(
                'Decodage' => array('Cible' => 'decodage'),
                'Github' => array('Cible' => 'github'),
                'Retour' => array('Cible_retour' => 'accueil')
            ),
            'retour_projet' => array(
                'En cours...' => array('Cible_retour' => 'projet_perso'),
                'Retour' => array('Cible_retour' => 'projet_perso')
            ),
            'decodage' => array(
                'Morse' => array('Cible' => 'morse'),
                'Semaphore' => array('Cible' => 'semaphore'),
                'Retour' => array('Cible_retour' => 'projet_perso')
            ),
            'github' => array(
                'Sort.js' => array('Lien' => site_url('Projets_perso/sortjs')),
                'Euraka' => array('Lien' => site_url('Projets_perso/euraka')),
                'Retour' => array('Cible_retour' => 'projet_perso')
            ),
            'morse' => array(
//            'Apprendre le morse' => array('Cible' => 'retour_morse'),
                'Decodage' => array('Lien' => site_url('Projets_perso/Morse_decodage')),
                'Classement' => array('Lien' => site_url('Projets_perso/Morse_score')),
//            'Codage' => array('Cible' => 'retour_morse'),
                'Retour' => array('Cible_retour' => 'projet_perso')
            ),
            'semaphore' => array(
//            'Apprendre' => array('Cible' => 'retour_sem'),
                'Decodage' => array('Lien' => site_url('Projets_perso/Semaphore_decodage')),
                'Classement' => array('Lien' => site_url('Projets_perso/Semaphore_score')),
                'Retour' => array('Cible_retour' => 'projet_perso')
            ),
        );
    }

}
