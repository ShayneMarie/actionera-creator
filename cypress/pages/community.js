const trackaConnectText = 'TrackaConnect'
const trackingsText = 'Trackings'
const commentsText = 'Comments'
const actionCommunityText = 'ActionCommunity'

const trackingsListText = 'Trackings List'

class community{
    redirectsToCommunityMenuItemPage(menuitem){
        if(menuitem == trackaConnectText){
            cy.contains(trackaConnectText).click({ force: true })
            cy.contains(trackaConnectText).should('exist')
            cy.url().should('contain', '/items')
        } else if(menuitem == trackingsText) {
            cy.contains(trackingsText).click({ force: true }).wait(5000)
            cy.contains(trackingsListText).should('exist')
            cy.url().should('contain', '/tracks')
        } else if(menuitem == commentsText) {
            cy.contains(commentsText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            //cy.contains(pushFunnelsResourceText).should('exist')
            cy.url().should('contain', '/actionera/resources')
        } else if(menuitem == actionCommunityText) {
            cy.contains(actionCommunityText).invoke('removeAttr', 'target').click({ force: true })
            //cy.contains(pushFunnelsResourceText).should('exist')
            cy.url().should('contain', '/actionera/resources')
        } 
    }
}

module.exports = new community()
