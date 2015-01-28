

$(document).ready(function() {
    var middl = $('#middled');
    var console_scroll = $('#scroll_position');
    var childs = $('#subdir');
    var noms = get_titles(middl);
    var referent = new Array();
    var child_list = get_childrens(noms[0]);



    for (nom in noms) {
        var titre = "#" + noms[nom];
        noms[nom] = $(titre);
        child_list.push(get_childrens(noms[nom]));
        referent[nom] = $('<h3/>')
                .attr('id', noms[nom].text() + '_scroll')
                .addClass('text-center col-md-12').css('border', '5px solid transparent')
                .append(noms[nom].text());
        console_scroll.append(referent[nom]);
        add_childs_toDom(referent[nom], child_list[nom]);
        if (nom > 0) {
            set_unactive(referent[nom]);
            $(referent[nom]).next().hide();
        }
        add_Clicklistener(referent[nom]);
    }

    var index_e = 0;
    var scroll_pos = 0;
    set_active(referent[index_e]);


    middl.scroll(function() {
        var st = $(this).scrollTop();
        if (st > scroll_pos) {
            //On descend
            if (index_e < noms.length - 1 && noms[index_e + 1].position().top <= 0) {
                set_unactive(referent[index_e]);
                index_e++;
                set_active(referent[index_e]);
            }
        } else {
            //On monte
            if (index_e > 0 && noms[index_e].position().top > 0) {
                set_unactive(referent[index_e]);
                index_e--;
                set_active(referent[index_e]);
            }
        }
        scroll_pos = st;
    });

    function set_active(object) {
        try {
            $(object).css('border', '5px solid black').css('cursor', 'default');
            $(object).hover(function() {
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
            $(object).hover(function(e) {
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

    function get_childrens(father) {
        var ul = $(father).next();
        var childrens = new Array();
        ul.children("li").each(function() {
            childrens.push($(this).children("h2").text());
        });
        return childrens;
    }

    function get_titles(middle_div) {
        var titres = new Array();
        middle_div.children("h2").each(function() {
            titres.push($(this).attr("id"));
        });
        return titres;
    }

    function add_childs_toDom(father, sons) {
        var mydiv = $('<div/>');
        mydiv.addClass('col-md-offset-1 col-md-11 text-left');
        for (var son in sons) {
            mydiv.append($('<h4/>').append(sons[son]));
        }
        father.after(mydiv);
    }

    function add_Clicklistener(element) {
        $(element).click(function() {
            set_unactive(referent[index_e]);
            index_e = referent.indexOf(element);
            var scrollps = middl.scrollTop();
            set_active(referent[index_e]);
            var pos = noms[index_e].position().top + scrollps;
            middl.animate({scrollTop:pos}, 800);
        });
    }
});

