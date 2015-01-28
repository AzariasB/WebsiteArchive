<?php

class a_propos_model extends CI_Model {

    function __construct() {
        parent::__construct();
    }

    function get_all() {
        $this->db->select('*');
        $this->db->from('a_propos');
        $this->db->order_by('pere');

        $get = $this->db->get()->result();
        
        foreach ($get as $key => $value) {
            $get[$key] = (array) $value;
        }

        return $get;
    }

}
