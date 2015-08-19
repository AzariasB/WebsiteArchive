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

    function add_morse_score() {

        $pseudo = $this->input->post('pseudo');
        $nbrquestion = $this->input->post('nbrquestions');
        $lettres = $this->input->post('lettres');
        $chiffres = $this->input->post('chiffres');
        $ponctuation = $this->input->post('ponctuation');
        $score = $this->input->post('score');
        $temps = $this->input->post('temps');
        if (!empty($pseudo) && !empty($nbrquestion) &&
                !empty($score) && !empty($temps)) {
            $score_calc = $this->calcul_score($nbrquestion, $lettres, $chiffres, $ponctuation, $score, $temps);
            $this->load->model('scores_model');
            $this->scores_model->insert_morse_score($pseudo, floor($score_calc), $lettres, $chiffres, $ponctuation, $nbrquestion, $temps);
            echo floor($score_calc);
        } else {
            echo 'failed';
        }
    }

    public function calcul_score($nbrquestions, $lettres, $chiffres, $ponctuation, $res, $temps) {
        $numerateur = ($res / $nbrquestions) * 100 * log($nbrquestions) * (1 * ($lettres == 'true' ) + 1.5 * ($chiffres == 'true' ) + 2 * ($ponctuation == 'true'));
        //           --------------------------------------------------------------------------------------------
        $denominateur = $temps / $nbrquestions;
        return $numerateur / $denominateur;
    }

}
