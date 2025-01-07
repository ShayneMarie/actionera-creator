const actionCalendarText = 'ActionCalendar'
const actionSummitsText = 'ActionSummits'
const actionEventsText = 'ActionEvents'

class events{
    redirectsToEventsMenuItemPage(menuitem){
        if(menuitem == actionCalendarText){
            cy.contains(actionCalendarText).click({ force: true })
            cy.contains(actionCalendarText).should('exist')
            cy.url().should('contain', '/events')
        } else if(menuitem == actionSummitsText) {
            cy.contains(actionSummitsText).click({ force: true }).wait(5000)
            cy.contains(actionSummitsText).should('exist')
            cy.url().should('contain', '/summits')
        } else if(menuitem == actionEventsText) {
            cy.contains(actionEventsText).click({ force: true }).wait(5000)
            cy.contains(actionEventsText).should('exist')
            cy.url().should('contain', '/virtual_events')
        } 
    }
}

module.exports = new events()
