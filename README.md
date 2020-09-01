# EDAPP QA AUTOMATION CHALLENGE

## Project Specifications

Visit our learners app at: https://web.edapp.com/.
This is the desktop version of our learners app - the part of the platform where a learner will see
the courses assigned to them, complete the lessons, earn achievements, and assess their
performance.
1. Write a test using the Cypress framework that can automate the expected behaviours
of the registration and login flow of `web.edapp.com`.
2. Write cucumber documentation syntax for the tests that you wrote above.
- Refer to: https://cucumber.io/docs/guides/overview/

## Setup for the project

Install `Cypress` if it is not installed already using command

```bash
npm install cypress --save-dev
```
Install `cypress-cucumber-preprocessor` 

```bash
npm install --save-dev cypress-cucumber-preprocessor
```

Then add the plugin to cypress plugins in `cypress/plugins/index.js`

```bash
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration

`cypress.json`

```bash
{
  "testFiles": "**/*.feature"
}
```

Install `cosmiconfig` 

```bash
npm install cosmiconfig --save-dev
```

## Run tests

Open Cypress using

```bash
npx cypress open
```

OR

```bash
node_modules/.bin/cypress open
```

You will see the feature file listed under Integration tests 

`cypress/integratiion/Login.feature`

Click the file to run the tests


### Feature 

```Login.feature```

```bash
Scenario: Register and Login to EdApp
    Given I open EdApp login page
    And I click on 'Create an EdApp account' button
    When I enter a valid email and continue
    And I enter a valid password and continue
    And I click on 'better myself' button
    And I click on 'Skip' button
    And I click on 'Join our community' button
    Then I should see 'Welcome!' message
    And a button to add courses
```

### StepDefinitions

```cypress/integratiion/Login/login.js```

```bash
Given('I open EdApp login page', () => {
  cy.visit(url)
})
```

