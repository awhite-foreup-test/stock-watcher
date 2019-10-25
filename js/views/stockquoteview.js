"use strict";
var app = app || {};

(function ($) {
    "use strict";

    app.StockQuoteView = Backbone.View.extend({
        tagName: 'div',

        template: _.template($('#stockquoteview-template').html()),

        render: function () {
            this.$el.addClass("stockquote");

            let change = this.model.get("change");
            this.$el.removeClass("trendingUp");
            this.$el.removeClass("trendingDown");
            if (change > 0) {
                this.$el.addClass("trendingUp");
            } else if (change < 0) {
                this.$el.addClass("trendingDown");
            }

            this.$el.html(this.template(this.templateValues()));

            let high = this.model.get("high");
            let low = this.model.get("low");
            let price = this.model.get("price");
            let percentLow = 100 * (high - price) / (high - low);
            this.$(".triangle").css("top", percentLow + "%");

            return this;
        },
        templateValues: function () {
            return {
                name: this.model.get("name"),
                symbol: this.model.get("symbol"),
                price: this.model.get("price").toFixed(2),
                change: this.model.get("change").toFixed(2),
                changePercent: this.model.get("changePercent").toFixed(2),
                open: this.model.get("open").toFixed(2),
                high: this.model.get("high").toFixed(2),
                low: this.model.get("low").toFixed(2)
            }
        }
    });

})(jQuery);
