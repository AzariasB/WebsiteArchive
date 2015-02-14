<script src="<?php echo Globals::$js ?>app.js" ></script>
</head>
<body ng-app="todoApp" ng-controller="TitreController as titreCtrl" >
    <?php
    $multiS_right = ' data-ms-exit-animation="left" data-ms-enter-animation="right" data-ms-horizontal-distance="1000" href="javascript:void(0)" ';
    $multiS_back = ' data-ms-exit-animation = "right" data-ms-enter-animation = "left" data-ms-horizontal-distance = "1000" href = "javascript:void(0)" ';
    $screens = array(
        'accueil' => array(
            'Projets personnels' => array('Cible' => 'projet_perso'),
            'Projets scolaires' => array('Cible' => 'projet_scol'),
        ),
        'projet_scol' => array(
            'Echecs' => array('Lien' => site_url('Projets_scolaires/Echecs')),
            'CowGow' => array('Lien' => site_url('Projets_scolaires/CowGow')),
//            'GameJam' => array('Cible' => 'retour_scol'),
            'Retour' => array('Cible_retour' => 'accueil')
        ),
        'retour_scol' => array(
            'En cours' => array('Cible_retour' => 'projet_scol'),
            'Retour' => array('Cible_retour' => 'projet_scol')
        ),
        'projet_perso' => array(
            'Semaphore' => array('Cible' => 'semaphore'),
            'Morse' => array('Cible' => 'morse'),
//            'Vitesse de frappe' => array('Cible' => 'retour_projet'),
            'Retour' => array('Cible_retour' => 'accueil')
        ),
        'retour_projet' => array(
            'En cours...' => array('Cible_retour' => 'projet_perso'),
            'Retour' => array('Cible_retour' => 'projet_perso')
        ),
        'morse' => array(
//            'Apprendre le morse' => array('Cible' => 'retour_morse'),
            'Decodage' => array('Lien' => site_url('Projets_perso/Morse_decodage')),
//            'Codage' => array('Cible' => 'retour_morse'),
            'Retour' => array('Cible_retour' => 'projet_perso')
        ),
        'semaphore' => array(
//            'Apprendre' => array('Cible' => 'retour_sem'),
            'Decodage' => array('Lien' => "#"),
//            'Codage' => array('Cible' => 'retour_semaphore'),
            'Retour' => array('Cible_retour' => 'projet_perso')
        ),
//        'retour_morse' => array(
//            'En cours...' => array('Cible_retour' => 'morse'),
//            'Retour' => array('Cible_retour' => 'morse')
//        ),
//        'retour_sem' => array(
//            'En cours...' => array('Cible_retour' => 'semaphore'),
//            'Retour' => array('Cible_retour' => 'semaphore') 
//        ),
//        'en_cours' => array(
//            'A venir ...' => array('Cible_retour' => 'accueil'),
//            'Retour' => array('Cible_retour' => 'accueil')
//        )
    );

    if (isset($backscreen)) {
        $path = getPath('morse', $screens);
    }

    foreach ($screens as $key => $value) {
        if (isset($backscreen)) {
            if ($backscreen == $key) {
                echo "<div id=\"" . $key . "\" class=\"ms-container ms-default container\">" . PHP_EOL;
            } else {
                echo "<div id=\"" . $key . "\" class=\"ms-container container\">" . PHP_EOL;
            }
        } else if ($key == 'accueil') {
            echo "<div id=\"" . $key . "\" class=\"ms-container ms-default container\">" . PHP_EOL;
        } else {
            echo "<div id=\"" . $key . "\" class=\"ms-container container\">" . PHP_EOL;
        }
        echo "<div class=\"content\">" . PHP_EOL
        . "<ul class=\"bmenu\">" . PHP_EOL;
        foreach ($value as $titre => $cible) {
            if (isset($cible['Cible'])) {
                $onclick = ' ng-click="titreCtrl.addLink(\'' . $titre . '\',\'' . $cible['Cible'] . '\');" ';
                echo '<li><a class="ms-nav-link" data-ms-target="' . $cible['Cible'] . '" ' . $multiS_right . $onclick . ' >' . $titre . '</a></li>' . PHP_EOL;
            } else if (isset($cible['Cible_retour'])) {
                $remove = ' ng-click="titreCtrl.removeLink(1);" ';
                echo '<li><a class = "ms-nav-link" data-ms-target ="' . $cible['Cible_retour'] . '"' . $multiS_back . $remove . '><span class = "glyphicon glyphicon-chevron-left"></span>' . $titre . '</a></li>' . PHP_EOL;
            } else if (isset($cible['Lien'])) {
                echo '<li><a href="' . $cible['Lien'] . '">' . $titre . '</a></li>';
            } else {
                $remove = ' ng-click="titreCtrl.removeLink(1);" ';
                echo '<li><a class ="ms-nav-link" data-ms-target="accueil" ' . $multiS_back . $remove . ' ><span class = "glyphicon glyphicon-chevron-left"></span>Retour</a></li>' . PHP_EOL;
            }
        }
        echo "</ul></div></div>" . PHP_EOL;
    }
    ?>
    <header class="text-center">
        <ul id="path">
            <li ng-repeat="title in titreCtrl.titre" id="ms-nav-parent">
                <a ng-show="!$last" ng-click="titreCtrl.removeLink(title)" class="ms-nav-link" data-ms-exit-animation="right" data-ms-enter-animation="left" data-ms-horizontal-distance="1000" data-ms-target="{{title.lien}}" href="javascript:void(0)"  > {{title.titre}}</a>
                <p ng-show="$last" id="last"> {{ title.titre}} </p>
                <p ng-show="!$last"> > </p>
            </li>
        </ul>
    </header>
    <footer>
        <div class="row text-center">
            <ul>
                <li><a href="<?php echo site_url('Contact'); ?>" >Contact</a></li>
                <li> - </li>
                <li><a href="<?php echo site_url('A_propos'); ?>" >A propos</a></li>
            </ul>
        </div>
    </footer>
</body>


<?php

function getPath($feuille, &$array) {
    $path = array();
    $found = FALSE;
    while ($feuille != 'accueil') {
        foreach ($array as $key => $value) {
            foreach ($value as $title => $target) {
                if (isset($target['Cible']) && $target['Cible'] == $feuille) {
                    $found = TRUE;
                    $way = array($feuille => $title);
                    array_unshift($path, $way);
                    break;
                }
            }
            if ($found) {
                $feuille = $key;
                break;
            }
        }
    }
    array_unshift($path, array($feuille => 'Accueil'));
    return $path;
}

function print_path(&$path) {
    foreach ($path as $key => $value) {
        $total .= array_values($value)[0] . ' > ';
    }
    $total = substr($total, 0, strlen($total) - 2);
    return $total;
}
?>