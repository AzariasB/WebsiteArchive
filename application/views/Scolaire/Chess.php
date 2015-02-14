
<link rel='stylesheet' href='<?php echo Globals::$css ?>chess.css'/>
<script src='<?php echo Globals::$js ?>chess.js'></script>
    </head>
    <body>
        <header>
            <div class="col-xs-4">
                <a href="<?php echo site_url('Accueil'); ?>" class="btn btn-default"><span class="glyphicon glyphicon-chevron-left" ></span> Accueil </a>
            </div>
            <div class="col-xs-4 text-center">
                <h1>Jeux d'échecs</h1>
            </div>
        </header>
        <div id='board'>
        </div>
        <div class="row text-center" >
            <h3>Au tour des : <strong id="currentColor" >Blanc</strong>  </h3>
        </div>
    </body>
</html>
