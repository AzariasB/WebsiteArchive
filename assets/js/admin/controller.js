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
     * Delete a file :
     *  - 1 ask confirmation if yes, we want to delete it
     *  - 2 if yes, delete the 'real' folder
     *  - 3 if real folder deleted, delete the node and display 'ok' message
     */
    deleteFile: function (node) {
        var self = this;
        this.view.confirmModal("Supprimer ce fichier ?", "Ce fichier ne pourra plus être récupéré",
                function () {
                    self.confirmDeleteFile(node, function (data) {
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
    confirmDeleteFile: function (node, callBack) {
        var dataToSend = {
            'fileName': node.text.substr(0,node.text.length - 4),
            'path': this.getPath(node, true)
        };
        this.ajaxCall('deleteFile', dataToSend, callBack);
    },
    alterName: function (node) {
        var name = node.text.indexOf('.php') > -1 ? node.text.substr(0, node.text.length - 4) : node.text;
        var isFolder = node.text.indexOf('.php') === -1;
        var self = this;
        var onSubmit = function (event) {
            event.preventDefault();
            var nwName = $("#input_content").val();
            var changeName = function (data) {
                if (data.success) {
                    node && self.jsTree.rename_node(node, nwName + (isFolder ? "" : ".php"));
                    $("#change").modal('hide');
                    self.view.showPopup(data.message);
                } else {
                    self.view.showPopup(data.message, true, 4000);
                }
            };
            self.changeName(node, nwName, name, changeName, isFolder);
        };
        //Il s'agit forcément d'un fichier .php, donc on enlève les 4 dernière lettres
        this.view.launchModal("Changer de nom", name, onSubmit);
        //inst.edit(obj);
    },
    changeName: function (data, nwName, oldName, callBack, isFolder) {
        var dataToSend = {
            'oldName': oldName,
            'nwName': nwName,
            'path': this.getPath(data, true),
            'isFolder': isFolder
        };
        this.ajaxCall('changeName', dataToSend, callBack);
    },
    addFolder: function (node) {
        var self = this;
        var onSubmit = function (event) {
            event.preventDefault();
            var nwName = $("#input_content").val();
            var createFolder = function (data) {
                if (data.success) {
                    node && self.jsTree.create_node(node, nwName);
                    $("#change").modal('hide');
                    self.view.showPopup(data.message);
                } else {
                    self.view.showPopup(data.message, true, 4000);
                }
            };
            self.createFolder(nwName, node, createFolder);
        };
        this.view.launchModal("Nom du nouveau dossier", "Nouveau", onSubmit);
    },
    createFolder: function (folderName, parentNode, callBack) {
        var dataToSend = {
            'folderName': folderName,
            'path': this.getPath(parentNode, true) + '/' + parentNode.text
        };
        this.ajaxCall('createFolder', dataToSend, callBack);
    },
    getFileInfo: function (node, callBack) {
        var dataToSend = {
            'fileName': node.text,
            'path': this.getPath(node, true)
        };
        this.ajaxCall('getFileInfo', dataToSend, $.proxy(callBack, this));
    },
    displayFileInfo: function (data) {
        if (!data.success) {
            this.view.showPopup(data.message, true, 4000);
        } else {
            this.view.fileInfo(data['data']['css'], data['data']['js']);
        }
    },
    ajaxCall: function (funcName, data, success) {
        $.ajax({
            url: '/Administration/' + funcName,
            type: 'POST',
            data: data,
            success: function (data) {
                success(JSON.parse(data));
            },
            error: function (erreur) {
                console.error(erreur);
            }
        });
    },
    getPath: function (node, isFirst) {
        if (node.parent === '#') {
            return isFirst ? "" : (node.original.text || node.text);
        } else {
            var parent = this.jsTree.get_parent(node);
            return this.getPath(this.jsTree.get_node(parent), false) + (isFirst ? "" : ("/" + (node.original.text || node.text)));
        }
    }
};
