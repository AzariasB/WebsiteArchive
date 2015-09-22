<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Administration
 *
 * @author root
 */
class Administration extends MY_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    function index() {
        if ($this->session->userdata('isConnected') != null and $this->session->userdata('isConnected')) {
            redirect('Administration/menu');
        } else {
            $data = array('titre' => 'Administration');
            $this->add_css('admin/admin.css');
            $this->add_js('admin/login.js');
            $this->twig->display('Admin/login.html.twig', $data);
        }
    }

    function login() {

        $this->load->model('administration_model');
        $this->form_validation->set_rules('password', 'mot de passe', 'trim|required|xss_clean');
        $pwd = $this->input->post()['password'];

        if (!$this->form_validation->run() || !$this->administration_model->check_pwd($pwd)) {
            $reponse = array('success' => false, 'message' => 'Mot de passe invalide');
            echo json_encode($reponse);
        } else {
            $this->session->set_userdata(array('isConnected' => true));
            $reponse = array('success' => true, 'redirection' => '/Administration/menu');
            echo json_encode($reponse);
        }
    }

    function menu() {
        if ($this->session->userdata('isConnected') == null || !$this->session->userdata('isConnected')) {
            redirect('Administration');
        } else {
            $this->add_css('admin/style.min.css');
            $this->add_css('admin/main.css');
            $this->add_js('admin/jstree.min.js');
            $this->add_js('underscore.js');
            $this->add_js('backbone.min.js');
            $this->add_js('admin/controller.js');

            $this->twig->display('Admin/menu.html.twig');
        }
    }

    public function jsTree() {
        echo json_encode($this->getNodes());
    }
    
    public function deleteFile(){
        $this->form_validation->set_rules('fileName','','trim|required|xss_clean');
        $this->form_validation->set_rules('path','','trim|xss_clean');
        
        $message = array('success' => false,'message' => "Une erreur s'est produite");
        if($this->form_validation->run()){
            $path = $this->getAbsPath($this->input->post('path'));
            $fileName = $this->input->post('fileName');
            if(!unlink($path.$fileName.'.php') or !  unlink($path.$fileName.'.html.twig')){
                $message['message'] = "Le fichier n'a pas été effacé";
            }else{
                $message['success'] = true;
                $message['message'] = "Le fichier a bien été supprimé";
            }
        }else{
            $message['message'] = "Le nom du fichier ne peut pas être vide";
        }
        echo json_encode($message);
    }

    public function createFolder() {
        $this->form_validation->set_rules('folderName', 'nom du dossier', 'trim|required|xss_clean');
        $this->form_validation->set_rules('path', "chemin d'accès", 'trim|xss_clean');

        $message = array('success' => FALSE, 'message' => "Une erreur s'est produite");
        if ($this->form_validation->run()) {
            $path = $this->input->post('path');
            $folderName = $this->input->post('folderName');
            $path = $this->getAbsPath($path);

            if (mkdir($path . '/' . $folderName)) {
                $message = array('success' => true, 'message' => 'Le nouveau dossier a bien été créé');
            } else {
                $message['message'] = "Impossible de créer le dossier";
            }
        }
        echo json_encode($message);
    }

    public function getFileInfo() {
        $this->form_validation->set_rules('fileName', 'nom du fichier', 'trim|required|xss_clean');
        $this->form_validation->set_rules('path', "chemin d'accès", 'trim|xss_clean');

        $message = array('success' => false, 'message' => "Une erreur s'est produite");
        if ($this->form_validation->run()) {
            $path = $this->input->post('path');
            $fileName = $this->input->post('fileName');

            $absPath = $this->getAbsPath($path);
            if (is_file($absPath . $fileName)) {
                //On supprime d'eventuel précédent appels
                $this->deleteAssets();
                require $absPath . $fileName;
                $message = array('success' => true, 'data' => $assets);
            } else {
                $message['message'] = "Le fichier en question n'existe pas";
            }
        }
        echo json_encode($message);
    }

    public function changeName() {
        $this->form_validation->set_rules('oldName', 'ancien nom', 'trim|required|xss_clean');
        $this->form_validation->set_rules('nwName', 'nouveau nom', 'trim|required|xss_clean');
        $this->form_validation->set_rules('path', "Chemin d'accès", 'trim|xss_clean');
        $this->form_validation->set_rules('isFolder', 'est un dossier', 'trim|xss_clean');

        $message = array('success' => false, 'message' => "Une erreur s'est produite");
        if ($this->form_validation->run()) {
            //Récupérer le nouveau nom et le path
            $oldName = $this->input->post('oldName');
            $nwName = $this->input->post('nwName');
            $path = $this->input->post('path');
            $isFolder = $this->input->post('isFolder');
            $path = $this->getAbsPath($path);

            if ($isFolder == 'true') {
                $message = $this->renameFolder($path, $oldName, $nwName) ?
                        array('success' => true, 'message' => 'Le nom du dossier a bien été changé') :
                        array('success' => false, 'message' => "Le nom du dossier n'a pas pu être modifié");
            } else {
                $message = $this->renameFile($path, $oldName, $nwName) ?
                        array('success' => true, 'message' => 'Le nom du fichier a bien été modifié') :
                        array('success' => false, 'message' => "Le nom du fichier n'a pas pu être modifié");
            }
        } else {
            $message['message'] = "Le nouveau nom ne peut pas être vide";
        }
        echo json_encode($message);
    }

    private function deleteAssets() {
        if (isset($assets)) {
            unset($assets);
        }
    }

    private function renameFile($path, $oldName, $nwName) {
        $renamed_php = rename($path . $oldName . '.php', $path . $nwName . '.php');
        $renamed_twig = rename($path . $oldName . '.html.twig', $path . $nwName . '.html.twig');
        return $renamed_php && $renamed_twig;
    }

    private function renameFolder($path, $oldName, $nwName) {
        return rename($path . $oldName, $path . $nwName);
    }

    private function getNodes($pathStart = MPATH) {
        $iter = new DirectoryIterator($pathStart);
        $files = [];

        foreach ($iter as $file) {
            if (!$file->isDot()) {
                $name = $file->getFilename();
                if ($file->isDir()) {
                    $files[] = array(
                        'text' => $name,
                        'children' => $this->getNodes($pathStart . '/' . $name)
                    );
                } else if ($file->isFile() && strpos($name, 'index.php') === false && strpos($name, '.php') !== false) {
                    //Add final child node
                    $files[] = array('text' => $name, 'icon' => 'glyphicon glyphicon-file');
                }
            }
        }
        return $files;
    }

    private function getAbsPath($relPath) {
        return (boolval($relPath) ? MPATH . $relPath . '/' : MPATH);
    }

}
