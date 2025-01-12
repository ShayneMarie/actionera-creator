import setup from "../pages/setup"

describe('Setup menus redirection - Super Admin', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to Web Setup page', () => {
        setup.redirectsToSetupMenuItemPage('Web Setup')
    })

    it('Redirects to Menu Setup page', () => {
        setup.redirectsToSetupMenuItemPage('Menu Setup')
    })

    it('Redirects to App Info page', () => {
        setup.redirectsToSetupMenuItemPage('App Info')
    })

    it('Redirects to Member Screens page', () => {
        setup.redirectsToSetupMenuItemPage('Member Screens')
    })

    it('Redirects to Unlock/Track Screen page', () => {
        setup.redirectsToSetupMenuItemPage('Unlock/Track Screen')
    })

    it('Redirects to Custom Domain page', () => {
        setup.redirectsToSetupMenuItemPage('Member ScreenCustom Domain')
    })
})

describe('Setup menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
        cy.visit('/')
    })
  
    it('Redirects to Web Setup page', () => {
        setup.redirectsToSetupMenuItemPage('Web Setup')
    })

    it('Redirects to Menu Setup page', () => {
        setup.redirectsToSetupMenuItemPage('Menu Setup')
    })

    it('Redirects to App Info page', () => {
        setup.redirectsToSetupMenuItemPage('App Info')
    })

    it('Redirects to Member Screens page', () => {
        setup.redirectsToSetupMenuItemPage('Member Screens')
    })

    it('Redirects to Unlock/Track Screen page', () => {
        setup.redirectsToSetupMenuItemPage('Unlock/Track Screen')
    })

    it('Redirects to Custom Domain page', () => {
        setup.redirectsToSetupMenuItemPage('Member ScreenCustom Domain')
    })
})