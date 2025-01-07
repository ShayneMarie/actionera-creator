const pushNotificationsText = 'Push Notifications'
const inAppNotificationsText = 'In-App Notifications'
const pushFunnelsText = 'Push Funnels'
const memberMessagesText = 'Member Messages'

const sentPushNotificationsText = 'SENT PUSH NOTIFICATIONS'
const inAppNotificationsResourcesText= 'IN-APP NOTIFICATIONS'
const pushFunnelsResourceText = 'PUSH FUNNELS'
const releaseDateText = 'Release Date'

class communicate{
    redirectsToCommunicateMenuItemPage(menuitem){
        if(menuitem == pushNotificationsText){
            cy.contains(pushNotificationsText).click({ force: true })
            cy.contains(sentPushNotificationsText).should('exist')
            cy.url().should('contain', '/push-notifications')
        } else if(menuitem == inAppNotificationsText) {
            cy.contains(inAppNotificationsText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            //cy.contains(inAppNotificationsResourcesText).should('exist')
            cy.url().should('contain', '/actionera/resources')
        } else if(menuitem == pushFunnelsText) {
            cy.contains(pushFunnelsText).invoke('removeAttr', 'target').click({ force: true }).wait(5000)
            //cy.contains(pushFunnelsResourceText).should('exist')
            cy.url().should('contain', '/actionera/resources')
        } else if(menuitem == memberMessagesText) {
            cy.contains(memberMessagesText).click({ force: true })
            cy.contains(releaseDateText).should('exist')
            cy.url().should('contain', '/messages')
        } 
    }
}

module.exports = new communicate()
