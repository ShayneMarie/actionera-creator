import manage from "../pages/manage"

describe('Manage menus redirection - Super Admin', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to Businesses page', () => {
        manage.redirectsToManageMenuItemPage('Businesses')
    })

    it('Redirects to Creators page', () => {
        manage.redirectsToManageMenuItemPage('Creators')
    })

    it('Redirects to Members page', () => {
        manage.redirectsToManageMenuItemPage('Members')
    })

    it('Redirects to Tags page', () => {
        manage.redirectsToManageMenuItemPage('Tags')
    })
      
    it('Redirects to Directories page', () => {
        manage.redirectsToManageMenuItemPage('Directories')
    })

    it('Redirects to Topics/Listings page', () => {
        manage.redirectsToManageMenuItemPage('Topics/Listings')
    })

    it('Redirects to Home Screens page', () => {
        manage.redirectsToManageMenuItemPage('Home Screens')
    })

    it('Redirects to Portal Homescreen page', () => {
        manage.redirectsToManageMenuItemPage('Portal Homescreen')
    })

    it('Redirects to Free Account Message page', () => {
        manage.redirectsToManageMenuItemPage('Free Account Message')
    })

    it('Redirects to Import/Export page', () => {
        manage.redirectsToManageMenuItemPage('Import/Export')
    })
      
    it('Redirects to ACTIONFORMS page', () => {
        manage.redirectsToManageMenuItemPage('ACTIONFORMS')
    })
})

describe('Manage menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
        cy.visit('/')
    })
  
    it('Redirects to Businesses page', () => {
        manage.redirectsToManageMenuItemPage('Businesses')
    })

    it('Redirects to Creators page', () => {
        manage.redirectsToManageMenuItemPage('Creators')
    })

    it('Redirects to Members page', () => {
        manage.redirectsToManageMenuItemPage('Members')
    })

    it('Redirects to Tags page', () => {
        manage.redirectsToManageMenuItemPage('Tags')
    })
      
    it('Redirects to Directories page', () => {
        manage.redirectsToManageMenuItemPage('Directories')
    })

    it('Redirects to Topics/Listings page', () => {
        manage.redirectsToManageMenuItemPage('Topics/Listings')
    })

    it('Redirects to Home Screens page', () => {
        manage.redirectsToManageMenuItemPage('Home Screens')
    })

    it('Redirects to Portal Homescreen page', () => {
        manage.redirectsToManageMenuItemPage('Portal Homescreen')
    })

    it('Redirects to Free Account Message page', () => {
        manage.redirectsToManageMenuItemPage('Free Account Message')
    })

    it('Redirects to Import/Export page', () => {
        manage.redirectsToManageMenuItemPage('Import/Export')
    })
      
    it('Redirects to ACTIONFORMS page', () => {
        manage.redirectsToManageMenuItemPage('ACTIONFORMS')
    })
})