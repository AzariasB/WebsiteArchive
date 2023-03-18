<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of FileModifier
 *
 * @author root
 */
class FileModifier extends CI_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
        $this->load->helper('connection');
    }

    public function addJs() {
        $rules = array(
            'pathToFile' => '|required',
            'scriptToAdd' => '|required'
        );

        /*
         * Function to add a js to a project:
         * - 1 read the file
         * - 2 find the 'js' array
         * - 3 add a line for the new .js file
         * - 4 confirm it all
         */


        validateAndRun($rules, function($post, &$message) {
            $pathTofile = $post['pathToFile'];
            $scriptName = $post['scriptToAdd'];
            
            $fileContent = read_file($pathTofile);
            if($fileContent == false){
                $message['message'] = "Le chemin vers le fichier n'est pas le bon";
            }else{
                
            }
        });
    }

    public function addCss() {
        
    }

}
