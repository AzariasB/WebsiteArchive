<?php

/* Scolaire/GameJam.html.twig */
class __TwigTemplate_25307402d0ee691b26c18b84a41b812f430cdfc2869dbf76eac0059b6e1e9ec6 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "Scolaire/GameJam.html.twig", 1);
        $this->blocks = array(
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
    public function block_head($context, array $blocks = array())
    {
        // line 5
        echo "    <header>
        <div class=\"col-xs-12 text-center\">
            <h1>GameJam</h1>
        </div>
    </header>
";
    }

    // line 11
    public function block_main_part($context, array $blocks = array())
    {
        // line 12
        echo "    <div class=\"container-fluid\" >
        <div class=\"col-sm-8 col-sm-offset-2 col-xs-12\">
            <p class=\"text-justify\">
                Une semaine durant, à l'IUT, nous avons eu une 'GameJam'. Une semaine pour coder notre propre jeu. Ce jeu devait respecter un certaion thème : 'A deux, c'est mieux'.
                Nous étions donc une équipe d 6 étudiants, et nous avons developpé un petit jeu en 2d. Le but du jeu étais de résoudre des minis-puzzle.
                <img src=\"";
        // line 17
        echo twig_escape_filter($this->env, (images() . "Projets/InternShip.png"), "html", null, true);
        echo "\" class=\"wrap-left\" />
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
                Le jeu est sur github : <a href=\"https://github.com/AzariasB/InternShip\" target=\"_blank\">Internship</a>
                <br/><br/>
                <img src=\"";
        // line 30
        echo twig_escape_filter($this->env, (images() . "Projets/iCredits.png"), "html", null, true);
        echo "\" class=\"wrap-right\" />
                L'histoire du jeu parlais de deux personnes qui se retrouvaient sur une île perdu et qui cherchaint la sortie pour pouvoir rentrer chez eux.
                A la fin de l'aventure, un des deux personnages se dévoilait en tant que recrutteur et proposait à l'autre personnage un stage.
                Parce que, bien entendu, le rêve de tout étudiant de notre âge, c'est de trouver un stage :)
                <br/><br/>
                Ce jeu a été developpé en C++ avec la bibliothèque SFML. Très pratique pour des petits jeux en 2D comme celui que nous avons réalisé.

            </p>
        </div>
    </div>
";
    }

    // line 41
    public function block_footer($context, array $blocks = array())
    {
        // line 42
        echo "    <footer>
        <div class=\"col-xs-4\">
            <a href=\"";
        // line 44
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-default col-xs-12\" ><span class=\"glyphicon glyphicon-chevron-left\"></span>Accueil</a>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "Scolaire/GameJam.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  90 => 44,  86 => 42,  83 => 41,  68 => 30,  52 => 17,  45 => 12,  42 => 11,  33 => 5,  30 => 4,  11 => 1,);
    }
}
