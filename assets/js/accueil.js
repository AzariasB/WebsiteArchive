/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('MultiScreen', ['todoApp']);

function link(l_titre, l_target, l_back,l_href) {
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

app.controller('MultiController', ['$http', '$timeout', function($http, $timeout) {
        var that = this;
        this.ecrans = new Array();

        this.add_screens = function() {
            $http.get("assets/json/multiscreen.json").success(function(json) {
                var ms = json['multi_screen'];
                for (var i in ms) {
                    var def = ms[i].default;
                    delete ms[i].default;
                    var screen = new ecran(i, def, that.create_link(ms[i]));
                    that.ecrans.push(screen);
                }
                $timeout(function() {
                    MultiScreen.init();
                }, 1);
            });
        };

        this.create_link = function(mylink) {
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
                }else if(isset(mylink[titre]['Lien'])){
                    console.log('Un lien');
                    href = true;
                    var enplus = 'projects/MonSite';
                    target = "http://" + window.location.host + '/' + enplus + "/" + mylink[titre]['Lien'];
                    console.log(target);
                }
                links.push(new link(titre, target, back,href));
            }
            return links;
        };

    }]);

function isset(value) {
    return typeof value !== 'undefined';
}
