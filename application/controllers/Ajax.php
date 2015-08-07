<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Ajax
 *
 * @author root
 */
class Ajax extends MY_Controller {

    public function uploadFont() {
        $config['upload_path'] = './uploads/';
        $config['allowed_types'] = '*';
        $config['max_size'] = 1024 * 8;
        $this->load->library("upload", $config);

        $data = array();
        if (!empty($_FILES)) {
            if (!$this->upload->do_upload("file")) {
                echo json_encode(array('error' => $this->upload->display_errors()));
            } else {
                echo json_encode(array('upload_data' => $this->upload->data()));
            }
        } else {
            echo json_encode(array(
                "post" => $_POST,
                "files" => $_FILES,
                "res" => "empty"
            ));
        }
    }

}
