<?php

/* Scolaire/CowGow.html.twig */
class __TwigTemplate_fe5da04166d508fe6b00d37619f25ff04c313a646d820cc83565d7feb35f3c0e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "Scolaire/CowGow.html.twig", 1);
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
            <a href=\"http://cowgow.byethost7.com/\" target=\"_blank\">
                CowGow 
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
                Ce site est factice !<br/>
                Il a été réalisé par un groupe de 6 étudiant dont je faisais partie.
                Il n'y a aucun but commercial derrière celui-ci.<br/>
                Vous pouvez y accéder en cliquant sur le titre ci-dessus, ou en cliquant sur le lien ci-après :
                <a target=\"_blank\" href=\"http://cowgow.byethost7.com/\">http://cowgow.byethost7.com</a>
                Le but du projet était de réaliser un site de vente de voyages en ligne.<img class=\"wrap-left\" src=\"";
        // line 21
        echo twig_escape_filter($this->env, (images() . "Projets/CowGow.jpg"), "html", null, true);
        echo "\" />
                Nous n'avons pas eu le temps de complètement finir tout le site.<br/>
                Seules les pages les plus importantes ont été faites. L'inscription fonctionne normalement.
                Vous pouvez vous connecter directement après vous être inscrit.<br/>
                Pour développer ce site, nous avons utilisé CodeIgniter et Bootstrap.
                Nous ne connaissions pas encore très bien le javascript et jQuery, donc nous n'avons pas utilisé de framework javascript.<br/>
                Si le site avait été complètement finis, vous auriez pu ajouter des services à votre panier, ou créer un pack, commenter les packs créé,
                changer vos options utilisateurs,partager vos photos. Et pour les services proposés, nous avons pensé à un système de partenariat avec des particuliers ou des entreprises
                Ainsi, il postaient leurs annonces sur le site et ces annonces étaient affichées dans la liste des services.<br/>
                Après ce projet, nous avons eu une semaine pour vendre ce site.<br/>
                Une semaine de marketing. A la fin de cette semaine, devant toute la promo de l'IUT, nous avons effectué un pitch (discours de moins d'une minute)
                Et nous nous nous sommes appuyés sur un prezi pour la suite de la présentation
            </p>
        </div>
    </div>
";
    }

    // line 37
    public function block_footer($context, array $blocks = array())
    {
        // line 38
        echo "    <footer>
        <div class=\"row\">
            <div class=\"col-sm-6 col-xs-12\">
                <a href=\"";
        // line 41
        echo twig_escape_filter($this->env, site_url("Accueil"), "html", null, true);
        echo "\" class=\"btn btn-default col-md-6\" ><span class=\"glyphicon glyphicon-chevron-left\"></span>Accueil</a>
            </div>
        </div>
    </footer>
";
    }

    public function getTemplateName()
    {
        return "Scolaire/CowGow.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  85 => 41,  80 => 38,  77 => 37,  57 => 21,  47 => 13,  44 => 12,  33 => 4,  30 => 3,  11 => 1,);
    }
}
