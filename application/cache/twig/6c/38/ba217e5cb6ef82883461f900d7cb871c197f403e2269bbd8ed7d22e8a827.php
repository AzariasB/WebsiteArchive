<?php

/* test.html.twig */
class __TwigTemplate_6c38ba217e5cb6ef82883461f900d7cb871c197f403e2269bbd8ed7d22e8a827 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 2
        $this->parent = $this->loadTemplate("base.html.twig", "test.html.twig", 2);
        $this->blocks = array(
            'head' => array($this, 'block_head'),
            'body_definition' => array($this, 'block_body_definition'),
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

    // line 4
    public function block_head($context, array $blocks = array())
    {
        // line 5
        echo "    <style>
        body{
            overflow-x: hidden;
        }
    </style>
";
    }

    // line 12
    public function block_body_definition($context, array $blocks = array())
    {
        // line 13
        echo "    <body ng-app=\"MultiScreen\"  ng-init=\"ms.add_screens()\" ng-controller=\"MultiController as ms\" >
    ";
    }

    // line 15
    public function block_main_part($context, array $blocks = array())
    {
        // line 16
        echo "        <div ng-controller=\"TitreController as titreCtrl\" ng-init=\"ms.initLinks(titreCtrl)\" >
            <header class=\"text-center\" >
                <ul id=\"path\">
                    <li ng-repeat=\"title in titreCtrl.titre\" id=\"ms-nav-parent\">
                        <a ng-show=\"!\$last\" ng-click=\"titreCtrl.removeLink(title)\" class=\"ms-nav-link\" data-ms-exit-animation=\"right\" data-ms-enter-animation=\"left\" data-ms-horizontal-distance=\"1000\" data-ms-target=\"";
        // line 20
        echo "{{";
        echo " title.lien ";
        echo "}}";
        echo "\" href=\"javascript:void(0)\"  > ";
        echo "{{";
        echo " title.titre ";
        echo "}}";
        echo "</a>
                        <p ng-show=\"\$last\" id=\"last\"> ";
        // line 21
        echo "{{";
        echo "  title.titre ";
        echo "}}";
        echo " </p>
                        <p ng-show=\"!\$last\"> > </p>
                    </li>
                </ul>
            </header>
            <div>
                <div  ng-repeat=\"screen in ms.ecrans\" class=\"container ms-container \" id=\"";
        // line 27
        echo "{{";
        echo " screen.identifiant ";
        echo "}}";
        echo "\" ng-class=\"screen.default ? 'ms-default':''\"  >
                    <div class=\"content\">
                        <ul class=\"bmenu\">
                            <li ng-repeat=\"link in screen.links\">
                                <a class=\"ms-nav-link\"
                                   ng-click=\"ms.setDefault(link, titreCtrl)\"
                                   data-ms-target=\"";
        // line 33
        echo "{{";
        echo " link.target";
        echo "}}";
        echo "\"
                                   href=\"";
        // line 34
        echo "{{link.href ? link.target:'javascript:void(0)' }}";
        echo "\"
                                   data-ms-exit-animation=\"";
        // line 35
        echo "{{";
        echo " link.back ? 'right':'left' ";
        echo "}}";
        echo "\"
                                   data-ms-enter-animation=\"";
        // line 36
        echo "{{";
        echo " link.back ? 'left':'right' ";
        echo "}}";
        echo "\"
                                   data-ms-horizontal-distance =\"1000\" >
                                    <span ng-show=\"link.back\" class=\"glyphicon glyphicon-chevron-left\" ></span> ";
        // line 38
        echo "{{";
        echo " link.titre ";
        echo "}}";
        echo "
                                </a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
        ";
    }

    public function getTemplateName()
    {
        return "test.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 38,  107 => 36,  101 => 35,  97 => 34,  91 => 33,  80 => 27,  69 => 21,  59 => 20,  53 => 16,  50 => 15,  45 => 13,  42 => 12,  33 => 5,  30 => 4,  11 => 2,);
    }
}
