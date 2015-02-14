
<script src="<?php echo Globals::$js ?>app.js" ></script>
<script src="<?php echo Globals::$js; ?>accueil.js" type="text/javascript" ></script>
</head>
<body ng-app="MultiScreen"  ng-init="ms.add_screens()" ng-controller="MultiController as ms" >
    <div ng-controller="TitreController as titreCtrl">
        <header class="text-center" >
            <ul id="path">
                <li ng-repeat="title in titreCtrl.titre" id="ms-nav-parent">
                    <a ng-show="!$last" ng-click="titreCtrl.removeLink(title)" class="ms-nav-link" data-ms-exit-animation="right" data-ms-enter-animation="left" data-ms-horizontal-distance="1000" data-ms-target="{{title.lien}}" href="javascript:void(0)"  > {{title.titre}}</a>
                    <p ng-show="$last" id="last"> {{ title.titre}} </p>
                    <p ng-show="!$last"> > </p>
                </li>
            </ul>
        </header>
        <div>
            <div  ng-repeat="screen in ms.ecrans" class="container ms-container " id="{{ screen.identifiant}}" ng-class="screen.default ? 'ms-default':''"  >
                <div class="content">
                    <ul class="bmenu">
                        <li ng-repeat="link in screen.links">
                            <a class="ms-nav-link" ng-click="link.back ? titreCtrl.removeLink(link) : (link.target === '#' || link.href) ? '':titreCtrl.addLink(link.titre,link.target)" data-ms-target="{{ link.target}}" href="{{ link.href ? link.target:'javascript:void(0)' }}" data-ms-exit-animation="{{ link.back ? 'right':'left' }}" data-ms-enter-animation="{{ link.back ? 'left':'right' }}" data-ms-horizontal-distance ="1000" >
                                <span ng-show="link.back" class="glyphicon glyphicon-chevron-left" ></span> {{ link.titre}}
                            </a>
                        </li>
                    </ul> 
                </div>
            </div>
        </div>

        <footer >
        </footer>
    </div>

</body>
</html>
