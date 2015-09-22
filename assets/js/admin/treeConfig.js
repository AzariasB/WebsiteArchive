
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
