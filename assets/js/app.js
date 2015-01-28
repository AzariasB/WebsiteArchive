var app = angular.module('todoApp', []);

function titre_lien(titre, lien) {
    this.titre = titre;
    this.lien = lien;
}

app.controller('TitreController', function() {
    this.titre = new Array(new titre_lien('Accueil', 'accueil'));

    this.removeLink = function(lien) {
        if (typeof lien === 'object') {
            this.titre.splice(this.titre.indexOf(lien) + 1, this.titre.length - this.titre.indexOf(lien));
        } else if (typeof lien === 'string') {
            for (titrel in this.titre) {
                if (titrel.lien === lien) {
                    this.titre.splice(this.titre.indexOf(titrel), this.titre.length - this.titre.indexOf(titrel));
                    break;
                }
            }
        } else {
            this.titre.splice(this.titre.length - 1, lien);
        }
        if (this.titre.length === 0) {
            this.titre.push(new titre_lien('Accueil', 'accueil'));
        }

    };

    this.addLink = function(titre, lien) {
        this.titre.push(new titre_lien(titre, lien));
    };

});

