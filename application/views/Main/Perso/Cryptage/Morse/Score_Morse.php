<?php


$CI = &get_instance();
$CI->load->model('scores_model');

$data = $CI->scores_model->get_morse_score();

$assets = array(
    'data' => array(
        'scores' => $data
    ),
    'title' => 'Score',
    'css' => array(
        'contact_style.css',
        'score_style.css'
    )
);