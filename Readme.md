# Modus Create -Test Automation 

## Test Plan


### Scope
The Test plan consists of test scenarios that will cover functional or User-based testing which means tests are written to simulate user actions on Budgeting Sample Application. Unit testing is Out of Scope.
Note : Since the app is about adding items,  scenarios like refreshing the page is out of scope as well.

### Tech Stack
node ( Version 6^ ) https://nodejs.org

selenium-standalone https://www.npmjs.com/package/selenium-standalone

webdriverio https://github.com/webdriverio/webdriverio/

Mocha https://mochajs.org/

Chai https://chaijs.com 




### Test Scenarios 

#### Postive Test Scenarios

##### Budget Page : 
    
1.      Navigate to Budget page
2.      Check if Budget Table is Displayed
3.      Check if CashFlow Container is Displayed

##### Add Income : 
    
1.      Navigate to Budget page
2.      Add Income Type
3.      Check if Working Balance and Total inflow amount is updates"
4.      Navigate to Reports page
5.      Check if Total Inflow amount is increased and update in Inflow vs Outflow Chart.

##### Add Expense : 
    
1.      Navigate to Budget page
2.      Add Expense (Misc) Type
3.      Check if Working Balance and Total Outflow amount is updates"
4.      Navigate to Reports page
5.      Check if Total Outflow amount is increased and update in Inflow vs Outflow Chart.
6.      Navigate to Spending Chart
7.      Check if Misc Amount in updated Chart

#### Negative Test Scenario

##### Add Alphanumeric Value: 
1.      Navigate to Budget page
2.      Add Expense (Misc) Type with Alphanumeric Value : e21
3.      Check e21 is not added to amount .

### Page Object Design Pattern
There are some pages in Budget App where tests interact with them frequenlty . A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. In other wards one of the challenges of writing test automation is keeping  [selectors] (classes, id's, or xpath' etc.) up to date with the latest version of app code.

Budget App has two page object files
    #### budget.page.js
    #### report.page.js

Instead of including  selectors in  Spec file,  place them in a <pagename>.js file where we can manage all these selectors and methods together.

It is preferable to separate page objects into individual files that end with .page.js. These will require the basic page.js prototype construct / abstract class and create new objects for each individual page.

### Installation and Running Automation Tests 

1.    WebdriverIO

      npm install webdriverio

2.    Mocha

      npm install mocha

3.    Chai

      npm install chai

4. Selenium Standlone

      npm selenium standalone

### How to run :

1.    Start Selenium Server :

      selenium-standalone start

2.    Run Tests :
      ./node_modules/.bin/wdio wdio.conf.js




