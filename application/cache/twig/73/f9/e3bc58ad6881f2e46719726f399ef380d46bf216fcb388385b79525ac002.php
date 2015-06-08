<?php

/* Projets/Decodage/Morse.html.twig */
class __TwigTemplate_73f9e3bc58ad6881f2e46719726f399ef380d46bf216fcb388385b79525ac002 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 2
        $this->parent = $this->loadTemplate("base.html.twig", "Projets/Decodage/Morse.html.twig", 2);
        $this->blocks = array(
            'body_definition' => array($this, 'block_body_definition'),
            'head' => array($this, 'block_head'),
            'main_part' => array($this, 'block_main_part'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body_definition($context, array $blocks = array())
    {
        // line 5
        echo "    <body ng-app=\"morse\" ng-controller=\"ScoreBoard as score\">
    ";
    }

    // line 7
    public function block_head($context, array $blocks = array())
    {
        // line 8
        echo "        <header class=\"text-center\">
            <div class=\"row\">
                <div class=\"col-md-4 hidden-sm hidden-xs \">
                    <h2>Résultat</h2>
                </div>
                <div class=\"col-md-4 col-sm-6 hidden-xs\">
                    <h2 id=\"text\">";
        // line 14
        echo "{{";
        echo " score.d_commentaire";
        echo "}}";
        echo "</h2>
                </div>
                <div class=\"col-md-4 hidden-sm hidden-xs \">
                    <h2>Chrono</h2>
                </div>
            </div>
            <div class=\"row\">
                <div class=\"col-md-4 col-xs-6 col-sm-6\">
                    <h3 id=\"score\">";
        // line 22
        echo "{{";
        echo " score.d_score";
        echo "}}";
        echo "</h3><h3>/</h3><h3 id=\"total\"> ";
        echo "{{";
        echo " score.nbr_questions";
        echo "}}";
        echo " </h3>
                </div>
                <div class=\"visible-xs col-xs-6\">
                    <h2 id=\"text\">";
        // line 25
        echo "{{";
        echo " score.d_commentaire";
        echo "}}";
        echo "</h2>
                </div>
                <div class=\"col-md-4 hidden-sm hidden-xs \">
                    <div class=\"col-md-4 hidden-sm hidden-xs\">
                        <h3 id=\"special\" ng-show=\"score.with_ponctuation\" >Ponctuation</h3>
                    </div>
                    <div class=\"col-md-4 hidden-sm hidden-xs \">
                        <h3 id=\"alphabet\" ng-show=\"score.with_alphabet\">Alphabet</h3>
                    </div>
                    <div class=\"col-md-4 hidden-sm hidden-xs \">
                        <h3 id=\"chiffre\" ng-show=\"score.with_chiffres\" >Chiffre</h3>
                    </div>

                </div>
                <div class=\"col-md-4 hidden-sm hidden-xs \">
                    <h3 id=\"time\">";
        // line 40
        echo "{{";
        echo " score.d_time";
        echo "}}";
        echo "</h3>
                </div>
            </div>
        </header>
    ";
    }

    // line 45
    public function block_main_part($context, array $blocks = array())
    {
        // line 46
        echo "        <div id=\"answer_parent\">
            <input type=\"text\" id=\"answer\" ng-change=\"score.getkey()\" ng-model=\"score.answer\" />
        </div>
        <div id=\"pause_screen\">
            <div class=\"row\">
                <div class=\"col-md-12 text-center\" >
                    <h1 id=\"pause_text\" class=\"text-center\" ></h1>
                </div>
            </div>
            <div class=\"row\">
                <div class=\"col-md-12 text-center\">
                    <h2 id=\"pause_score\"></h2>
                    <h2 id=\"pause_time\" ></h2>
                    <h2 id=\"score_calc\" ></h2>
                </div>
            </div>
            <div class=\"row\">
                <div class=\"col-md-6 text-right\">
                    <a class=\"btn btn-primary btn-lg\" href=\"";
        // line 64
        echo twig_escape_filter($this->env, site_url("Projets_perso/Morse_decodage"), "html", null, true);
        echo "\" >Recommencer</a>
                </div>
                <div class=\"col-md-6 text-left\">
                    <a class=\"btn btn-default btn-lg\" href=\"";
        // line 67
        echo twig_escape_filter($this->env, site_url("Projets_perso/Morse_score"), "html", null, true);
        echo "\" >Tableau des scores</a>
                </div>
            </div>


        </div>
        <div class=\"ms-container ms-default container\" id=\"choix\">
            <div class=\"content\" ng-form=\"\" >
                <h2>Choisissez vos options</h2>
                <ul class=\"bmenu text-left\">
                    <li><a ng-click=\"score.check_alphabet()\" class=\"option\" ><span id=\"c_alphabet\" ng-bind-html=\"score.d_alphabet | unsafe\" ></span> Alphabet</a></li>
                    <li><a ng-click=\"score.check_chiffre()\" class=\"option\" ><span  id=\"c_chiffre\" ng-bind-html=\"score.d_chiffre | unsafe\" ></span> Chifres</a></li>
                    <li><a ng-click=\"score.check_ponctuation()\"  class=\"option\" ><span id=\"c_ponctuation\" ng-bind-html=\"score.d_ponctuation | unsafe\" ></span> Ponctuation</a></li>
                    <li><a ng-click=\"score.nbr_question()\" id=\"nbr_questions\" class=\"option text-center\">Nbr questions :<span id=\"c_questions\" >";
        // line 80
        echo "{{";
        echo " score.nbr_questions";
        echo "}}";
        echo "</a></li>
                </ul>
            </div>

        </div>
        <div class=\"container\" id=\"resultat\">
            <div class=\"text-center\" id=\"image_bloc\">
                <h1 id=\"image\" ng-bind-html=\"score.d_morse | unsafe\" ></h1>
            </div>
        </div>
        <div class=\"pseudo\"  >
            <h1 data-toggle=\"modal\" data-target=\"#modal_pseudo\" >";
        // line 91
        echo "{{";
        echo " score.pseudo";
        echo "}}";
        echo "</h1>
        </div>
        <div class=\"modal fade\" ng-controller=\"Explications as xp\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">
            <div class=\"modal-dialog modal-lg\">
                <div class=\"modal-content\">
                    <div class=\"modal-header\">
                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\" ng-click=\"score.unpause();\" >&times;</span></button>
                        <h4 class=\"modal-title\" id=\"myModalLabel\">Explications</h4>
                    </div>
                    <div class=\"modal-body\">
                        <div class=\"row\">
                            <div ng-repeat=\"button in xp.explications\" class=\"col-md-2\">
                                <button class=\"col-md-12 btn btn-primary choice\" ng-class=\"button.button_b ? 'active':''\" id=\"button.button_name\" type=\"button\" ng-click=\"xp.change_button(button.button_name);\">";
        // line 103
        echo "{{";
        echo " button.button_text";
        echo "}}";
        echo "</button>
                            </div>
                        </div>
                        <hr/>
                        <div class=\"row\">
                            <div class=\"col-md-12\" ng-repeat=\"explain in xp.explications\" ng-show=\"explain.button_b\" >
                                <pre>";
        // line 109
        echo "{{";
        echo " explain.ex_text | unsafe";
        echo "}}";
        echo "</pre>
                            </div>
                        </div>
                    </div>
                    <div class=\"modal-footer\">
                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"score.unpause()\" data-dismiss=\"modal\">Fermer</button>
                    </div>
                </div>
            </div>
        </div>


        <div class=\"modal fade\" id=\"modal_pseudo\">
            <div class=\"modal-dialog\">
                <div class=\"modal-content\">
                    <div class=\"modal-header\">
                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>
                        <h4 class=\"modal-title\">Pseudo</h4>
                    </div>
                    <div class=\"modal-body\" style=\"height: 100px;\">
                        <div class=\"col-xs-4\">
                            <label for=\"pseudo\">Choisir un pseudo : </label>
                        </div>
                        <div class=\"col-xs-8\">
                            <input type=\"text\" id=\"pseudo\" ng-model=\"score.pseudo\" class=\"form-control\" >
                        </div>
                        <br/>
                        <div class=\"col-xs-4\">
                            <p>Ou</p>
                        </div>
                        <div class=\"col-xs-8\">
                            <button class=\"btn btn-default\" data-dismiss=\"modal\" ng-click=\"score.pseudo = 'anonyme'\" >Jouer en anonyme</button>
                        </div>
                    </div>
                    <div class=\"modal-footer\">
                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Continuer</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

    ";
    }

    // line 151
    public function block_footer($context, array $blocks = array())
    {
        // line 152
        echo "        <footer class=\"row\">
            <div id=\"before\">
                <div class=\"col-md-offset-4 col-md-4 col-xs-10 col-xs-offset-1 \">
                    <button ng-click=\"score.debut_jeu()\" class=\"col-md-12 col-xs-12  btn btn-success btn-lg\" type=\"button\">Commencer la partie<span class=\"glyphicon glyphicon-chevron-right\" ></span></button>
                </div>
            </div>
            <div id=\"after\" style=\"display: none\" >
                <div class=\"col-md-2 col-sm-2 col-xs-3 \">
                    <a class=\"col-md-12 btn btn-default btn-lg\" href=\"";
        // line 160
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\"><span class=\"glyphicon glyphicon-chevron-left\"> </span>  Retour</a>
                </div>
                <div class=\"col-md-2 col-md-offset-1  col-xs-3 col-sm-2\">
                    <button type=\"button\" class=\"col-md-12 btn btn-lg btn-danger\" ng-click=\"score.pause()\" id=\"pause\">
                        Pause
                    </button>
                </div>
                <div class=\"col-md-2 col-sm-2 col-xs-3 \">
                    <button type=\"button\" class=\"col-md-12 btn btn-lg btn-success disabled\" ng-click=\"score.unpause()\" id=\"continue\">
                        Continuer
                    </button>
                </div>
                <div class=\"col-md-2 hidden-sm hidden-xs \">
                    <a href=\"";
        // line 173
        echo twig_escape_filter($this->env, site_url("Projets_perso/Morse_decodage"), "html", null, true);
        echo "\" class=\"col-md-12 btn btn-lg btn-info\" id=\"restart\">
                        Recommencer
                    </a>
                </div>
                <div class=\"col-md-2 col-sm-2 col-xs-3  col-md-offset-1\">
                    <button type=\"button\" class=\"btn btn-default btn-lg col-md-12\" ng-click=\"score.pause()\" data-toggle=\"modal\" data-target=\"#myModal\">Explications</button>
                </div>
            </div>
        </footer>
    ";
    }

    public function getTemplateName()
    {
        return "Projets/Decodage/Morse.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  272 => 173,  256 => 160,  246 => 152,  243 => 151,  195 => 109,  184 => 103,  167 => 91,  151 => 80,  135 => 67,  129 => 64,  109 => 46,  106 => 45,  95 => 40,  75 => 25,  63 => 22,  50 => 14,  42 => 8,  39 => 7,  34 => 5,  31 => 4,  11 => 2,);
    }
}
