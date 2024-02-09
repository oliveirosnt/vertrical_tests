# Vertrical QA Challenge
This repository contains all the artifacts created by Oliveiros Neto related to the challenge for the position of QA at Vertrical.

### Prototype tests scenarios
The test cases for the prototype presented are listed and described in the following document:
```
https://docs.google.com/document/d/1lRXSkydeaETtxOZIsbOb4vYgWnRWF5D1OUdEu1mxlGo/edit?usp=sharing
```

### Automation
To run the created tests using cypress you  should 

-   Download the repository content.
-   Go to the **vertrical_tests/automation/** folder.
-   Run the command to install all the dependencies:
```
npm install
```
-   Run the command to open the Cypress:
```
npx cypress open
```
-   In the Cypress window, you should choose the **E2E Testing** option.
-   Then choose the browser that the tests will run against and click in the button to start the tests.
-   You should be able to see two files:
```
backendAutomation.cy.js
frontendAutomation.cy.js
```
-   Just click on the file you want, and the tests of the file should run.

### Frontend tests
-   Dynamic element test.
-   Challenging DOM test.

### API tests
-   GET existent user test.
-   GET inexistent user test.
-   POST test.
-   PUT test.
-   DELETE test.
