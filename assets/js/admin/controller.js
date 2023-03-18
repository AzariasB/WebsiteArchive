/* 
 * To call the php files 
 * when the tree is modified
 */


var Controller = function (tree, view) {
    this.jsTree = tree;
    this.$tree = $(tree.element[0]);
    this.view = view;
};

Controller.prototype = {
    /*
     * Create file
     * 
     * - ask the user the name of the file
     * - create the 'real' file
     * - create the node file
     */
    createFile: function (node) {
        var self = this;
        this.view.launchModal("Créer un fichier", "NewFile",
                function (event, fileName) {
                    event.preventDefault();
                    var dataToSend = {
                        'fileName': fileName,
                        'path': self.getPath(node, true) + '/' + node.text
                    };
                    self.ajaxCall('createFile', dataToSend, function (data) {
                        if (data.success) {
                            var fileNode = {
                                'text': fileName + '.php',
                                'icon': 'glyphicon glyphicon-file'
                            };
                            node && self.jsTree.create_node(node, fileNode);
                            $('#change').modal('hide');
                            self.view.showPopup(data.message);
                        } else {
                            self.view.showPopup(data.message, true);
                        }
                    });
                });
    },
    /*
     * Delete a folder :
     * ask user
     * delete real folder
     * delete node folder
     * 
     * @param {obj} node
     */
    deleteFolder: function (node) {
        var self = this;
        this.view.confirmModal("Supprimer ce dossier ?", "En supprimant ce dossier, tous le contenu du dossier est supprimé", function () {
            var dataToSend = {
                'folderName': node.text,
                'path': self.getPath(node, true)
            };
            self.ajaxCall('deleteFolder', dataToSend, function (data) {
                if (data.success) {
                    node && self.jsTree.delete_node(node);
                    $('#confirm').modal('hide');
                    self.view.showPopup(data.message);
                } else {
                    self.view.showPopup(data.message, true);
                }
            });
        });
    },
    /*
     * Delete a file :
     *  - 1 ask confirmation if yes, we want to delete it
     *  - 2 if yes, delete the 'real' folder
     *  - 3 if real folder deleted, delete the node and display 'ok' message
     */
    deleteFile: function (node) {
        var self = this;
        this.view.confirmModal("Supprimer ce fichier ?", "Ce fichier ne pourra plus être récupéré",
                function () {
                    var dataToSend = {
                        'fileName': node.text.substr(0, node.text.length - 4),
                        'path': self.getPath(node, true)
                    };
                    self.ajaxCall('deleteFile', dataToSend, function (data) {
                        if (data.success) {
                            node && self.jsTree.delete_node(node);
                            $("#confirm").modal('hide');
                            self.view.showPopup(data.message);
                        } else {
                            self.view.showPopup(data.message, true);
                        }
                    });
                });
    },
    /*
     * Alter Name of file/folder
     * - ask user new name
     * - change real file/folder name
     * - change node name
     */
    alterName: function (node) {
        var name = node.text.indexOf('.php') > -1 ? node.text.substr(0, node.text.length - 4) : node.text;
        var isFolder = node.text.indexOf('.php') === -1;
        var self = this;

        this.view.launchModal("Changer de nom", name, function (event, nwName) {
            event.preventDefault();
            var dataToSend = {
                'oldName': name,
                'nwName': nwName,
                'path': self.getPath(node, true),
                'isFolder': isFolder
            };
            self.ajaxCall('changeName', dataToSend, function (data) {
                if (data.success) {
                    node && self.jsTree.rename_node(node, nwName + (isFolder ? "" : ".php"));
                    self.view.hidePromptModal();
                    self.view.showPopup(data.message);
                } else {
                    self.view.showPopup(data.message, true, 4000);
                }
            });
        });
    },
    /*
     * Adding a folder :
     * - ask user folder name
     * - create real folder
     * - create node folder
     */
    addFolder: function (node) {
        var self = this;

        this.view.launchModal("Nom du nouveau dossier", "Nouveau", function (event, nwName) {
            event.preventDefault();

            var dataToSend = {
                'folderName': nwName,
                'path': self.getPath(node, true) + '/' + node.text
            };
            console.log(dataToSend);
            self.ajaxCall('createFolder', dataToSend, function (data) {
                if (data.success) {
                    node && self.jsTree.create_node(node, nwName);
                    $("#change").modal('hide');
                    self.view.showPopup(data.message);
                } else {
                    self.view.showPopup(data.message, true, 4000);
                }
            });
        });
    },
    getFileInfo: function (node) {
        var dataToSend = {
            'fileName': node.text,
            'path': this.getPath(node, true)
        };
        var self = this;
        this.ajaxCall('getFileInfo', dataToSend, function (data) {
            if (!data.success) {
                self.view.showPopup(data.message, true, 4000);
            } else {
                self.view.fileInfo(data['data']['css'], data['data']['js']);
            }
        });
    },
    ajaxCall: function (funcName, data, success) {
        $.ajax({
            url: '/Administration/' + funcName,
            type: 'POST',
            data: data,
            success: function (data) {
                try {
                    success(JSON.parse(data));
                } catch (ex) {
                    console.error(data);
                    console.error(ex);
                }

            },
            error: function (erreur) {
                console.error(erreur);
            }
        });
    },
    getPath: function (node, isFirst) {
        if (node.parent === '#') {
            return isFirst ? "" : node.text;
        } else {
            var parent = this.jsTree.get_parent(node);
            return this.getPath(this.jsTree.get_node(parent), false) + (isFirst ? "" : ("/" + node.text));
        }
    }
};
