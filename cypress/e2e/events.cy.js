import events from "../pages/events"

describe('Events menus redirection', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to ActionCalendar page', () => {
        events.redirectsToEventsMenuItemPage('ActionCalendar')
    })

    it('Redirects to ActionSummits page', () => {
        events.redirectsToEventsMenuItemPage('ActionSummits')
    })

    it('Redirects to ActionEvents page', () => {
        events.redirectsToEventsMenuItemPage('ActionEvents')
    })
})