"use strict";
var app = app || {};

(function () {
    "use strict";
    app.AppView = Backbone.View.extend({
        el: $("#app"),

        initialize: function () {
            this.listenTo(app.stockQuotes, 'add', this.add);
            
            app.searchResult = new app.SearchResult();
            app.searchView = new app.SearchView({el: this.$(".searchview"), model: app.searchResult});
        },

        add: function (model, collection, options) {
            var view = new app.StockQuoteView({model: model});
            this.$el.append(view.render().el);
        }
    });
})();
