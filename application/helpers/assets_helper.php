<?php

if (!defined('BASEPATH')) {
    exit('No direct Scrip allowed');
}

define('ASSETS', base_url('assets') . '/');



/**
 * PATH to differents assets
 */
if (!function_exists('images')) {

    function images() {
        return ASSETS . 'images/';
    }

}

if (!function_exists('js')) {

    function js() {
        return ASSETS . 'js/';
    }

}

if (!function_exists('css')) {

    function css() {
        return ASSETS . 'css/';
    }

}

if (!function_exists('multi_screen')) {

    function multi_screen() {
        return ASSETS . 'multi_screen/';
    }

}
////////////////////////////////////////////////
//Ecrire les liens css sur une page
if (!function_exists('load_css')) {

    function load_css() {
        $CI = &get_instance();
        $CI->load->library('assetic');
        if (ENVIRONMENT === 'development') {
            $CI->assetic->writeCssLinks();
        } else {
            $CI->assetic->writeStaticCssLinks();
        }
    }

}


//Ecrire les liens js sur une page
if (!function_exists('load_javascript')) {

    function load_javascript() {
        $CI = &get_instance();
        $CI->load->library('assetic');
        if (ENVIRONMENT === 'development') {
            $CI->assetic->writeJsScripts();
        } else {
            $CI->assetic->writeStaticJsScripts();
        }
    }

}