"use strict";
var app = app || {};

(function () {
    "use strict";
    app.AppView = Backbone.View.extend({
        el: $("#app"),

        events: {
            'click': 'handleClick'
        },

        initialize: function () {
            this.listenTo(app.stockQuotes, 'add', this.add);
        },

        add: function (model, collection, options) {
            var view = new app.StockQuoteView({model: model});
            this.$el.append(view.render().el);
        },

        handleClick: function (e) {
            var sq = new app.StockQuote({symbol: "GOOG", name: "Alphabet Inc."});
            app.stockQuotes.add(sq);
        }
    });
})();
