<?php

/* contact.html.twig */
class __TwigTemplate_d50ace0c437c05a8f6b73196dca2f1f5f0413e8b17228c97d23c093b44d4ea24 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "contact.html.twig", 1);
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
        echo "    <header class=\"text-center\" >
        <h1>Contact</h1>
    </header>
";
    }

    // line 8
    public function block_main_part($context, array $blocks = array())
    {
        // line 9
        echo "    <div class=\"container-fluid\">
        <div class=\"row\">
            <div class=\"col-md-6 col-xs-offset-0 col-sm-offset-3 text-center\">
                <pre>Vous pouvez m'envoyer un mail via le formulaire suivant.
Ou à mon adresse orange : <strong><u>***REMOVED***</u></strong>
N'oubliez pas de laisser des coordonnées valide pour que je puisse vous recontacter</pre>
            </div>
        </div>
        <br/>
        ";
        // line 18
        echo twig_escape_filter($this->env, validation_errors(), "html", null, true);
        echo "
        ";
        // line 19
        echo form_open(site_url("Contact/message"), array("class" => "form-horiztonal text-center"));
        echo "
        <!--        <form class=\"form-horizontal text-center\" method=\"POST\" action=\"<?php echo site_url(\"Contact/message\"); ?>\" >-->
        <div class=\"row\">
            <label for=\"nom\" class=\"col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2\">Votre nom</label>
            <div class=\"col-sm-6 col-xs-10\">
                <input type=\"text\" class=\"form-control\" name=\"nom_u\" value=\"";
        // line 24
        echo twig_escape_filter($this->env, set_value("nom_u"), "html", null, true);
        echo "\" required=\"\" id=\"nom\" />
            </div>
        </div>
        <br/>
        <div class=\"row\">
            <label for=\"mail\" class=\"col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2\">Votre e-mail</label>
            <div class=\"col-sm-6 col-xs-10\">
                <input id=\"mail\" type=\"email\" name=\"mail\" value=\"";
        // line 31
        echo twig_escape_filter($this->env, set_value("mail"), "html", null, true);
        echo "\" class=\"form-control col-md-5\" required=\"\" />
            </div>
        </div>
        <br/>
        <div class=\"row\">
            <label for=\"objet\" class=\"col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2\">Objet</label>
            <div class=\"col-sm-6 col-xs-10\">
                <input id=\"objet\" type=\"text\" name=\"objet\" value=\"";
        // line 38
        echo twig_escape_filter($this->env, set_value("objet"), "html", null, true);
        echo "\" class=\"form-control col-md-5\" required=\"\" />
            </div>
        </div>
        <br/>
        <div class=\"row\">
            <label for=\"message\" class=\"col-sm-2 col-sm-offset-1 col-xs-offset-0 col-xs-2\">Votre message</label>
            <div class=\"col-sm-6 col-xs-10\">
                <textarea class=\"form-control\" rows=\"7\" name=\"message\" maxlength=\"500\" id=\"message\" required=\"\" >";
        // line 45
        echo twig_escape_filter($this->env, set_value("message"), "html", null, true);
        echo "</textarea>
            </div>
        </div>
        <br/>
        <div class=\"row\">
            <div class=\"col-xs-10 col-sm-6 col-xs-offset-2 col-sm-offset-3\">
                <button type=\"submit\" class=\"btn btn-success col-xs-5\"><span class=\"glyphicon glyphicon-envelope\"></span> Envoyer</button>
                <button type=\"reset\" class=\"btn btn-danger col-xs-5 col-xs-offset-2\">Effacer</button>
            </div>
        </div>
    </form>
</div>
";
    }

    // line 58
    public function block_footer($context, array $blocks = array())
    {
        // line 59
        echo "    <footer>
        <div class=\"row\">
            <div class=\"col-sm-4 col-xs-12\">
                <a class=\"col-xs-12 btn btn-default\" href=\"";
        // line 62
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" ><span class=\"glyphicon glyphicon-chevron-left\"></span>Accueil</a>
            </div>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "contact.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  121 => 62,  116 => 59,  113 => 58,  96 => 45,  86 => 38,  76 => 31,  66 => 24,  58 => 19,  54 => 18,  43 => 9,  40 => 8,  33 => 4,  30 => 3,  11 => 1,);
    }
}
