<?php

/* a_propos.html.twig */
class __TwigTemplate_4cf6097f4df0a703bb8bcb010e064f08fa9465ab3739fc678fbff77658be5271 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "a_propos.html.twig", 1);
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
        <h1>A propos</h1>
    </header>
";
    }

    // line 8
    public function block_main_part($context, array $blocks = array())
    {
        // line 9
        echo "    <div class=\"container-fluid text-center\" id=\"content\">
        <div class=\"row\">
            <div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0  text-left\" id=\"middled\">
            </div>
            <div id=\"scroll_position\" class=\"col-sm-2 text-center hidden-sm hidden-xs \"  >
            </div>
        </div>
    </div>
";
    }

    // line 18
    public function block_footer($context, array $blocks = array())
    {
        // line 19
        echo "    <footer>
        <div class=\"row\">
            <a href=\"";
        // line 21
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-default col-sm-3 col-xs-5 \"><span class=\"glyphicon glyphicon-chevron-left\"></span> Accueil</a>
            <a href=\"";
        // line 22
        echo twig_escape_filter($this->env, site_url("Contact"), "html", null, true);
        echo "\" class=\"btn btn-default col-sm-offset-6 col-sm-3 col-xs-5 col-xs-offset-2 \" ><span class=\"glyphicon glyphicon-envelope\"></span> Me contacter </a>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "a_propos.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 22,  62 => 21,  58 => 19,  55 => 18,  43 => 9,  40 => 8,  33 => 4,  30 => 3,  11 => 1,);
    }
}
