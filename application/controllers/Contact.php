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
class Contact extends MY_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $this->add_css("contact_style.css");
        $this->add_js("contact.js");
        $this->twig->display('contact.html.twig');
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
        $this->email->from($this->input->post('mail'),  $this->input->post('nom_u'));
        $this->email->to('contact@azarias.byethost12.com');

        $this->email->subject($this->input->post('objet'));
        $this->email->message($this->input->post('message'));

        $this->email->send();

        $this->add_css("contact_style.css");
        $this->twig->display('msg_success.html.twig');
    }

}
