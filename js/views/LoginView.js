app.views.LoginView = Backbone.View.extend({

    initialize:function () {
        console.log(app);
    },

    events: {
        "click #loginButton": "login"
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    login:function (event) {
        event.preventDefault(); // Don't let this button submit the form
        $('.alert-error').hide(); // Hide any errors on a new submit
        var url = 'http://localhost:8888/drupal7.zwoelfgrad.com/myendpoint/system/connect';
        console.log('Loggin in... ');
        var formValues = {
            email: $('#inputEmail').val(),
            password: $('#inputPassword').val()
        };

        $.ajax({
            url:url,
            type:'POST',
            dataType:"json",
            data: formValues,
            beforeSend: function (request) {
              request.setRequestHeader("X-CSRF-Token", token);
            },            
            success:function (data) {
                console.log(["Login request details: ", data]);
               
                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                    //app.slider.slidePageFrom(new app.views.MapView().render().$el, 'page-right');
                    console.log(app.views.LoginView);
                }
            }
        });
    }
});