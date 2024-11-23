const accountSetupText = 'ACCOUNT SETUP'
const nameOfAppText = 'Name of App'

const bizPlusButtonLocator = 'button[id="biz_plus"]'
const enterpriseButtonLocator = 'button[id="enterprise"]'
const businessesMenuLocator = 'a[href="/business"]'
const portalHomeMenuLocator = 'a[href="/portal_homescreen"]'
const freeAccountMessageMenuLocator = 'a[href="/free_account_message"]'

class admin{
    redirectsToAccountSetupPage(){
        cy.contains(accountSetupText).click({ force: true })
        cy.contains(nameOfAppText).should('exist')
    }

    checkBizPlusAccountSetup(parentApp = ''){
        cy.get(bizPlusButtonLocator).should('have.attr', 'aria-checked', 'true')
        cy.get(enterpriseButtonLocator).should('have.attr', 'aria-checked', 'false')

        if(parentApp) cy.contains(parentApp).should('exist')
    }

    checkEnterpriseMenus(isEnterprise = true){
        if(isEnterprise){
            cy.get(businessesMenuLocator).should('exist')
            cy.get(portalHomeMenuLocator).should('exist')
            cy.get(freeAccountMessageMenuLocator).should('exist')
        } else {
            cy.get(businessesMenuLocator).should('not.exist')
            cy.get(portalHomeMenuLocator).should('not.exist')
            cy.get(freeAccountMessageMenuLocator).should('not.exist')
        }
    }
}

module.exports = new admin()
