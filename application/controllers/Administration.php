<?php

/**
 * Description of Administration
 *
 * @author root
 */
class Administration extends MY_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
        $this->load->helper('connection');
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
        echo json_encode(getNodes());
    }

    /*
     * Schéma habituel :
     * tester form_validation
     * mettre en place un array message
     * récupérer les 'posts'
     * effectuer une fonction simple et tester si elle fonctionne
     * éditer le message en conséquence
     * retourner le message encodé
     */


    public function createFile() {
        $rules = array(
            'fileName' => '|required',
            'path' => ''
        );
        validateAndRun($rules, function($post, &$message) {
            $fileName = $post['fileName'];
            $path = getAbsPath($post['path']);
            $basics = getBasics();
            if (!write_file($path . $fileName . '.php',$basics['php']) ||
                    !write_file($path . $fileName . '.html.twig',$basics['twig'])) {
                $message = array(
                    'success' => false,
                    'message' => "Le fichier n'a pas été créé"
                );
            } else {
                $message = array(
                    'success' => true,
                    'message' => "Le fichier a bien été créé"
                );
            }
        }, "Le nouveau fichier ne peux pas être vide");
    }

    public function deleteFolder() {
        $rules = array(
            'folderName' => '|required',
            'path' => ''
        );
        validateAndRun($rules, function($post, &$message) {
            $path = getAbsPath($post['path']);
            $folderName = $post['folderName'];
            if (!delete_files($path . $folderName, true)) {
                $message['message'] = "Le dossier n'a pas été effacé";
            } else {
                $message['success'] = true;
                $message['message'] = "Le dossier a bien été supprimé";
            }
        });
    }

    public function deleteFile() {
        $rules = array(
            'fileName' => '|required',
            'path' => ''
        );

        validateAndRun($rules, function($post, &$message) {
            $path = getAbsPath($post['path']);
            $fileName = $post['fileName'];
            if (!unlink($path . $fileName . '.php') or ! unlink($path . $fileName . '.html.twig')) {
                $message['message'] = "Le fichier n'a pas été effacé";
            } else {
                $message['success'] = true;
                $message['message'] = "Le fichier a bien été supprimé";
            }
        });
    }

    public function createFolder() {
        $rules = array(
            'folderName' => '|required',
            'path' => ''
        );

        validateAndRun($rules, function($post, &$message) {
            $folderName = $post['folderName'];
            $path = getAbsPath($post['path']);

            if (mkdir($path . '/' . $folderName)) {
                $message = array('success' => true, 'message' => 'Le nouveau dossier a bien été créé');
            } else {
                $message['message'] = "Impossible de créer le dossier";
            }
        });
    }

    public function getFileInfo() {
        $rules = array(
            'fileName' => '|required',
            'path' => ''
        );

        validateAndRun($rules, function($post, &$message) {
            $path = $post['path'];
            $fileName = $post['fileName'];

            $getAbsPath = getAbsPath($path);
            if (is_file($getAbsPath . $fileName)) {
                //On supprime d'eventuel précédent appels
                deleteAssets();
                require $getAbsPath . $fileName;
                if (isset($assets)) {
                    $message = array('success' => true, 'data' => $assets);
                } else {
                    $message = array('success' => true, 'data' => array());
                }
            }
        });
    }

    public function changeName() {
        $rules = array(
            'oldName' => '|required',
            'nwName' => '|required,',
            'path' => '',
            'isFolder' => ''
        );

        validateAndRun($rules, function($post, &$message) {
            //Récupérer le nouveau nom et le path
            $oldName = $post['oldName'];
            $nwName = $post['nwName'];
            $isFolder = $post['isFolder'];
            $path = getAbsPath($post['path']);

            if ($isFolder == 'true') {
                $message = renameFolder($path, $oldName, $nwName) ?
                        array('success' => true, 'message' => 'Le nom du dossier a bien été changé') :
                        array('success' => false, 'message' => "Le nom du dossier n'a pas pu être modifié");
            } else {
                $message = renameFile($path, $oldName, $nwName) ?
                        array('success' => true, 'message' => 'Le nom du fichier a bien été modifié') :
                        array('success' => false, 'message' => "Le nom du fichier n'a pas pu être modifié");
            }
        }, "Le nouveau nom de peut pas être vide");
    }

}
