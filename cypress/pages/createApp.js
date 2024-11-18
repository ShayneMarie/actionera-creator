import createAppTestData from '../test-data/createApp.json'
const appNameLocator = 'input[id="name"]'
const templateDropdownLocator = 'select[id="template_app_uuid"]'
const searchLocator = 'input[id="search"]'

class createApp{
    redirectsToCreateAppPage(){
        cy.contains(createAppTestData.user).click()
        cy.contains(createAppTestData.changeApplicationMenu).click()
        cy.contains(createAppTestData.createAppPageText).should('exist')
    }

    redirectsToCreateNewAppPage(){
        cy.contains(createAppTestData.createNewAppText).click()
        cy.contains(createAppTestData.accountSetupText).should('exist')
    }

    redirectsToNewAppPage(){
        cy.get(searchLocator).type(createAppTestData.applicationForTesting)
        cy.contains(createAppTestData.applicationForTesting).click()
        cy.contains(`${createAppTestData.applicationForTesting} - Home`).should('exist')
    }

    creationOfNewApp(appName, displayMessage){
        this.redirectsToCreateNewAppPage()
        cy.get(appNameLocator).type(appName)
        cy.contains(createAppTestData.submitButtonText).click()
        cy.contains(displayMessage).should('exist')
    }

    creationOfNewAppWithTemplate(appName, template, displayMessage){
        this.redirectsToCreateNewAppPage()
        cy.get(appNameLocator).type(appName)
        cy.get(templateDropdownLocator).select(template)
        cy.contains(createAppTestData.submitButtonText).click()
        cy.contains(displayMessage).should('exist')
    }
}

module.exports = new createApp()