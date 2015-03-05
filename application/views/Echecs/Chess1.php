
<link rel='stylesheet' href='<?php echo css() ?>chess.css'/>
<script src='<?php echo Globals::$js ?>chess.js'></script>
</head>
<body ng-app="chess" ng-controller="Explications as xp"  >
    <header>
        <div class="col-xs-4">
            <a href="<?php echo site_url('Accueil'); ?>" class="btn btn-lg btn-default"><span class="glyphicon glyphicon-chevron-left" ></span> Accueil </a>
        </div>
        <div class="col-xs-4 text-center">
            <h1>Jeux d'échecs</h1>
        </div>
        <div class="col-xs-4 text-right" >
            <button ng-click="" type="button" data-toggle="modal" data-target="#myModal" class="btn btn-lg btn-primary">Explications</button>
        </div>
    </header>
    <div id='board'>
    </div>
    <div class="row text-center" >
        <h3>Au tour des : <strong id="currentColor" >Blanc</strong>  </h3>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" ng-click="score.unpause();" >&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Explications</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div ng-repeat="button in xp.explications" class="col-md-2">
                            <button class="col-md-12 btn btn-primary choice" ng-class="button.button_b ? 'active':''" id="button.button_name" type="button" ng-click="xp.change_button(button.button_name);">{{ button.button_text}}</button>
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div class="col-md-12" ng-repeat="explain in xp.explications" ng-show="explain.button_b" >
                            <pre>{{ explain.ex_text | unsafe}}</pre>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
