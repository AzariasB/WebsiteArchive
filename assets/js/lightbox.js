/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    $('img').click(function() {
        var img = $('<img/>')
                .attr("src",$(this).attr("src"));
        img
                .css("cursor", "default")
                .css("z-index", "999")
                .css("height","auto")
                .css("width","auto")
                .css("display","block")
                .css("margin-left","auto")
                .css("margin-right","auto")
                .css("margin-top","12vh")
                .css("max-height","75vh");
        //img.addClass("img-thumbnail");
        var div = $('<div/>')
                .css("position", "absolute")
                .css("display","table-cell")
                .css("vertical-align","middle")
                .css("background-color", "rgba(0,0,0,0.6")
                .css("height", "100vh")
                .css("width", "100%")
                .css("top", "0")
                .css("left", "0")
                .css("display", "none");
        div.append(img);
        div.click(function() {
            div.fadeOut(function() {
                div.remove();
            });

        });
        $('body').append(div);
        div.fadeIn();
    });

});
