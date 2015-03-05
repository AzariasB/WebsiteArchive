<?php
if (!defined('BASEPATH')) {
    exit('No direct Scrip allowed');
}

define('ASSETS', base_url('assets').'/');



if (!function_exists('images')) {
    function images(){
       return ASSETS.'images/';
    }
}

if(!function_exists('js')){
    function js(){
        return ASSETS.'js/';
    }
}

if(!function_exists('css')){
    function css(){
        return ASSETS.'css/';
    }
}

if(!function_exists('multi_screen')){
    function multi_screen(){
        return ASSETS.'multi_screen/';
    }
}