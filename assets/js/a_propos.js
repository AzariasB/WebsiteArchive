/*
 * Charger les données sur la page
 */

$(document).ready(function () {
    // Appel pour récupérer le json
    var middl = $('#middled');
    var side = $('#scroll_position');
    var path = 'http://' + window.location.host + window.location.pathname + '/get_a_propos';
    console.log(path);
    $.ajax({
        url: path,
        type: 'POST',
        success: function (data) {
            console.log(data);
            display_Infos(data);
            add_listeners();
        },
        error : function(erreur){
            console.log(erreur);
        }
    });

    function display_Infos(datas) {
        //Ici, on céé tout le contenu du document
        var blocks = JSON.parse(datas).blocs;
        for (var bloc in blocks) {
            var obj = blocks[bloc];
            var m_h1 = $('<h1/>') // Titre du milieu
                    .attr({id: obj.id + "_title"})
                    .text(obj.titre);

            middl.append(m_h1);
            var m_h3 = $('<h3/>') // Titre latéral
                    .attr({id: obj.id + "_scroll"})
                    .text(obj.titre);
            side.append(m_h3);

            var parties = obj.parties;
            var under_titre = $('<div/>');
            for (var part in parties) {
                var partie = parties[part];
                var m_h2 = $("<h2/>") // Sous-titre du milieu
                        .html(part);
                middl.append(m_h2);

                var m_h4 = $('<h4/>') // Sous-titre latéral
                        .html(part);
                under_titre.append($('<div/>').append(m_h4));

                var texte = $('<p/>') // Texte
                        .html(partie);
                middl.append(texte);
            }
            side.append(under_titre);
        }

    }


    var index_e = 0;
    var scroll_pos = 0;
    var noms;
    var titres;

    function add_listeners() {
        noms = get_noms(side);
        titres = get_titres();
        for (var nom in noms) {
            var obj = noms[nom];
            add_Clicklistener(obj);
        }
        active_the_one();
    }


    middl.scroll(function () {
        var st = $(this).scrollTop();
        if (st > scroll_pos) {
            //On descend
            if (index_e < titres.length - 1 && $(titres[index_e + 1]).position().top <= 0) {
                set_unactive(noms[index_e]);
                index_e++;
                set_active(noms[index_e]);
            }
        } else {
            //On monte
            if (index_e > 0 && $(titres[index_e]).position().top > 0) {
                set_unactive(noms[index_e]);
                index_e--;
                set_active(noms[index_e]);
            }
        }
        scroll_pos = st;
    });

    function active_the_one() {
        //Si hash, alors on va là où on nous le demande
        for (var titre in noms) {
            if (location.hash) {
                var hash = location.hash.replace('#', '');
                var id = $(noms[titre]).attr('id').replace('_scroll', '');
                if (id === hash) {
                    set_active(noms[titre]);
                    index_e = titre;
                    var scrollps = middl.scrollTop();
                    var pos = $(titres[index_e]).position().top + scrollps;
                    middl.animate({scrollTop: pos}, 800);
                } else {
                    set_unactive(noms[titre]);
                }
            } else {
                if (titre > 0) {
                    set_unactive(noms[titre]);
                }
            }
        }
    }

    function set_active(object) {
        try {
            $(object).css('border', '5px solid black').css('cursor', 'default');
            $(object).hover(function () {
                $(this).css('border', '5px solid black');
            });
            $(object).next().show('fast');
        } catch (ex) {
            console.log(ex);
        }
    }

    function set_unactive(object) {
        try {
            $(object).css('border', '5px solid transparent').css('cursor', 'pointer');
            $(object).hover(function (e) {
                if (e.type === 'mouseenter') {
                    $(this).css('border', '5px solid grey');
                } else if (e.type === 'mouseleave') {
                    $(this).css('border', '5px solid transparent');
                }
            });
            $(object).next().hide('fast');
        } catch (ex) {
            console.log(ex);
        }
    }


    function add_Clicklistener(element) {
        $(element).click(function () {
            set_unactive(noms[index_e]);
            index_e = noms.indexOf(element);
            var scrollps = middl.scrollTop();
            set_active(noms[index_e]);
            var pos = $(titres[index_e]).position().top + scrollps;
            middl.animate({scrollTop: pos}, 800);
            location.hash = encodeURI($(element).attr('id').replace('_scroll', ''));
        });
    }

    function get_noms(side_div) {
        var noms = [];
        $('#' + side_div.attr('id')).find('h3').each(function () {
            noms.push($(this)[0]);
        });
        return noms;
    }

    function get_titres() {
        var titres = [];
        $(document).find('h1').each(function () {
            if ($(this).attr('id')) {
                titres.push($(this)[0]);
            }
        });
        return titres;
    }
});

