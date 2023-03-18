<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

if (!defined('BASEPATH')) {
    exit('No direct Scrip allowed');
}

if (!function_exists('renameFile')) {

    function renameFile($path, $oldName, $nwName) {
        $renamed_php = rename($path . $oldName . '.php', $path . $nwName . '.php');
        $renamed_twig = rename($path . $oldName . '.html.twig', $path . $nwName . '.html.twig');
        return $renamed_php && $renamed_twig;
    }

}

if (!function_exists('renameFolder')) {

    function renameFolder($path, $oldName, $nwName) {
        return rename($path . $oldName, $path . $nwName);
    }

}
if (!function_exists('getNodes')) {

    function getNodes($pathStart = MPATH) {
        $iter = new DirectoryIterator($pathStart);
        $files = [];

        foreach ($iter as $file) {
            if (!$file->isDot()) {
                $name = $file->getFilename();
                if ($file->isDir()) {
                    $files[] = array(
                        'text' => $name,
                        'children' => getNodes($pathStart . '/' . $name)
                    );
                } else if ($file->isFile() && strpos($name, 'index.php') === false && strpos($name, '.php') !== false) {
                    //Add final child node
                    $files[] = array('text' => $name, 'icon' => 'glyphicon glyphicon-file');
                }
            }
        }
        return $files;
    }

}

if (!function_exists('getAbspath')) {

    function getAbsPath($relPath) {
        return (boolval($relPath) ? MPATH . $relPath . '/' : MPATH);
    }

}

if(!function_exists('getBasics')){
    
    function getBasics(){
        $phpbasic = read_file(VPATH.'basics/basic.php');
        $twigBasic = read_file(VPATH . 'basics/basic.html.twig');
        return array(
            'php' => $phpbasic,
            'twig' => $twigBasic
        );
    }
}