<?php

if (!defined('BASEPATH')) {
    exit('No direct Scrip allowed');
}

/**
 * Debug_array
 * 
 * 'cause I'm fed up of writing the same codes lines
 * 
 * Juste put your array, and It'll print you a beautifull form
 * And then stop the PHP execution
 */
if (!function_exists('debug_array')) {

    function debug_array($array, $die = true) {
        echo '<pre>';
        print_r($array);
        if ($die) {
            die();
        }
    }

}