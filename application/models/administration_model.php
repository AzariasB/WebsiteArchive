<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of administration_model
 *
 * @author root
 */
class administration_model extends CI_Model {

    private $salt = '/!,ilf4u1)"'; //In case of...

    function __construct() {
        parent::__construct();
    }

    function check_pwd($givenPwd) {
        return hash("sha256", $this->salt . $givenPwd . $this->salt) == "811b5a77f2ff27165eb62a85d40a0e11c371834bd0aa93a9ef6e4dbe94261b7b";
    }

    public function getSalt() {
        return $this->salt;
    }

}
