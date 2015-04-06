
<?php
if (!defined('BASEPATH')) {
    exit('No direct script allowed');
}

function display_score($informations, $rang) {
    echo '<tr>
                <td>'.$rang.'</td>
                <td>'.$informations->score.'</td>'
            . ' <td>'.$informations->pseudo. '</td>'
            . '<td>'. ($informations->Lettres == 0 ? '&#x2610' : '&#x2611') .'</td>
                <td>'. ($informations->Chiffres == 0 ? '&#x2610' : '&#x2611') .' </td>
              <td> '.($informations->Ponctuation == 0 ? '&#x2611' : '&#x2610'). ' </td>
            </tr>';
}
?>
<link href="<?php echo css() ?>contact_style.css" rel="stylesheet" />
<link href="<?php echo css() ?>score_style.css" rel="stylesheet" />
</head>
<body>
    <div class="col-sm-10 col-sm-offset-1 col-xs-12 text-center">
        <table class="table table-hover" >
            <thead>
                <tr id="table-header" >
                    <th class="text-center" >Rang</th>
                    <th class="text-center" >Score</th>
                    <th class="text-center" >Pseudo</th>
                    <th class="text-center" >Lettres</th>
                    <th class="text-center" >Chiffres</th>
                    <th class="text-center" >Ponctuation</th>
                </tr>
            </thead>
            <?php
            $rang = 1;
            foreach ($scores as $info){
                display_score($info, $rang);
                $rang++;
            }
            
            ?>
        </table>
    </div>

    <footer>
        <div class="col-xs-4" >
            <a href="<?php echo site_url('Projets_perso/Morse_decodage'); ?>" class="btn btn-default" ><span class="glyphicon glyphicon-chevron-left" ></span>Retour au morse</a>
        </div>
        <div class="col-xs-4 text-center ">
            <a href="<?php echo site_url('Accueil') ?>" class="btn btn-primary">Accueil</a>
        </div>
    </footer>
</body>
</html>

<?php
?>