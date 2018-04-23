var page = require('./page')

var reportPage = Object.create(page, {
    /**
     * define elements
     */
    inflow:     { get: function () { return browser.element('g:nth-child(1) > text.components-StackedChart-styles-value'); } },
    outflow:     { get: function () { return browser.element('g:nth-child(2) > text.components-StackedChart-styles-value'); } },
    spending:     { get: function () { return browser.element('.components-ReportsPanel-style-navLink.components-ReportsPanel-style-selected'); } },
    misc:     { get: function () { return browser.element('li:nth-child(1) > span.components-Legend-styles-value'); } },

    /**
     * define or overwrite page methods
     */
    getInflowAmount: { value: function() {
        return this.inflow.getText();
    } },
    getOutflowAmount: { value: function() {
        return this.outflow.getText();
    } },
    clickSpending: { value: function () {
        this.spending.click();
        browser.pause(2000);
    } },
    getMiscAmount: { value: function() {
        return this.misc.getText();
    } },
});

module.exports = reportPage
