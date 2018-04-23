

var page = require('./page');


var budgetPage = Object.create(page, {
    /**
     * define elements
     */
    budgetTable:      { get: function () { return browser.element('.containers-BudgetGrid-style-budgetGrid'); } },
    cashFlowContainer:        { get: function () { return browser.element('.components-Balance-style-balanceRow'); } },
    enterValue:  { get: function () { return browser.element('input[type="number"]'); } },
    addButton:        { get: function () { return browser.element('button[type="submit"]'); } },
    totalInflow:      { get: function () { return browser.element('div:nth-child(1) > div > div.components-Balance-style-balanceAmount.components-Balance-style-pos'); } },
    workingBalance:   { get: function () { return browser.element('div:nth-child(5) > div > div.components-Balance-style-balanceAmount.components-Balance-style-pos'); } },
    reports:   { get: function () { return browser.element('.components-Header-style-navLink:nth-child(2)'); } },
    totalOutflow:     { get: function () { return browser.element('.components-Balance-style-balanceAmount.components-Balance-style-neg'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'http://localhost:3000/budget');
        
    } },

    enterIncome: { value: function () {
        browser.selectByValue('select[name="categoryId"]', "15");
        browser.pause(1000);
        this.enterValue.setValue("2000");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        
    } },

    enterExpense: { value: function () {
        this.enterValue.setValue("2000");
        browser.pause(2000);
        this.addButton.click();
        browser.pause(2000);
        
    } },

     enterAlphaNumeric: { value: function () {
        this.enterValue.setValue("e21");
        browser.pause(2000);
        this.addButton.click();  
    } },

    clickReports: { value: function () {
        this.reports.click();
        browser.pause(2000);
    } },


    getTotalIncome: { value: function() {
        return this.totalInflow.getText();
    } },
    getTotalOutFlow: { value: function() {
        return this.totalOutflow.getText();
    } },

    getWorkingBalance: { value: function() {
        return this.workingBalance.getText();
    } },

    isBudgetTablePresent: { value: function() {
        if (this.budgetTable.isVisible()){
            return true;
        };
        return false;
    } },
    isCashFlowPresent: { value: function() {
        if (this.cashFlowContainer.isVisible()){
            return true;
        };
        return false;
    } },
    
});

module.exports = budgetPage
