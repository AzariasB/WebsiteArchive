<?php

/**
 * Description of Main
 *
 * @author root
 */

class Main extends MY_Controller {

    //put your code here
    function __construct() {
        parent::__construct();
    }

    function index() {
        $segs = $this->uri->segment_array();

        $dir = 'Main/';
        $fileName = end($segs);
        if (count($segs) >= 2) {
            $mPath = array_slice($segs, 1, count($segs) - 2);
            $dir .= join('/', $mPath) . '/';

            $fileName = urldecode($fileName);
            $fileName = str_replace(' ', '_', $fileName);
            if (!is_dir(VPATH . $dir) || !file_exists(VPATH . $dir . $fileName . '.php')) {
                show_404();
            }

            require_once VPATH . $dir . $fileName . '.php';

            $data = isset($assets['data']) ? $assets['data'] : [];
            if (isset($assets['title'])) {
                $this->set_title($data, $assets['title']);
            } else {
                $data['titre'] = $fileName;
            }

            if (isset($assets['css'])) {
                $this->load_css($assets['css']);
            }
            if (isset($assets['js'])) {
                $this->load_js($assets['js']);
            }
            $this->twig->display($dir . $fileName . '.html.twig', $data);
        }
    }

    function load_css($css_arra = array()) {
        foreach ($css_arra as $css) {
            $this->add_css($css);
        }
    }

    function load_js($js_array = array()) {
        foreach ($js_array as $js) {
            $this->add_js($js);
        }
    }

    function set_title(&$data, $title = 'Azarias') {
        $data['titre'] = $title;
    }

}
