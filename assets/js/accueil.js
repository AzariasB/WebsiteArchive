/* 
 * Don't erase the 'todoApp', its useful !
 */


var ITEM = "CurrentScreen";
var LINKS = "links";
var app = angular.module('MultiScreen', ['todoApp']);

function link(l_titre, l_target, l_back, l_href) {
    this.titre = l_titre;
    this.target = l_target;
    this.back = l_back;
    this.href = l_href;
}

function ecran(s_ident, s_def, s_links) {
    this.identifiant = s_ident;
    this.default = s_def;
    this.links = s_links;
}

app.controller('MultiController', ['$http', '$timeout', function ($http, $timeout) {
        var that = this;
        this.ecrans = new Array();


        this.add_screens = function () {
            $http.get("assets/json/multiscreen.json")
                    .success(function (json) {
                        var ms = json['multi_screen'];
                        for (var i in ms) {
                            var def = ms[i].default;
                            delete ms[i].default;
                            var screen = new ecran(i, def, that.create_link(ms[i]));
                            that.ecrans.push(screen);
                        }
                        if (sessionStorage.getItem(ITEM) !== null) {
                            that.setDefault(sessionStorage.getItem(ITEM), 'begin');
                        } else {
                            
                        }
                        $timeout(function () {
                            MultiScreen.init();
                        }, 10);
                    })
                    .error(function (data) {
                        console.log("Erreur :" + data);
                    });
        };

        this.create_link = function (mylink) {
            var links = new Array();
            for (var titre in mylink) {
                var back = false;
                var href = false;
                var target = '';
                if (isset(mylink[titre]['Cible'])) {
                    target = mylink[titre]['Cible'];
                } else if (mylink[titre] === 'NOPE') {
                    target = "#";
                } else if (isset(mylink[titre]['Cible_retour'])) {
                    target = mylink[titre]['Cible_retour'];
                    back = true;
                } else if (isset(mylink[titre]['Lien'])) {
                    href = true;
                    target = "http://" + window.location.host +  "/" + mylink[titre]['Lien'];
                }
                links.push(new link(titre, target, back, href));
            }
            return links;
        };


        this.setDefault = function (myLink, controller) {
            if (typeof myLink === 'string' && controller === 'begin') { // On arrive tout juste
                myLink = JSON.parse(myLink);
                controller = null;
            }

            if (controller !== null && controller !== undefined) {
                myLink.back ? controller.removeLink(myLink) :
                        (myLink.target === '#' || myLink.href) ? '' : controller.addLink(myLink.titre, myLink.target);
                sessionStorage.setItem(LINKS, JSON.stringify(controller.titre));
            }

            if (myLink.target !== "#" && myLink.target.indexOf("http://") === -1) {
                sessionStorage.setItem(ITEM, JSON.stringify(myLink));
                for (var index in this.ecrans) {
                    // console.log("Attendu : " + this.ecrans[index].identifiant + " \t => reçu : " + myLink.target);
                    if (this.ecrans[index].identifiant === myLink.target) {
                        this.ecrans[index].default = true;
                    } else {
                        this.ecrans[index].default = false;
                    }
                }
            } else if (myLink.target.indexOf("http://") !== -1) {
                sessionStorage.setItem(LINKS, JSON.stringify(controller.titre));
            }

        };

        this.initLinks = function (controller) {
            var titres = JSON.parse(sessionStorage.getItem(LINKS));
            controller.titre = [];
            for (var obj in titres) {
                controller.addLink(titres[obj].titre, titres[obj].lien);
            }
            console.log(controller.getTitre());
        };

    }]);

function isset(value) {
    return typeof value !== 'undefined';
}
