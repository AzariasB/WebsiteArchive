<script src="<?php echo js() ?>semaphore.js"></script>
<link href=" <?php echo css() ?>semaphore_style.css" rel="stylesheet"/>
<link href="<?php echo css() ?>contact_style.css" rel="stylesheet" />
</head>
<body ng-app="semaphore" >
    <div ng-controller="game as g" ng-init="g.chrono()" >
        <header>
            <div class="row">
                <div class="col-xs-4 text-center">
                    <h3>Score</h3>
                </div>
                <div class="col-xs-4 text-center">
                    <h3>{{ g.commentaries}}</h3>
                </div>
                <div class="col-xs-4 text-center">
                    <h3>Chrono</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4 text-center" >
                    <h3>{{ g.score}}</h3>
                </div>
                <div class="col-xs-offset-4 col-xs-4 text-center">
                    <h3>{{ g.d_time }} </h3>
                </div>
            </div>

        </header>
        <div class="col-sm-8 col-sm-offset-2 col-xs-12 text-center " >
            <img class="img-responsive " src="<?php echo images()?>/Projets/semaphore/{{ g.current_letter}}.png" alt="{{ g.current_letter}}" />
            <input id="answer" class="form-control-static text-center" onblur="this.focus()" type="text" ng-model="g.user_letter" ng-change="g.user_input()" />
        </div>

        <footer>
            <a class="btn btn-default col-xs-3 " href="<?php echo site_url('Accueil') ?>"><span class="glyphicon glyphicon-chevron-left"></span>Accueil</a>
            <button id="pause" ng-click="g.pause()" class="btn btn-success col-xs-offset-1 col-xs-2" >Pause</button>
            <button id="continue" ng-click="g.unpause()" disabled="" class="btn btn-primary col-xs-2">Continuer</button>
        </footer>
    </div>
</body>
</html>
