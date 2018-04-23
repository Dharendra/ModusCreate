var expect = require('chai').expect;
var assert = require('chai').assert;
var BudgetPage = require('../../src/pageobjects/budget.page');
var ReportPage = require('../../src/pageobjects/report.page');

describe('Suite 1 => Smoke Test', function () {

    it('Budget Page Displayed', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Checking if Budget Table is Displayed");
        assert.isTrue(BudgetPage.isBudgetTablePresent(), "Budget Table should be Present");
        console.log("3. Checking if CashFlow Container is Displayed");
        assert.isTrue(BudgetPage.isCashFlowPresent(), "Budget Table should be Present");
        console.log(".....................Test execution finished.......................");
    });

  it('Add Income', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Add Income ");
        BudgetPage.enterIncome();
        console.log("3. Checking Total Income");
        assert.equal(BudgetPage.getTotalIncome(), '$8,802.00', "New Income Didn't get added to Total Income");
        console.log("4. Checking Working Balance Getting Updated");
        assert.equal(BudgetPage.getWorkingBalance(), '$4,213.93', "Working Balance Didn't get updated");
        console.log("5. Navigating to Reports page");
        BudgetPage.clickReports();
        console.log("6. Checking Total Inflow in Inflow vs Outflow Chart");
        assert.equal(ReportPage.getInflowAmount(), '$8,802.00', "New Income Didn't get added to Total Inflow");
        console.log(".....................Test execution finished.......................");
    });



    it('Add Expense', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Add Expense ");
        BudgetPage.enterExpense();
        console.log("3. Checking Total Outflow");
        assert.equal(BudgetPage.getTotalOutFlow(), '$6,588.07', "New Expense Didn't get added to Total Expense");
        console.log("4. Checking Working Balance Getting Updated");
        assert.equal(BudgetPage.getWorkingBalance(), '$213.93', "Working Balance Didn't get updated");
        console.log("5. Navigating to Reports page");
        BudgetPage.clickReports();
        console.log("6. Checking Total Outflow in Inflow vs Outflow Chart");
        assert.equal(ReportPage.getOutflowAmount(), '$6,588.07', "New Expense Didn't get added to Total Outflow");
        console.log("7. Navigating to Spending Chart");
        ReportPage.clickSpending();
        console.log("8. Checking Misc Amount in Spending Chart");
        assert.equal(ReportPage.getMiscAmount(), '$3,100.00', "New Expense Didn't get added to Total Misc Amount");
        console.log(".....................Test execution finished.......................");
    });



    it('Add Alphanumeric Value', function () {
        console.log(".....................Test execution started........................");
        console.log("TC => Navigate to Budget page");
        console.log("1. Opening Budget.");
        BudgetPage.open();
        console.log("2. Add Alphanumeric Value : e21");
        BudgetPage.enterAlphaNumeric();
        console.log("3. Checking Total Outflow");
        assert.equal(BudgetPage.getTotalIncome(), '$6,802.00', "New Alphanumeric Value Didn't get added to Total Expense");
        console.log(".....................Test execution finished.......................");
    });

});
