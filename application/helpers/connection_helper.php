<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (!function_exists('checkConnection')) {

    function checkConnection() {
        $CI = &get_instance();
        if ($CI->session->userdata('isConnected') == null or
                $CI->session->userdata('isConnected') == false) {
            $message = array('success' => false, 'message' => "Vous êtes deconnecté, veuillez vous reconnecter");
            echo json_encode($message);
            die();
        }
    }

}


if (!function_exists('validateAndRun')) {

    function validateAndRun($rules, $function, $ruleMessage = "Formulaire non validé") {
        checkConnection();
        $CI = &get_instance();

        foreach ($rules as $key => $rule) {
            $CI->form_validation->set_rules($key, '', 'trim|xss_clean' . $rule);
        }
        $message = array('success' => false, 'message' => "Une erreur s'est produite");
        if ($CI->form_validation->run()) {
            $function($CI->input->post(), $message);
        } else {
            $message['message'] = $ruleMessage;
        }
        echo json_encode($message);
    }

}