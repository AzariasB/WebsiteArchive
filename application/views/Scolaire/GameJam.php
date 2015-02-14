<script src="<?php echo Globals::$js; ?>lightbox.js" ></script>
<link href="<?php echo Globals::$css; ?>contact_style.css" rel="stylesheet" />
<link href="<?php echo Globals::$css ?>projets_scol_style.css" rel="stylesheet" />
</head>
<body>
    <header>
        <div class="col-xs-12 text-center">
            <h1>GameJam</h1>
        </div>
    </header>
    <div class="container-fluid" >
        <div class="col-sm-8 col-sm-offset-2 col-xs-12">
            <p class="text-justify">
                Une semaine durant, à l'IUT, nous avons eu une 'GameJam'. Une semaine pour coder notre propre jeu. Ce jeu devait respecter un certaion thème : 'A deux, c'est mieux'.
                Nous étions donc une équipe d 6 étudiants, et nous avons developpé un petit jeu en 2d. Le but du jeu étais de résoudre des minis-puzzle.
                <img src="<?php echo Globals::$pictures; ?>Projets/Internship.png" class="wrap-left" />
                Le jeu étais composé de deux joueurs utilisant deux parties du clavier.
                On ne pouvait pas finir le jeu tout seul. Tout les puzzles n'étaient resolvables qu'à deux.
                Deux règles étaient établies :
                <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Un joueur peut porter un joueur et le lancer au-dessus de certains obstacles
                <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Un joueur peut se téléporter vers un autre.
                <br/> En plus de ces règles, on pouvai trouver sur la carte des déclancheurs, permettant d'enlever des obstacles. Ces déclencheurs avaient comme forme une plaque de pression.
                Il suffisait qu'un seul des deux joueurs marche dessus pour pouvoir enlever l'obstacle en question.
                <br/><br/>
                Cette semaine était aussi un concours. Malheuresement nous n'avons pas gagné.
                Mais notre jeu a été rendu terminé, sans bugs. Il manquait juste le fil de l'histoire. Et surtout, une fin digne de ce nom.
                Le jeu est sur github : <a href="https://github.com/AzariasB/InternShip" target="_blank">Internship</a>
                <br/><br/>
                <img src="<?php echo Globals::$pictures; ?>Projets/iCredits.png" class="wrap-right" />
                L'histoire du jeu parlais de deux personnes qui se retrouvaient sur une île perdu et qui cherchaint la sortie pour pouvoir rentrer chez eux.
                A la fin de l'aventure, un des deux personnages se dévoilait en tant que recrutteur et proposait à l'autre personnage un stage.
                Parce que, bien entendu, le rêve de tout étudiant de notre âge, c'est de trouver un stage :)
                <br/><br/>
                Ce jeu a été developpé en C++ avec la bibliothèque SFML. Très pratique pour des petits jeux en 2D comme celui que nous avons réalisé.

            </p>
        </div>
    </div>
    <footer>
        <div class="col-xs-4">
            <a href="<?php echo site_url('Accueil'); ?>" class="btn btn-default col-xs-12" ><span class="glyphicon glyphicon-chevron-left"></span>Accueil</a>
        </div>
    </footer>
</body>
</html>
