
<script type="text/javascript" src="<?php echo js() ?>a_propos.js"></script>
<link href="<?php echo css()?>a_propos_style.css" rel="stylesheet" />
</head>
<body>
    <header class="text-center">
        <h1>A propos</h1>
    </header>
    <div class="container-fluid text-center" id="content">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0  text-left" id="middled">
            </div>
            <div id="scroll_position" class="col-sm-2 text-center hidden-sm hidden-xs "  >
            </div>
        </div>
    </div>
    <footer>
        <div class="row">
            <a href="<?php echo site_url('Accueil'); ?>" class="btn btn-default col-sm-3 col-xs-5 "><span class="glyphicon glyphicon-chevron-left"></span> Accueil</a>
            <a href="<?php echo site_url('Contact') ?>" class="btn btn-default col-sm-offset-6 col-sm-3 col-xs-5 col-xs-offset-2 " ><span class="glyphicon glyphicon-envelope"></span> Me contacter </a>
        </div>
    </footer>
</body>
</html>
