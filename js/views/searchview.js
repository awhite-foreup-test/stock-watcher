"use strict";
var app = app || {};

(function ($) {
    "use strict";

    app.SearchView = Backbone.View.extend({
        events: {
            'click button': 'handleClick',
            'keyup input': 'handleKeyUp'
        },
        initialize: function () {
            this.listenTo(this.model, 'change:symbol', this.add);
        },
        handleClick: function (e) {
            this.searchInput();
        },
        handleKeyUp: function (e) {
            if (e.key === "Enter") {
                this.searchInput();
            }
        },
        searchInput: function () {
            var searchTerm = this.$("input").val();
            this.model.set({keyword: searchTerm});
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
