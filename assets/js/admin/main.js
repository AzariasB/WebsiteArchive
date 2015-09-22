
/* global Backbone */

//Création de l'arbre



(function () {

    var Documents = Backbone.View.extend({
        el: "#main",
        events: {
            "submit #search_form": "query",
            "click .jstree-anchor": "displayInfo",
        },
        query: function (event) {
            event.preventDefault();
            $('#jsContainer').jstree(true).search($('#word').val());
        },
        displayInfo: function (event) {
            var $target = $(event.target);
            var tar = event.target;
            var node = mTree.get_node(event.target);
            if (mTree.is_leaf(tar)) {
                //Traiter feuille
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
            var $infos = $('#informations');
            var template = _.template('<h3> Ce dossier contient : </h3><ul class="list-group"> <% _.each(file,function(file){\
%>  <li class="list-group-item" > <%= file %></li><%}); %> </ul> ');
            $infos.html(template({'file': childs}));

        },
        fileInfo: function (cssContent, jsContent) {

        },
        launchModal: function (headTitle, inputValue, nodeToModify, toAdd) {
            var self = this;
            $("#head_title").text(headTitle || "");
            $("#input_content").val(inputValue || "");
            $("#form_change").submit(function (event) {
                event.preventDefault();
                var nwName = $("#input_content").val();
                var changeName = function (data) {
                    if (data.success) {
                        nodeToModify && mTree.rename_node(nodeToModify, nwName + (toAdd || ""));
                        $("#change").modal('hide');
                        self.showPopup(data.message);
                    } else {
                        self.showPopup(data.message,true,4000);
                    }
                };
                mController.changeName(nodeToModify, nwName, inputValue, changeName, !toAdd);
            });
            $("#change").modal({keyboard: false, backdrop: false});
        },
        showPopup : function(message,error,timeDisplay){
            timeDisplay = timeDisplay || 2000;
            var secondClass = error ? 'error' : 'success';
            $(".main-message").text(message);
            $(".main-message").addClass('show ' + secondClass);
            setTimeout(function(){
                $(".main-message").removeClass('show').removeClass(secondClass);
            },timeDisplay);
        }
    });

    var mDoc = new Documents();

    var mTree;
    $('#jsContainer').jstree({
        "plugins": ["search", "wholerow", "contextmenu"],
        'core': {
            "check_callback": true,
            'data': {
                "url": "/Administration/jsTree",
                "dataType": "json"
            }
        },
        "contextmenu": {
            "items": function (node) {
                var tree = $("#jsContainer").jstree(true);
                if (tree.is_leaf(node)) {
                    return {
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

                                var name = obj.text.substr(0, obj.text.length - 4);
                                //Il s'agit forcément d'un fichier .php, donc on enlève les 4 dernière lettres
                                mDoc.launchModal("Changer de nom", name, obj, ".php");
                                //inst.edit(obj);
                            }
                        },
                        "Supprimer": {
                            "label": "Supprimer",
                            "action": function (data) {
                                var sel = tree.get_selected();
                                if (!sel.length) {
                                    return false;
                                }
                                tree.delete_node(sel);

                            }
                        },
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

                                    }
                                },
                                "file": {
                                    "label": "Fichier",
                                    "action": function (data) {

                                    }
                                }
                            }
                        },
                        "Rename": {
                            "label": "Rename",
                            "action": function (data) {
                                var inst = $.jstree.reference(data.reference),
                                        obj = inst.get_node(data.reference);

                                //Il s'agit forcément d'un fichier .php, donc on enlève les 4 dernière lettres
                                mDoc.launchModal("Changer de nom", obj.text, obj);
                                //inst.edit(obj);
                            }
                        },
                        "Delete": {
                            "label": "Delete",
                            "action": function (data) {
                                var sel = tree.get_node(data.reference);
                                if (!sel) {
                                    return false;
                                }
                                tree.delete_node(sel);
                            }
                        }
                    };
                }
            }
        },
    });
    mTree = $('#jsContainer').jstree(true);

    var mController = new Controller(mTree, mDoc);
})();