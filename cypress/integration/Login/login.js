import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://web.edapp.com/'
const email_field = 'input[name="email"]'
const password_field = 'input[name="password"][placeholder="Create your password"]'
const confirm_password_field = 'input[name="confirm-password"]'
const enter_key = '{enter}'
const onboarding = 'div[data-testid="loading"]'
const welcome_header = 'div[data-testid="block"] > h2'
const plus_button = 'button[data-testid="icon-button"]'
const password = 'NeV3Rb3f0retH0ughtP@ssword'

Given('I open EdApp login page', () => {
  cy.visit(url)
})

And('I click on {string} button', label => {
  cy.contains(label).click()
})


When('I enter a valid email and continue', () =>{
    let random = Math.random() * Math.random() * 100000
    let email = 'very_valid+'+Math.floor(random)+'@email.com.au'
    cy.get(email_field).type(email).type(enter_key)
    cy.get(password_field).should('be.visible')
})


And('I enter a valid password and continue', () => {
    cy.get(password_field).type(password)
    cy.get(confirm_password_field).first().type(password)
            .type(enter_key)
})


Then('I should see {string} message', message => {
    cy.get(onboarding, {timeout: 6000}).should("not.be.visible")
    cy.get(welcome_header, {timeout: 6000}).contains(message).should("be.visible")
})


And('a button to add courses', () =>{
    cy.get(plus_button).should("be.visible")
})