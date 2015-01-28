/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var ms_exit = " data-ms-exit-animation";
ms_enter = " data-ms-enter-animation";
ms_target = " data-ms-target";
ms_class = " ms-nav-link ";

$(function() {


    var ms_horizontal = " data-ms-horizontal-distance";
    try {
        $.getJSON("assets/js/morse_expllication.json", function(json) {
            var ms = json['multi_screen'];
            for (var i in ms) {
                create_container(ms[i], i);
            }
        });
    } catch (ex) {
        console.error(ex);
    }



    function create_container(container, myname) {
        var div = $('<div/>')
                .addClass('ms-container container');
        var ul = $('<ul/>')
                .addClass('bmenu');
        div.append($('<div/>')
                .addClass('content')
                .append(ul));
        if (isset(container['default']) && container['default']) {
            div.addClass('ms-default');
            delete container['default'];
        }
        var li = create_li(container, myname);
        ul.append(li);
        $('body').append(div);
    }

    function create_li(li_array, me) {
        var li = $('<li/>');
        for (var obj in li_array) {
            if (li_array[obj] === "NOPE") {
                li.append($('<a/>')
                        .attr("href", "javascript:void(0)"));
            } else {
                if (isobj(li_array[obj])) {
                    //.attr({ms_horizontal: '1000'});
                    //Il s'agit d'un objet
                    var objet = li_array[obj];
                    if (isset(objet["Cible"])) {
                        var a = $('<a/>', {
                            'class': ms_class,
                            "data-ms-enter-animation": "right",
                            "data-ms-exit-animation":"left",
                            "ng-clik":"titreCtrl.addLink('"+me+"','"+me+"')"
                        });
                        li.append(a);
                    } else if (isset(objet["Cible_retour"])) {
                        console.log('Coucou');
                    } else if (isset(objet["Lien"])) {
                        console.log("Recoucou");
                    } else {
                        console.log("Erreur");
                    }
                } else {
                    //Si on a pas un objet...
                    console.error("Nope");
                }
            }
        }
        return li;
    }

    function isset(value) {
        return typeof value !== "undefined";
    }

    function isobj(value) {
        return typeof value === "object";
    }
});
