<?php

/* Projets/GitHub/euraka.html.twig */
class __TwigTemplate_e90e666a6312ade79f249deaca6b8cf6f38d6f524ef5dfa1852bafc78ed3189c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "Projets/GitHub/euraka.html.twig", 1);
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
        echo "    <header class=\"text-center\">
        <h1>
            <a href=\"http://www.thegamehasbegun.com/euraka/index.html\" target=\"_blank\">
                Euraka 
            </a>
        </h1>
    </header
";
    }

    // line 13
    public function block_main_part($context, array $blocks = array())
    {
        // line 14
        echo "    <div class=\"container-fluid\">
        <div class=\"col-sm-8 col-sm-offset-2 col-xs-12\">
            <p class=\"text-justify\">

                Suite à une GameJam sur le thème de la lumière, avec une équipe experimentée, j'ai pu participer à la réalisation du jeu 'Euraka'.
                Le langage utilisé pour le jeu est le javascript. Ce qui permet d'inclure le jeu directement dans un site web, sans avoir à le compiler.
                Voici la démo du jeu : <a href=\"http://www.thegamehasbegun.com/euraka/index.html\">Euraka</a><br/>
                <img src=\"";
        // line 21
        echo twig_escape_filter($this->env, images(), "html", null, true);
        echo "Projets/euraka.png\" class=\"wrap-left\">
                Le projet est disponible sur GitHub : <a href=\"https://github.com/AzariasB/Euraka\">Euraka sur GitHub</a><br/>
                Euraka est le nom du héro éponyme du jeux. Il s'agit d'un rat qui cherche des ressources de lumière pour voir autour de lui et s'échapper du labyrinthe.<br/>
                En réalité, ce personnage n'en est qu'un parmis tant d'autres imaginés par les peronnes avec qui j'ai participé à la GameJam qui produisent un jeu beaucoup plus grand que je vous conseille d'aller voir 
                : <a href=\"http://www.thegamehasbegun.com/\">Kaode</a>
            </p>
        </div>
    </div>
";
    }

    // line 30
    public function block_footer($context, array $blocks = array())
    {
        // line 31
        echo "    <footer>
        <div class=\"row\">
            <div class=\"col-sm-6 col-xs-12\">
                <a href=\"";
        // line 34
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-default col-md-6\" ><span class=\"glyphicon glyphicon-chevron-left\"></span>Accueil</a>
            </div>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "Projets/GitHub/euraka.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  77 => 34,  72 => 31,  69 => 30,  56 => 21,  47 => 14,  44 => 13,  33 => 5,  30 => 4,  11 => 1,);
    }
}
