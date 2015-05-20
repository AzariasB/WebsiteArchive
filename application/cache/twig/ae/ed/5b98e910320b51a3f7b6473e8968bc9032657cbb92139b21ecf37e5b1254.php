<?php

/* base.html.twig */
class __TwigTemplate_aeed5b98e910320b51a3f7b6473e8968bc9032657cbb92139b21ecf37e5b1254 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'body' => array($this, 'block_body'),
            'footer' => array($this, 'block_footer'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!Doctype html>
<html>
    <head>
        <title>";
        // line 4
        echo twig_escape_filter($this->env, (isset($context["titre"]) ? $context["titre"] : null), "html", null, true);
        echo "</title>
        ";
        // line 5
        echo twig_escape_filter($this->env, load_css(), "html", null, true);
        echo "
        ";
        // line 6
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
        // line 19
        echo twig_escape_filter($this->env, images(), "html", null, true);
        echo "icons/icon_512.png\" />

        <script LANGUAGE=\"JavaScript\" type=\"text/javascript\">\$(document).ready(function () {
                MultiScreen.init();
            });</script>
    </head>
    <body>
        <header class=\"text-center\">
            ";
        // line 27
        $this->displayBlock('head', $context, $blocks);
        // line 32
        echo "        </header>
        <div>
            ";
        // line 34
        $this->displayBlock('body', $context, $blocks);
        // line 39
        echo "        </div>
        <footer>
            ";
        // line 41
        $this->displayBlock('footer', $context, $blocks);
        // line 50
        echo "        </footer>
    </body>
</html>
";
    }

    // line 27
    public function block_head($context, array $blocks = array())
    {
        // line 28
        echo "            <h1>
                Bienvenue sur Azarias.com
            </h1>
            ";
    }

    // line 34
    public function block_body($context, array $blocks = array())
    {
        // line 35
        echo "            <div class=\"text-center col-xs-12\" >
                <h2>Ici, c'est le corps</h2>
            </div>
            ";
    }

    // line 41
    public function block_footer($context, array $blocks = array())
    {
        // line 42
        echo "            <div class=\"row text-center\">
                <ul>
                    <li><a href=\"";
        // line 44
        echo twig_escape_filter($this->env, site_url("Contact"), "html", null, true);
        echo " \" >Contact</a></li>
                    <li> - </li>
                    <li><a href=\"";
        // line 46
        echo twig_escape_filter($this->env, site_url("A_propos"), "html", null, true);
        echo "\" >A propos</a></li>
                </ul>
            </div>
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
        return array (  115 => 46,  110 => 44,  106 => 42,  103 => 41,  96 => 35,  93 => 34,  86 => 28,  83 => 27,  76 => 50,  74 => 41,  70 => 39,  68 => 34,  64 => 32,  62 => 27,  51 => 19,  35 => 6,  31 => 5,  27 => 4,  22 => 1,);
    }
}
