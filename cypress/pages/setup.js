const webSetupText = 'Web Setup'
const menuSetupText = 'Menu Setup'
const appInfoText = 'App Info'
const memberScreensText = 'Member Screens'
const unlockTrackScreenText = 'Unlock/Track Screen'
const customDomainText = 'Custom Domain'

const myCustomURLText = 'My Custom URL'
const topicsLabelText= 'Topics Label'
const appNameText = 'App Name'
const memberContentMessageText = 'Member Content Message'
const trackaconnectInstructionText= 'TRACKACONNECT Instructions Text'
const yourOwnCustomDomainText = 'Your Own Custom Domain'

class setup{
    redirectsToSetupMenuItemPage(menuitem){
        if(menuitem == webSetupText){
            cy.contains(webSetupText).click({ force: true })
            cy.contains(myCustomURLText).should('exist')
            cy.url().should('contain', '/webapp')
        } else if(menuitem == menuSetupText) {
            cy.contains(menuSetupText).click({ force: true })
            cy.contains(topicsLabelText).should('exist')
            cy.url().should('contain', '/menu-setup')
        } else if(menuitem == appInfoText) {
            cy.contains(appInfoText).click({ force: true })
            cy.contains(appNameText).should('exist')
            cy.url().should('contain', '/app-info')
        } else if(menuitem == memberScreensText) {
            cy.contains(memberScreensText).click({ force: true })
            cy.contains(memberContentMessageText).should('exist')
            cy.url().should('contain', '/about_members')
        } else if(menuitem == unlockTrackScreenText) {
            cy.contains(unlockTrackScreenText).click({ force: true })
            cy.contains(trackaconnectInstructionText).should('exist')
            cy.url().should('contain', '/track_now_screen')
        } else if(menuitem == customDomainText) {
            cy.contains(customDomainText).invoke('removeAttr', 'target').click({ force: true })
            cy.contains(yourOwnCustomDomainText).should('exist')
            cy.url().should('contain', '/resources')
        }
    }
}

module.exports = new setup()
