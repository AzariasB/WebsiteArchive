<?php

/* accueil.html.twig */
class __TwigTemplate_6326eb26bd481c1c6f3ca57016ffda60e3e6fd5f467c2e25ad34b748099fd235 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "accueil.html.twig", 1);
        $this->blocks = array(
            'body_definition' => array($this, 'block_body_definition'),
            'head' => array($this, 'block_head'),
            'main_part' => array($this, 'block_main_part'),
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
        echo "    <body ng-app=\"todoApp\" ng-controller=\"TitreController as titreCtrl\" >
    ";
    }

    // line 7
    public function block_head($context, array $blocks = array())
    {
        // line 8
        echo "        <header class=\"text-center\">
            <ul id=\"path\">
                <li ng-repeat=\"title in titreCtrl.titre\" id=\"ms-nav-parent\">
                    <a ng-show=\"!\$last\" ng-click=\"titreCtrl.removeLink(title)\" class=\"ms-nav-link\" data-ms-exit-animation=\"right\" data-ms-enter-animation=\"left\" data-ms-horizontal-distance=\"1000\" data-ms-target=\"";
        // line 11
        echo "{{";
        echo "title.lien";
        echo "}}";
        echo "\" href=\"javascript:void(0)\">";
        echo "{{";
        echo "title.titre";
        echo "}}";
        echo "</a>
                    <p ng-show=\"\$last\" id=\"last\">";
        // line 12
        echo "{{";
        echo " title.titre ";
        echo "}}";
        echo " </p>
                    <p ng-show=\"!\$last\"> > </p>
                </li>
            </ul>
        </header>
    ";
    }

    // line 19
    public function block_main_part($context, array $blocks = array())
    {
        // line 20
        echo "        ";
        $context["multiS_right"] = " data-ms-exit-animation=\"left\" data-ms-enter-animation=\"right\" data-ms-horizontal-distance=\"1000\" href=\"javascript:void(0)\"";
        // line 21
        echo "        ";
        $context["multiS_back"] = " data-ms-exit-animation = \"right\" data-ms-enter-animation = \"left\" data-ms-horizontal-distance = \"1000\" href=\"javascript:void(0)\" ";
        // line 22
        echo "        ";
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["screens"]) ? $context["screens"] : null));
        foreach ($context['_seq'] as $context["key"] => $context["value"]) {
            // line 23
            echo "            ";
            if (($context["key"] == "accueil")) {
                // line 24
                echo "                <div id=\"";
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo "\" class=\"ms-container ms-default container\" >
                ";
            } else {
                // line 26
                echo "                    <div id=\"";
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo "\" class=\"ms-container container\" >
                    ";
            }
            // line 28
            echo "                    <div class=\"content\" >
                        <ul class=\"bmenu\" >
                            ";
            // line 30
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable($context["value"]);
            foreach ($context['_seq'] as $context["titre"] => $context["cible"]) {
                // line 31
                echo "                                ";
                if (twig_template_get_attributes($this, $context["cible"], "Cible", array(), "any", true, true)) {
                    // line 32
                    echo "                                    ";
                    $context["onclick"] = ((((" ng-click=\"titreCtrl.addLink('" . $context["titre"]) . "','") . twig_template_get_attributes($this, $context["cible"], "Cible", array())) . "');\" ");
                    // line 33
                    echo "                                    <li><a class=\"ms-nav-link\" data-ms-target=\"";
                    echo twig_escape_filter($this->env, twig_template_get_attributes($this, $context["cible"], "Cible", array()), "html", null, true);
                    echo "\" ";
                    echo (isset($context["multiS_right"]) ? $context["multiS_right"] : null);
                    echo " ";
                    echo (isset($context["onclick"]) ? $context["onclick"] : null);
                    echo " >";
                    echo twig_escape_filter($this->env, $context["titre"], "html", null, true);
                    echo "</a></li>
                                    ";
                } elseif (twig_template_get_attributes($this,                 // line 34
$context["cible"], "Cible_retour", array(), "any", true, true)) {
                    // line 35
                    echo "                                        ";
                    $context["remove"] = " ng-click=\"titreCtrl.removeLink(1);\" ";
                    // line 36
                    echo "                                    <li><a class='ms-nav-link' data-ms-target=\"";
                    echo twig_escape_filter($this->env, twig_template_get_attributes($this, $context["cible"], "Cible_retour", array()), "html", null, true);
                    echo "\" ";
                    echo (isset($context["multiS_back"]) ? $context["multiS_back"] : null);
                    echo " ";
                    echo (isset($context["remove"]) ? $context["remove"] : null);
                    echo "\" ><span class=\"glyphicon glyphicon-chevron-left\" ></span>";
                    echo twig_escape_filter($this->env, $context["titre"], "html", null, true);
                    echo "</a></li>
                                        ";
                } elseif (twig_template_get_attributes($this,                 // line 37
$context["cible"], "Lien", array(), "any", true, true)) {
                    // line 38
                    echo "                                    <li><a href=\"";
                    echo twig_escape_filter($this->env, twig_template_get_attributes($this, $context["cible"], "Lien", array()), "html", null, true);
                    echo "\">";
                    echo twig_escape_filter($this->env, $context["titre"], "html", null, true);
                    echo "</a></li>
                                    ";
                } else {
                    // line 40
                    echo "                                        ";
                    $context["remove"] = " ng-click=\"titreCtrl.removeLink(1);\" ";
                    // line 41
                    echo "                                    <li><a class=\"ms-nav-link\" data-ms-target=\"accueil\" ";
                    echo twig_escape_filter($this->env, (isset($context["multiS_back"]) ? $context["multiS_back"] : null), "html", null, true);
                    echo " ";
                    echo (isset($context["remove"]) ? $context["remove"] : null);
                    echo " ><span class=\"glyphicon glyphicon-chevron-left\" ></span> </a></li>
                                    ";
                }
                // line 43
                echo "                                ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['titre'], $context['cible'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 44
            echo "                        </ul>
                    </div>
                </div>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 48
        echo "        ";
    }

    public function getTemplateName()
    {
        return "accueil.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  174 => 48,  165 => 44,  159 => 43,  151 => 41,  148 => 40,  140 => 38,  138 => 37,  127 => 36,  124 => 35,  122 => 34,  111 => 33,  108 => 32,  105 => 31,  101 => 30,  97 => 28,  91 => 26,  85 => 24,  82 => 23,  77 => 22,  74 => 21,  71 => 20,  68 => 19,  56 => 12,  46 => 11,  41 => 8,  38 => 7,  33 => 4,  30 => 3,  11 => 1,);
    }
}
