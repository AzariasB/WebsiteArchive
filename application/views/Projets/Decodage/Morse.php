<link href="<?php echo css() ?>morse_style.css" rel="stylesheet" media="screen" >
<script LANGUAGE="JavaScript" src="<?php echo js() ?>morse.js" type="text/javascript" ></script>
</head>

<body ng-app="morse" ng-controller="ScoreBoard as score">
    <div id="answer_parent">
        <input type="text" id="answer" ng-change="score.getkey()" ng-model="score.answer" />
    </div>
    <div id="pause_screen">
        <div class="row">
            <div class="col-md-12 text-center" >
                <h1 id="pause_text" class="text-center" ></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <h2 id="pause_score"></h2>
            </div>

        </div>
        <!-- 
        Rajouter le tableau des scores ici !
        -->
        <div class="row">
            <div class="col-md-12 text-center">
                <a class="btn btn-primary btn-lg" href="<?php echo site_url('Projets_perso/Morse_decodage'); ?>" >Recommencer</a>
            </div>
        </div>


    </div>
    <div class="ms-container ms-default container" id="choix">
        <div class="content" ng-form="" >
            <h2>Choisissez vos options</h2>
            <ul class="bmenu text-left">
                <li><a ng-click="score.check_alphabet()" class="option" ><span id="c_alphabet" ng-bind-html="score.d_alphabet | unsafe" ></span> Alphabet</a></li>
                <li><a ng-click="score.check_chiffre()" class="option" ><span  id="c_chiffre" ng-bind-html="score.d_chiffre | unsafe" ></span> Chifres</a></li>
                <li><a ng-click="score.check_ponctuation()"  class="option" ><span id="c_ponctuation" ng-bind-html="score.d_ponctuation | unsafe" ></span> Ponctuation</a></li>
                <li><a ng-click="score.nbr_question()" id="nbr_questions" class="option text-center">Nbr questions :<span id="c_questions" >{{ score.nbr_questions}}</a></li>
            </ul>
        </div>

    </div>
    <div class="container" id="resultat">
        <div class="text-center" id="image_bloc">
            <h1 id="image" ng-bind-html="score.d_morse | unsafe" ></h1>
        </div>
    </div>
    <header class="text-center">
        <div class="row">
            <div class="col-md-4 hidden-sm hidden-xs ">
                <h2>Score</h2>
            </div>
            <div class="col-md-4 col-sm-6 hidden-xs">
                <h2 id="text">{{ score.d_commentaire}}</h2>
            </div>
            <div class="col-md-4 hidden-sm hidden-xs ">
                <h2>Chrono</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-6 col-sm-6">
                <h3 id="score">{{ score.d_score}}</h3><h3>/</h3><h3 id="total"> {{ score.nbr_questions}} </h3>
            </div>
            <div class="visible-xs col-xs-6">
                <h2 id="text">{{ score.d_commentaire}}</h2>
            </div>
            <div class="col-md-4 hidden-sm hidden-xs ">
                <div class="col-md-4 hidden-sm hidden-xs">
                    <h3 id="special" ng-show="score.with_ponctuation" >Ponctuation</h3>
                </div>
                <div class="col-md-4 hidden-sm hidden-xs ">
                    <h3 id="alphabet" ng-show="score.with_alphabet">Alphabet</h3>
                </div>
                <div class="col-md-4 hidden-sm hidden-xs ">
                    <h3 id="chiffre" ng-show="score.with_chiffres" >Chiffre</h3>
                </div>

            </div>
            <div class="col-md-4 hidden-sm hidden-xs ">
                <h3 id="time">{{ score.d_time}}</h3>
            </div>
        </div>
    </header>
    <div class="pseudo"  >
        <h1 data-toggle="modal" data-target="#modal_pseudo" >{{ score.pseudo}}</h1>
    </div>
    <footer class="row">
        <div id="before">
            <div class="col-md-offset-4 col-md-4 col-xs-10 col-xs-offset-1 ">
                <button ng-click="score.debut_jeu()" class="col-md-12 col-xs-12  btn btn-success btn-lg" type="button">Commencer la partie<span class="glyphicon glyphicon-chevron-right" ></span></button>
            </div>
        </div>
        <div id="after" style="display: none" >
            <div class="col-md-2 col-sm-2 col-xs-3 ">
                <a class="col-md-12 btn btn-default btn-lg" href="<?php echo site_url('Projets_perso/Morse_retour'); ?>"><span class="glyphicon glyphicon-chevron-left"> </span>  Retour</a>
            </div>
            <div class="col-md-2 col-md-offset-1  col-xs-3 col-sm-2">
                <button type="button" class="col-md-12 btn btn-lg btn-danger" ng-click="score.pause()" id="pause">
                    Pause
                </button>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-3 ">
                <button type="button" class="col-md-12 btn btn-lg btn-success disabled" ng-click="score.unpause()" id="continue">
                    Continuer
                </button>
            </div>
            <div class="col-md-2 hidden-sm hidden-xs ">
                <a href="<?php echo site_url('Projets_perso/Morse_decodage'); ?>" class="col-md-12 btn btn-lg btn-info" id="restart">
                    Recommencer
                </a>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-3  col-md-offset-1">
                <button type="button" class="btn btn-default btn-lg col-md-12" ng-click="score.pause()" data-toggle="modal" data-target="#myModal">Explications</button>
            </div>
        </div>
    </footer>

    <!-- Modal -->
    <div class="modal fade" ng-controller="Explications as xp" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                    <button type="button" class="btn btn-default" ng-click="score.unpause()" data-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="modal_pseudo">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Pseudo</h4>
                </div>
                <div class="modal-body" style="height: 100px;">
                    <div class="col-xs-4">
                        <label for="pseudo">Choisir un pseudo : </label>
                    </div>
                    <div class="col-xs-8">
                        <input type="text" id="pseudo" ng-model="score.pseudo" class="form-control" >
                    </div>
                    <br/>
                    <div class="col-xs-4">
                        <p>Ou</p>
                    </div>
                    <div class="col-xs-8">
                        <button class="btn btn-default" data-dismiss="modal" ng-click="score.pseudo = 'anonyme'" >Jouer en anonyme</button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Continuer</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

</body>
</html>