<?php

/* Echecs/chess1.html.twig */
class __TwigTemplate_d13fae9d1ae3b313806b45edbe24f384ef7a26b7d75154e81d0ccb6a69a2af6d extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "Echecs/chess1.html.twig", 1);
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

    // line 3
    public function block_body_definition($context, array $blocks = array())
    {
        // line 4
        echo "    <body ng-app=\"chess\" ng-controller=\"Explications as xp\"  >
    ";
    }

    // line 6
    public function block_head($context, array $blocks = array())
    {
        // line 7
        echo "        <header>
            <div class=\"col-xs-4\">
                <a href=\"";
        // line 9
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-lg btn-default\"><span class=\"glyphicon glyphicon-chevron-left\" ></span> Accueil </a>
            </div>
            <div class=\"col-xs-4 text-center\">
                <h1>Jeux d'échecs</h1>
            </div>
            <div class=\"col-xs-4 text-right\" >
                <button ng-click=\"\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"btn btn-lg btn-primary\">Explications</button>
            </div>
        </header>
    ";
    }

    // line 19
    public function block_main_part($context, array $blocks = array())
    {
        // line 20
        echo "        <div id='board'>
        </div>
        <!-- Modal -->
        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">
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
        // line 33
        echo twig_escape_filter($this->env, twig_template_get_attributes($this, (isset($context["button"]) ? $context["button"] : null), "button_text", array()), "html", null, true);
        echo "</button>
                            </div>
                        </div>
                        <hr/>
                        <div class=\"row\">
                            <div class=\"col-md-12\" ng-repeat=\"explain in xp.explications\" ng-show=\"explain.button_b\" >
                                <pre>";
        // line 39
        echo "{{";
        echo " explain.ex_text | unsafe ";
        echo "}}";
        echo "</pre>
                            </div>
                        </div>
                    </div>
                    <div class=\"modal-footer\">
                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    ";
    }

    // line 50
    public function block_footer($context, array $blocks = array())
    {
        // line 51
        echo "        <div class=\"row text-center\" >
            <h3>Au tour des : <strong id=\"currentColor\" >Blanc</strong>  </h3>
        </div>
    ";
    }

    public function getTemplateName()
    {
        return "Echecs/chess1.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 51,  104 => 50,  87 => 39,  78 => 33,  63 => 20,  60 => 19,  46 => 9,  42 => 7,  39 => 6,  34 => 4,  31 => 3,  11 => 1,);
    }
}
