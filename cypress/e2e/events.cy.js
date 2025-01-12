import events from "../pages/events"

describe('Events menus redirection - Super Admin', () => {
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

describe('Events menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
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