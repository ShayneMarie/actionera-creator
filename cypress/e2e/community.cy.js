import community from "../pages/community"

describe('Community menus redirection', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to TrackaConnect page', () => {
        community.redirectsToCommunityMenuItemPage('TrackaConnect')
    })

    it('Redirects to Trackings page', () => {
        community.redirectsToCommunityMenuItemPage('Trackings')
    })

    // this test passed on manual testing
    it('Redirects to Comments page', () => {
        community.redirectsToCommunityMenuItemPage('Comments')
    })

    // this test passed on manual testing
    it('Redirects to ActionCommunity page', () => {
        community.redirectsToCommunityMenuItemPage('ActionCommunity')
    })
})