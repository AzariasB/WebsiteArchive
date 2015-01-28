


<?php
if (!isset($data)) {
    show_error('Coucou');
}

$pere = '';
$fils = array();
$content = array();

foreach ($data as $key => $value) {
    if ($pere == '') {
        $pere = $value['pere'];
    }
    if ($pere != $value['pere']) {
        $content[$pere] = $fils;
        unset($fils);
        $fils = array();
        $pere = $value['pere'];
    }
    if (isset($value['lien']) && $value['lien'] != NULL) {
        $lien = '<a href="' . $value['lien'] . '" target="_blank" > ' . $value['sous-titre'] . '</a>';
    } else {
        $lien = $value['sous-titre'];
    }
    $fils[$lien] = $value['texte'];
}
$content[$pere] = $fils;
?>

<script type="text/javascript" src="<?php echo Globals::$js; ?>a_propos.js"></script>
<link href="<?php echo Globals::$css; ?>a_propos_style.css" rel="stylesheet" />
</head>
<body>
    <header class="text-center">
        <h1>A propos</h1>
    </header>
    <div class="container-fluid text-center" id="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0  text-left" id="middled" ng-controller="aProposCtrl" >
                <?php
                foreach ($content as $key => $value) {
                    echo '<h2 id="' . str_replace(' ', '', $key) . '" class="text-left" >' . $key . '</h2>';
                    echo '<ul>';
                    $i = 0;
                    foreach ($value as $titre => $text) {
                        echo '<li>' . PHP_EOL;
                        echo '<h2 id="' . $i . '_sbttl">' . $titre . '</h2>' . PHP_EOL;
                        echo $text . PHP_EOL;
                        $i++;
                        echo '</li>' . PHP_EOL;
                    }
                    echo '</ul>';
                }
                ?>
            </div>
            <div id="scroll_position" class="col-sm-2 text-center hidden-sm hidden-xs "  >
            </div>
        </div>
    </div>
    <footer>
        <div class="row">
            <a href="<?php echo site_url('Accueil'); ?>" class="btn btn-default col-sm-3 col-xs-5 "><span class="glyphicon glyphicon-chevron-left"></span> Accueil</a>
            <a href="#" class="btn btn-default col-sm-offset-6 col-sm-3 col-xs-5 col-xs-offset-2 " ><span class="glyphicon glyphicon-envelope"></span> Me contacter </a>
        </div>
    </footer>
</body>
</html>
