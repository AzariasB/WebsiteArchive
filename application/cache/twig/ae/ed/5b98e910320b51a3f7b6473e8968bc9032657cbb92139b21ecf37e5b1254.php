<?php

/* base.html.twig */
class __TwigTemplate_aeed5b98e910320b51a3f7b6473e8968bc9032657cbb92139b21ecf37e5b1254 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'body_definition' => array($this, 'block_body_definition'),
            'head' => array($this, 'block_head'),
            'main_part' => array($this, 'block_main_part'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!Doctype html>
<html>
    <head>
        <title>
            ";
        // line 5
        echo twig_escape_filter($this->env, ((array_key_exists("titre", $context)) ? ((isset($context["titre"]) ? $context["titre"] : null)) : ("Azarias")), "html", null, true);
        echo "   
        </title>
        ";
        // line 7
        echo twig_escape_filter($this->env, load_css(), "html", null, true);
        echo "
        ";
        // line 8
        echo twig_escape_filter($this->env, load_javascript(), "html", null, true);
        echo "
        <meta charset=\"utf-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <meta HTTP-EQUIV=\"CONTENT-LANGUAGE\" CONTENT=\"fr\">
        <meta HTTP-EQUIV=\"CONTENT-TYPE\" CONTENT=\"text/html; charset=iso-8859-1\">
        <meta name=\"DESCRIPTION\" CONTENT=\"Apprentissage, codage, cryptage, timelapses, projets scolaire\">
        <meta name=\"KEYWORDS\" CONTENT=\"Morse, Sémaphore, Cryptage\">
        <meta name=\"ROBOTS\" CONTENT=\"INDEX,FOLLOW\">
        <meta name=\"REVISIT-AFTER\" CONTENT=\"15days\">
        <meta name=\"IDENTIFIER-URL\" CONTENT=\"http://http://azarias.byethost12.com/\">
        <meta name=\"AUTHOR\" CONTENT=\"Azarias\">
        <meta name=\"REPLY-TO\" CONTENT=\"***REMOVED***\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <link rel=\"icon\"  href=\"";
        // line 21
        echo twig_escape_filter($this->env, images(), "html", null, true);
        echo "icons/icon_512.png\" />

        <script LANGUAGE=\"JavaScript\" type=\"text/javascript\">\$(document).ready(function () {
                MultiScreen.init();
            });</script>
    </head>
    ";
        // line 27
        $this->displayBlock('body_definition', $context, $blocks);
        // line 30
        echo "        ";
        $this->displayBlock('head', $context, $blocks);
        // line 37
        echo "        ";
        $this->displayBlock('main_part', $context, $blocks);
        // line 42
        echo "        ";
        $this->displayBlock('footer', $context, $blocks);
        // line 53
        echo "    </body>
</html>
";
    }

    // line 27
    public function block_body_definition($context, array $blocks = array())
    {
        // line 28
        echo "        <body>
        ";
    }

    // line 30
    public function block_head($context, array $blocks = array())
    {
        // line 31
        echo "            <header class=\"text-center\">
                <h1>
                    Bienvenue sur Azarias.com
                </h1>
            </header>
        ";
    }

    // line 37
    public function block_main_part($context, array $blocks = array())
    {
        // line 38
        echo "            <div class=\"text-center col-xs-12\" >
                <h2>Ici, c'est le corps</h2>
            </div>
        ";
    }

    // line 42
    public function block_footer($context, array $blocks = array())
    {
        // line 43
        echo "            <footer>
                <div class=\"row text-center\">
                    <ul>
                        <li><a href=\"";
        // line 46
        echo twig_escape_filter($this->env, site_url("Contact"), "html", null, true);
        echo " \" >Contact</a></li>
                        <li> - </li>
                        <li><a href=\"";
        // line 48
        echo twig_escape_filter($this->env, site_url("A_propos"), "html", null, true);
        echo "\" >A propos</a></li>
                    </ul>
                </div>
            </footer>
        ";
    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  123 => 48,  118 => 46,  113 => 43,  110 => 42,  103 => 38,  100 => 37,  91 => 31,  88 => 30,  83 => 28,  80 => 27,  74 => 53,  71 => 42,  68 => 37,  65 => 30,  63 => 27,  54 => 21,  38 => 8,  34 => 7,  29 => 5,  23 => 1,);
    }
}
