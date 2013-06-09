app.views.TestView = Backbone.View.extend({

    initialize: function(){

    },

    render: function () {
        this.$el.html(this.template());

        return this;
    },

    events: {
        "click .back-button": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});