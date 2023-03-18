
/* global Backbone */

//Création de l'arbre



$(function () {
    var Documents = Backbone.View.extend({
        el: "#main",
        events: {
            "submit #search_form": "query",
            "click .jstree-anchor": "displayInfo",
            'click #update_tree' : 'updateTree'
        },
        updateTree : function(){
            mTree.refresh();
        },
        query: function (event) {
            event.preventDefault();
            $('#jsContainer').jstree(true).search($('#word').val());
        },
        displayInfo: function (event) {
            var tar = event.target;
            var node = mTree.get_node(event.target);
            if (mTree.is_leaf(tar) && node.text.indexOf('.php') > -1) {
                //Traiter feuille
                mController.getFileInfo(node);
            } else {
                //Afficher infos sur dossier
                var childs = node.children;
                var names = [];
                for (var i = 0; i < childs.length; i++) {
                    var childNode = mTree.get_node(childs[i]);
                    names.push(childNode.text);
                }
                this.folderInfo(names);
            }
        },
        folderInfo: function (childs) {
            var template = _.template('<h3> Ce dossier contient : </h3><ul class="list-group" > <% _.each(file,function(file){\
%>  <li class="list-group-item" > <%= file %></li><%}); %> </ul> ');
            var infoHtml = template({'file': childs});
            this.changeInformation(infoHtml);
        },
        fileInfo: function (cssContent, jsContent) {
            var template = _.template('<h3> <%= external %> du fichier : </h3><ul class="list-group" > <% _.each(file,function(file){\
%>  <li class="list-group-item" > <%= file %></li><%}); %> </ul> ');
            var infoHtml = template({'external': 'Css', 'file': cssContent}) +
                    template({'external': 'Js', 'file': jsContent});
            this.changeInformation(infoHtml);
        },
        changeInformation: function (nwInfo) {
            var $nwDiv = $('<div/>', {
                'class': 'information'
            }).html(nwInfo);
            var $oldDivs = $("#informations").children();
            $("#informations").append($nwDiv);
            if ($oldDivs.length) {
                var oldInfo = $oldDivs.last().html().split(' ').join('');
                var nwInfo = nwInfo.split(' ').join('');
                if (oldInfo !== nwInfo) {
                    $.each($oldDivs, function (index, el) {
                        var $el = $(el);
                        $el.removeClass('appear');
                        $el.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                            this.remove();
                        });
                    });
                    setTimeout(function () {
                        $nwDiv.addClass('appear');
                    }, 10);
                }
            } else {
                setTimeout(function () {
                    $nwDiv.addClass('appear');
                }, 10);
            }
        },
        launchModal: function (headTitle, inputValue, callBack) {
            $("#head_title").text(headTitle || "");
            $("#input_content").val(inputValue || "");
            $("#form_change").bind("submit", function (event) {
                var inputVal = $("#input_content").val();
                callBack(event, inputVal);
            });
            $("#change").modal();
            $("#change").on("hide.bs.modal", function () {
                $("#form_change").unbind("submit");
            });
            $('#change').on("shown.bs.modal", function () {
                $("#input_content").select();
            });


        },
        confirmModal: function (headTitle, textValue, callBack) {
            $('#confirm_title').text(headTitle || "");
            $('#confirm_text').text(textValue || "");
            $('#confirm_button').bind("click", callBack);
            $("#confirm").on("hide.bs.modal", function () {
                $("#confirm_button").unbind("click");
            });
            $("#confirm").modal();
        },
        showPopup: function (message, error, timeDisplay) {
            timeDisplay = timeDisplay || 2000;
            var secondClass = error ? 'error' : 'success';
            $(".main-message").text(message);
            $(".main-message").addClass('show ' + secondClass);
            setTimeout(function () {
                $(".main-message").removeClass('show').removeClass(secondClass);
            }, timeDisplay);
        },
        hidePromptModal: function () {
            $("#change").modal('hide');
        },
        hideConfirModal: function () {
            $("#confirm").modal('hide');
        }
    });


    $('#jsContainer').jstree({
        "plugins": ["search", "wholerow", "contextmenu", "types"],
        'core': {
            "check_callback": true,
            'data': {
                "url": "/Administration/jsTree",
                "dataType": "json"
            }
        },
        "types": {
            "default": {
                "icon": "glyphicon glyphicon-folder-close"
            },
        },
        "contextmenu": {
            "items": function (node) {
                var tree = $("#jsContainer").jstree(true);
                if (tree.is_leaf(node) && node.text.indexOf('.php') > -1) {
                    return {
                        "add": {
                            "label": "Ajouter...",
                            "action": false,
                            "submenu": {
                                "Css": {
                                    "label": "Css",
                                    "action": function (data) {

                                    }
                                },
                                "Js": {
                                    "label": "Js",
                                    "action": function (data) {

                                    }
                                }
                            }
                        },
                        "Renommer": {
                            /*
                             * 1 - Lancer Modal
                             * 2 - Récupérer nouveau nom
                             * 3 - Changer nom dans l'arbre
                             * 4 - récupérer le path
                             * 4 - Changer nom des fichiers .php et .html.twig
                             */
                            "label": "Renommer",
                            "action": function (data) {
                                var inst = $.jstree.reference(data.reference),
                                        obj = inst.get_node(data.reference);
                                mController.alterName(obj);
                            }
                        },
                        "Supprimer": {
                            "label": "Supprimer",
                            "action": function (data) {
                                var obj = tree.get_node(data.reference);
                                mController.deleteFile(obj);
                            }
                        }
                    };
                } else {
                    return {
                        "Create": {
                            "label": "Créer...",
                            "action": false,
                            "submenu": {
                                "folder": {
                                    "label": "Dossier",
                                    "action": function (data) {
                                        var node = tree.get_node(data.reference);
                                        mController.addFolder(node);
                                    }
                                },
                                "file": {
                                    "label": "Fichier",
                                    "action": function (data) {
                                        var node = tree.get_node(data.reference);
                                        mController.createFile(node);
                                    }
                                }
                            }
                        },
                        "Rename": {
                            "label": "Rename",
                            "action": function (data) {
                                var inst = $.jstree.reference(data.reference),
                                        obj = inst.get_node(data.reference);
                                mController.alterName(obj);
                            }
                        },
                        "Delete": {
                            "label": "Supprimer",
                            "action": function (data) {
                                var obj = tree.get_node(data.reference);
                                mController.deleteFolder(obj);
                            }
                        }
                    };
                }
            }
        }
    }).on("open_node.jstree",function(event,obj){
        $("#jsContainer").jstree(true).set_icon(obj.node,'glyphicon glyphicon-folder-open');
    }).on("close_node.jstree",function(event,obj){
        $("#jsContainer").jstree(true).set_icon(obj.node,'glyphicon glyphicon-folder-close');
    });


    var mDoc = new Documents();
    var mTree = $('#jsContainer').jstree(true);
    var mController = new Controller(mTree, mDoc);
});