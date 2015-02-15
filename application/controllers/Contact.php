<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Contact
 *
 * @author Azarias
 */
class Contact extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->load->view('Links');
        $this->load->view('Contact');
    }

    function message() {
        $this->form_validation->set_message('required', 'Le %s est requis');
        $this->form_validation->set_message('valid_email', 'L\'adresse email doit être valide');

        $this->form_validation->set_rules('nom_u', 'nom d\'utilisateur ', 'trim|required|xss_clean');
        $this->form_validation->set_rules('mail', 'mail', 'trim|required|xss_clean|valid_email');
        $this->form_validation->set_rules('objet', 'champs "objet" ', 'trim|required|xss_clean');
        $this->form_validation->set_rules('message', 'message', 'trim|required|xss_clean');

        $this->form_validation->set_error_delimiters('<div class="form-group has-error">', '</div>');

        if ($this->form_validation->run() == FALSE) {
            $this->index();
        } else {
            $this->success();
        }
    }

    function success() {
        $this->load->library('email');
        $this->email->from($_POST['mail'], $_POST['nom_u']);
        $this->email->to('contact@azarias.byethost12.com');

        $this->email->subject($_POST['objet']);
        $this->email->message($_POST['message']);

        $this->email->send();
        
        
        $this->load->view('Links');
        $this->load->view('msg_success');
    }

}
