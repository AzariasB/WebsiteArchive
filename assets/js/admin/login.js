

$(document).ready(function () {
    var $err = $('.login-form-main-message');
    
    $('#lg_password').focusin(function(){
        $err.removeClass('show');
    });
    
    $('#login-form').on('submit', function (event) {
        event.preventDefault();
        var pwd = $('#lg_password').val()
        $.ajax({
            url: '/Administration/login',
            type: 'POST',
            data: {
                "password" : pwd
            },
            success: function (data) {
                data = JSON.parse(data);
                console.log(data);
                console.log(data['success']);
                if (data.success) {
                    goTo(data.redirection);
                } else {
                    displayError(data['message']);
                }
            },
            error: function (erreur) {
                console.error(erreur);
            }
        });
    });

    function goTo(destination) {
        window.location.href = destination;
    }

    function displayError(message) {
        $('#lg_password').hasClass('has-error') && $('#lg_password').addClass('has-error');
        var $err = $('.login-form-main-message');
        $err.text(message);
        $err.addClass('error');
        $err.addClass('show');
    }
});