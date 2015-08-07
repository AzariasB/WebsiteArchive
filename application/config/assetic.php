<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

$config['assetic'] = array(
    'js' => array(
        //For every page
        'autoload' => array(
            js() . 'jQuery.js',
            js() . "jquery-ui.js",
            js() . "angular.min.js",
            js() . "bootstrap.min.js",
            multi_screen().'multi-screen.js'
        ),
        'default-group' => 'script',
    ),
    'css' => array(
        //For every page
        'autoload' => array(
            css() . 'bootstrap.min.css',
            css().'jquery-ui.css',
            css(). 'general_style.css',
            css().'nice_style.css',
            css().'font-awesome.min.css',
            multi_screen().'multi-screen-css.css'
        ),
        'default-group' => 'style'
    ),
    'static' => array(
        //Directory where Assetic puts the merged files
        'dir' => 'assets/static/',
    )
);
