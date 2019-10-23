"use strict";
var app = app || {};

(function ($) {
    "use strict";

    app.StockQuoteView = Backbone.View.extend({
        tagName: 'div',

        template: _.template($('#stockquoteview-template').html()),

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

})(jQuery);
