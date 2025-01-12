const accountSetupText = 'ACCOUNT SETUP'
const nameOfAppText = 'Name of App'
const domainSetupText = 'Domain Setup'
const customUrlsText = 'Custom URLs'
const aboutAppText = 'About App'
const whatsNewText = 'What\'s New'
const publishDateText = 'Publish Date'
const manageUsersText = 'Manage Users'
const allAppsText = 'All Apps'
const superUsersText = 'Super Users'
const appOrRoleText = 'App/Role'
const unlinkedMediaText = 'Unlinked Media'
const mediaTypText = 'Media Type'
const removedAppsText = 'Removed Apps'
const accountStatusText = 'Account Status'
const pendingDesignationText = 'PENDING DESIGNATION'
const globalFieldsText = 'Global Fields'
const androidText = 'Android'
const onboardingTrackerText = 'Onboarding Tracker'
const appNameText = 'App Name'

const submitText= 'Submit'
const savedText = 'Saved'
const whichParentAppText = 'Which Parent App?'
const launchBusinessThruCTAText = 'Launch Business thru CTA'

const bizPlusButtonLocator = 'button[id="biz_plus"]'
const enterpriseButtonLocator = 'button[id="enterprise"]'
const businessesMenuLocator = 'a[href="/business"]'
const portalHomeMenuLocator = 'a[href="/portal_homescreen"]'
const freeAccountMessageMenuLocator = 'a[href="/free_account_message"]'

class admin{
    redirectsToAdminMenuItemPage(menuitem, isAdmin = true){
        if(menuitem == accountSetupText){
            if(isAdmin){
                cy.contains(accountSetupText).click({ force: true })
                cy.contains(nameOfAppText).should('exist')
                cy.url().should('contain', '/app/setup')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == domainSetupText) {
            if(isAdmin){
                cy.contains(domainSetupText).click({ force: true })
                cy.contains(customUrlsText).should('exist')
                cy.url().should('contain', '/app/domains')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == aboutAppText) {
            if(isAdmin){
            cy.contains(aboutAppText).click({ force: true })
            cy.contains(aboutAppText).should('exist')
            cy.url().should('contain', '/app/about')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == whatsNewText) {
            if(isAdmin){
                cy.contains(whatsNewText).click({ force: true })
                cy.contains(publishDateText).should('exist')
                cy.url().should('contain', '/whats_new')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == manageUsersText) {
            if(isAdmin){
                cy.contains(manageUsersText).click({ force: true })
                cy.contains(allAppsText).should('exist')
                cy.url().should('contain', '/users')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == superUsersText) {
            if(isAdmin){
                cy.contains(superUsersText).click({ force: true })
                cy.contains(appOrRoleText).should('exist')
                cy.url().should('contain', '/super-users')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == unlinkedMediaText) {
            if(isAdmin){
                cy.contains(unlinkedMediaText).click({ force: true })
                cy.contains(mediaTypText).should('exist')
                cy.url().should('contain', '/unlink-media')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == removedAppsText) {
            if(isAdmin){
                cy.contains(removedAppsText).click({ force: true })
                cy.contains(removedAppsText).should('exist')
                cy.url().should('contain', '/removed_apps')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == accountStatusText) {
            if(isAdmin){
                cy.contains(accountStatusText).click({ force: true })
                cy.contains(pendingDesignationText).should('exist')
                cy.url().should('contain', '/account_status')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == globalFieldsText) {
            if(isAdmin){
                cy.contains(globalFieldsText).click({ force: true })
                cy.contains(androidText).should('exist')
                cy.url().should('contain', '/global-fields')
            } else {
                cy.log('No Access to menu item')
            }
        } else if(menuitem == globalFieldsText) {
            if(isAdmin){
                cy.contains(onboardingTrackerText).click({ force: true })
                cy.contains(appNameText).should('exist')
                cy.url().should('contain', '/onboarding_tracker')            
            } else {
                cy.log('No Access to menu item')
            }
        }
    }

    checkBizPlusAccountSetup(parentApp = ''){
        cy.get(bizPlusButtonLocator).should('have.attr', 'aria-checked', 'true')
        cy.get(enterpriseButtonLocator).should('have.attr', 'aria-checked', 'false')

        if(parentApp) cy.contains(parentApp).should('exist')
    }

    checkEnterpriseAccountSetup(){
        cy.get(bizPlusButtonLocator).should('have.attr', 'aria-checked', 'true')
        cy.get(enterpriseButtonLocator).should('have.attr', 'aria-checked', 'true')
        cy.contains(whichParentAppText).should('not.exist')
        cy.contains(launchBusinessThruCTAText).should('exist')
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

    updateBizPlusToEnterprise(){
        cy.get(enterpriseButtonLocator).click()
        cy.contains(submitText).click()

        cy.contains(savedText).should('exist')
        cy.get(enterpriseButtonLocator).should('have.attr', 'aria-checked', 'true')
    }
}

module.exports = new admin()
