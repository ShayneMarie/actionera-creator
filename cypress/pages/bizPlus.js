import bizPlusTestData from "../test-data/bizPlus.json"

const accountSetupText = 'Account Set-up Form'
const submitText = 'Submit'
const successfulBizPlusCreateText = 'Your app has been created.'

const appNameLocator = 'input[id="app_name"]'
const yourNameLocator = 'input[id="name"]'
const emailAddressLocator = 'input[id="email"]'
const passwordLocator = 'input[id="password"]'

class bizPlus{
    redirectsToBizPlusPage(){
        cy.url().should('eq', bizPlusTestData.bizPlusUrl)
        cy.contains(accountSetupText).should('exist')
    }

    submitBizPlusForm(appName, yourName, emailAddress, password, error = ''){
        cy.get(appNameLocator).type(appName)
        cy.get(yourNameLocator).type(yourName)
        cy.get(emailAddressLocator).type(emailAddress)
        cy.get(passwordLocator).type(password)
        cy.contains(submitText).click()

        if(error == 'E-mail Address') { 
            cy.contains(submitText).should('exist').wait(5000)
            cy.contains(successfulBizPlusCreateText).should('not.exist') 
        }
        else if(error) cy.contains(error).should('exist')
        else cy.contains(successfulBizPlusCreateText).should('exist')
    }

    submitBizPlusFormNoError(appName, yourName, emailAddress, password){
        cy.get(appNameLocator).type(appName)
        cy.get(yourNameLocator).type(yourName)
        cy.get(emailAddressLocator).type(emailAddress)
        cy.get(passwordLocator).type(password)
        cy.contains(submitText).click()
    }
}

module.exports = new bizPlus()   