import communicate from "../pages/communicate"

describe('Communicate menus redirection', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to Push Notifications page', () => {
        communicate.redirectsToCommunicateMenuItemPage('Push Notifications')
    })

    it('Redirects to Member Messages page', () => {
        communicate.redirectsToCommunicateMenuItemPage('Member Messages')
    })

    // this test passed on manual testing
    it('Redirects to Push Funnels page', () => {
        communicate.redirectsToCommunicateMenuItemPage('Push Funnels')
    })

    // this test passed on manual testing
    it('Redirects to In-App Notifications page', () => {
        communicate.redirectsToCommunicateMenuItemPage('In-App Notifications')
    })
})