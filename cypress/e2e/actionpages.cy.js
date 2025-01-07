import actionpages from "../pages/actionpages"

describe('Actionpages menus redirection', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to ACTIONLISTS page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONLISTS')
    })

    it('Redirects to ACTIONBLOG page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONBLOG')
    })

    it('Redirects to Videos page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Videos')
    })

    it('Redirects to Articles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Articles')
    })
      
    it('Redirects to Lessons page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Lessons')
    })

    it('Redirects to Audio page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Audio')
    })

    it('Redirects to ActionJournal page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ActionJournal')
    })

    it('Redirects to Q&A page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Q&A')
    })

    it('Redirects to Galleries page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Galleries')
    })

    it('Redirects to Resources page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Resources')
    })
      
    it('Redirects to Products page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Products')
    })

    it('Redirects to Special Offer Codes page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Special Offer Codes')
    })
      
    it('Redirects to Profiles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Profiles')
    })

    it('Redirects to Podcasts page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Podcasts')
    })

    it('Redirects to Documents page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Documents')
    })
})