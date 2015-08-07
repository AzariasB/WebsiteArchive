

/* global _, Backbone */

$(document).ready(function () {
    var Encoder = Backbone.View.extend({
        el: "body",
        initialize: function () {
            var mSlider = new Slider("input#textSize", {});
        },
        events: {
            "keyup #plain": "updateText",
            "submit #toTranslate": "createPicture",
            "submit #mFont": "addFont",
            "change #encodage": "updateClass",
            "change #textSize": "textSize"
        },
        updateText: function () {
            this.$el.find("#texte").text($("#plain").val());
        },
        createPicture: function (event) {
            event.preventDefault();
            html2canvas($("#texte")[0], {
                onrendered: function (canvas) {
                    $("#resImage").html(canvas);
                }
            });
        },
        updateClass: function (event) {
            var nwClass = this.$el.find("#encodage").find(":selected").data("class");
            $("#texte").attr({
                class: nwClass
            });
        },
        textSize: function (event) {
            $("#texte").css({
                "font-size": event.value.newValue
            });
        },
        addFont: function (event) {
            event.preventDefault();
            this.startLoad();
            this.uploadFile();
        },
        startLoad: function () {
            var mSpan = $("<span/>", {
                class: "fa fa-spinner  fa-spin fa-5x"
            });
            $("#mFont")
                    .html("")
                    .append(mSpan);
        },
        endLoad: function (state) {
            console.log(state);
            if (state === "success") {
                $("#mFont").html("<h3>Terminé !</h3>");
            } else {
                $("#mFont").html("<h3 class=\"text-danger\">Echec du chargement</h3>");
            }
        },
        uploadFile: function () {
            var self = this;
            var formData = new FormData($('#mFont')[0]);
            console.log(formData);
            $.ajax({
                url: '/Ajax/uploadFont', //Server script to process data
                type: 'POST',
                xhr: function () {  // Custom XMLHttpRequest
                    var myXhr = $.ajaxSettings.xhr();
                    if (myXhr.upload) { // Check if upload property exists
                        myXhr.upload.addEventListener('progress', function (event) {
                            self.updateProgress(event);
                        }, false); // For handling the progress of the upload
                    }
                    return myXhr;
                },
                //Ajax events
                //beforeSend: beforeSendHandler,
                success: function (data, txt) {
                    console.log(data);
                    self.endLoad(txt);
                },
                error: function (data, txt) {
                    self.endLoad(txt);
                },
                // Form data
                data: formData,
                dataType : "json",
                //Options to tell jQuery not to process data or worry about content-type.
                cache: false,
                contentType: "multipart/form-data",
                processData: false
            });
        },
        updateProgress: function (event) {
            if (event.lengthComputable) {
                var progress =  event.loaded / event.total;
                console.log(progress);
            }
        }
    });

    var mEncode = new Encoder();
});