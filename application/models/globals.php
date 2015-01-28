<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Globals
 *
 * @author Azarias
 */

define('ASSETS', base_url('assets').'/');

class Globals  extends CI_Model{
    //put your code here
    public static $css;
    public static $js;
    public static $pictures;
    public static $multi_screen;
    
    function __construct() {
        parent::__construct();
        Globals::$css = ASSETS.'css/';
        Globals::$js = ASSETS.'js/';
        Globals::$pictures = ASSETS.'images/';
        Globals::$multi_screen = ASSETS.'multi_screen/';
    }
}
