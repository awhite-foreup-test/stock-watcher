"use strict";
var app = app || {};

(function ($) {
    "use strict";

    app.SearchView = Backbone.View.extend({
        events: {
            'click button': 'handleClick'
        },

        initialize: function () {
            this.listenTo(this.model, 'change:symbol', this.add);
        },
        handleClick: function (e) {
            var searchTerm = this.$("input").val();
            this.apiSearch(searchTerm);
        },
        apiSearch: function (term) {
            this.model.set({keyword: term});
            this.model.fetch();
        },
        add: function () {
            var sq = new app.StockQuote({symbol: this.model.get("symbol"), name: this.model.get("name")});
            sq.fetch().then(function() {
                app.stockQuotes.add(sq);
            });
        }
    });
})(jQuery);
