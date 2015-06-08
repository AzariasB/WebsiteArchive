<?php

/* Projets/GitHub/sort_js.html.twig */
class __TwigTemplate_ea12c6bedd6dc8346a7d19b3a581c6369bc3c9ae450d2d255fb70c69a30de78d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "Projets/GitHub/sort_js.html.twig", 1);
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

    // line 3
    public function block_head($context, array $blocks = array())
    {
        // line 4
        echo "    <header class=\"text-center\">
        <h1>
            <a href=\"https://github.com/AzariasB/sort.js\" target=\"_blank\">
                Sort.js 
            </a>
        </h1>
    </header>
";
    }

    // line 12
    public function block_main_part($context, array $blocks = array())
    {
        // line 13
        echo "    <div class=\"container-fluid\">
        <div class=\"col-sm-8 col-sm-offset-2 col-xs-12\">
            <p class=\"text-justify\">
                Suite aux cours sur la complexité algorithmique, j'ai décidé de faire un ensemble de fonction en javascript.<br/>
                Ces fonctions utilisent les différents types d'algorithme possibles pour trier une liste, le plus rapidement (ou pas) possible. <br/>
                Le projet est disponible en open source sur GitHub : <a href=\"https://github.com/AzariasB/sort.js\">sort.js</a><br/>
                Tout les algorithmes vu en cours ont été implémenté, mais ils ne sont pas forcément tous utiles. Certains sont long et donc peu performant.
            </p>
        </div>
    </div>
";
    }

    // line 24
    public function block_footer($context, array $blocks = array())
    {
        // line 25
        echo "    <footer>
        <div class=\"row\">
            <div class=\"col-sm-6 col-xs-12\">
                <a href=\"";
        // line 28
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-default col-md-6\" ><span class=\"glyphicon glyphicon-chevron-left\"></span>Accueil</a>
            </div>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "Projets/GitHub/sort_js.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  69 => 28,  64 => 25,  61 => 24,  47 => 13,  44 => 12,  33 => 4,  30 => 3,  11 => 1,);
    }
}
