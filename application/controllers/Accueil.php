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
        $screens = array();
        $absPath = array('Projet');
        $root = APPPATH . 'views/Main/';
        $this->get_names($screens, $root, $absPath, 'accueil');
        return $screens;
    }

    //Iterate over file and add array in consequence
    private function get_names(&$screens, $dirName, $path, $curName, $predName = '') {
        $iter = new DirectoryIterator($dirName);
        $folder = [];

        foreach ($iter as $file) {
            if (!$file->isDot()) {
                $name = $file->getFilename();
                if ($file->isDir()) {
                    $tmpPath = $path;
                    $tmpPath[] = $name;
                    $folder[$name] = array('Cible' => strtolower($name));
                    $this->get_names($screens, $dirName . '/' . $name, $tmpPath, $name, $curName);
                } else if ($file->isFile() && strpos($name, 'index.php') === false && strpos($name, '.php') !== false) {
                    $name = str_replace('.php', '', $name);
                    $folder[$name] = array('Lien' => site_url(join('/', $path) . '/' . $name));
                }
            }
        }

        if (!empty($predName)) {
            $folder['Retour'] = array('Cible_retour' => strtolower($predName));
        }

        $screens[strtolower($curName)] = $folder;
    }
}