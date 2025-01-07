const businessesText = 'Businesses'
const creatorsText = 'Creators'
const membersText = 'Members'
const tagsText = 'Tags'
const directoriesText = 'Directories'
const topicsListingsText = 'Topics/Listings'
const homeScreensText = 'Home Screens'
const portalHomescreenText = 'Portal Homescreen'
const freeAccountMessageText = 'Free Account Message'
const importExportText = 'Import/Export'
const actionformsText = 'ACTIONFORMS'

const businessListText = 'Business List'
const creatorsPageText= 'CREATORS'
const memberListText = 'Member List'
const directoriesListText = 'Directories List'
const topicsDirectoryListingsText = 'Topics/Directory Listings'

class manage{
    redirectsToManageMenuItemPage(menuitem){
        if(menuitem == businessesText){
            cy.contains(businessesText).click({ force: true })
            cy.contains(businessListText).should('exist')
            cy.url().should('contain', '/business')
        } else if(menuitem == creatorsText) {
            cy.contains(creatorsText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(creatorsPageText).should('exist')
            cy.url().should('contain', '/creators')
        } else if(menuitem == membersText) {
            cy.contains(membersText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(memberListText).should('exist')
            cy.url().should('contain', '/members')
        } else if(menuitem == tagsText) {
            cy.contains(tagsText).click({ force: true })
            cy.contains(tagsText).should('exist')
            cy.url().should('contain', '/tags')
        } else if(menuitem == directoriesText) {
            cy.contains(directoriesText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(directoriesListText).should('exist')
            cy.url().should('contain', '/directories')
        } else if(menuitem == topicsListingsText) {
            cy.contains(topicsListingsText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(topicsDirectoryListingsText).should('exist')
            cy.url().should('contain', '/topics')
        } else if(menuitem == homeScreensText) {
            cy.contains(homeScreensText).click({ force: true })
            cy.contains(homeScreensText).should('exist')
            cy.url().should('contain', '/welcome_screens')
        } else if(menuitem == portalHomescreenText) {
            cy.contains(portalHomescreenText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(portalHomescreenText).should('exist')
            cy.url().should('contain', '/portal_homescreen')
        } else if(menuitem == freeAccountMessageText) {
            cy.contains(freeAccountMessageText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            cy.contains(freeAccountMessageText).should('exist')
            cy.url().should('contain', '/free_account_message')
        } else if(menuitem == importExportText) {
            cy.contains(importExportText).click({ force: true })
            cy.contains(importExportText).should('exist')
            cy.url().should('contain', '/import-export')
        } else if(menuitem == actionformsText) {
            cy.contains(actionformsText).click({ force: true })
            cy.contains(actionformsText).should('exist')
            cy.url().should('contain', '/action-forms')
        }      
    }
}

module.exports = new manage()
