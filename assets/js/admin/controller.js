/* 
 * To call the php files 
 * when the tree is modified
 */


var Controller = function (tree, view) {
    this.jsTree = tree;
    this.$tree = $(tree.element[0]);
    this.view = view;

    this.initListeners();
};

Controller.prototype = {
    initListeners: function () {
        //this.$tree.on("rename_node.jstree",$.proxy(this.changeName,this));
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
