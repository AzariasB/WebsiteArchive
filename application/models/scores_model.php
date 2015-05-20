<?php

if (!defined('BASEPATH')) {
    exit('No direct Scrip allowed');
}

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of scores_model
 *
 * @author Azarias
 */
class scores_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    function get_morse_score() {
        $this->db->select('*');
        $this->db->from('morse_score');
        $this->db->order_by('score', 'desc');

        $result = $this->db->get()->result();
        return $result;
    }
    
    function insert_morse_score($pseudo,$score,$lettres,$chiffres,$ponctuation,$nbr_questions,$temps){
        $toInsert = array(
            'score' => $score,
            'pseudo' => $pseudo,
            'Lettres' => ($lettres == 'true' ? 1 : 0),
            "Chiffres" => ($chiffres == 'true' ? 1 : 0),
            "Ponctuation" => ($ponctuation == 'true' ? 1 : 0),
            "Nbr_questions" => $nbr_questions,
            "Temps_total" => $temps
        );
        
        $this->db->insert('morse_score',$toInsert);
    }

}
