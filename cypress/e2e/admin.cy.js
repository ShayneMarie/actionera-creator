import admin from "../pages/admin"

describe('Admin menus redirection - Super Admin', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to Account Setup page', () => {
        admin.redirectsToAdminMenuItemPage('ACCOUNT SETUP')
    })
  
    it('Redirects to About App page', () => {
        admin.redirectsToAdminMenuItemPage('About App')
    })
  
    it('Redirects to What\'s New page', () => {
        admin.redirectsToAdminMenuItemPage('What\'s New')
    })
  
    it('Redirects to Manage Users page', () => {
        admin.redirectsToAdminMenuItemPage('Manage Users')
    })
  
    it('Redirects to Super Users page', () => {
        admin.redirectsToAdminMenuItemPage('Super Users')
    })
  
    it('Redirects to Unlinked Media page', () => {
        admin.redirectsToAdminMenuItemPage('Unlinked Media')
    })
  
    it('Redirects to Removed Apps page', () => {
        admin.redirectsToAdminMenuItemPage('Removed Apps')
    })
  
    it('Redirects to Account Status page', () => {
        admin.redirectsToAdminMenuItemPage('Account Status')
    })
  
    it('Redirects to Global Fields page', () => {
        admin.redirectsToAdminMenuItemPage('Global Fields')
    })
  
    it('Redirects to Onboarding Tracker page', () => {
        admin.redirectsToAdminMenuItemPage('Onboarding Tracker')
    })
})

describe('Admin menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
        cy.visit('/')
    })
  
    it('Redirects to Account Setup page', () => {
        admin.redirectsToAdminMenuItemPage('ACCOUNT SETUP', false)
    })
  
    it('Redirects to About App page', () => {
        admin.redirectsToAdminMenuItemPage('About App', false)
    })
  
    it('Redirects to What\'s New page', () => {
        admin.redirectsToAdminMenuItemPage('What\'s New', false)
    })
  
    it('Redirects to Manage Users page', () => {
        admin.redirectsToAdminMenuItemPage('Manage Users', false)
    })
  
    it('Redirects to Super Users page', () => {
        admin.redirectsToAdminMenuItemPage('Super Users', false)
    })
  
    it('Redirects to Unlinked Media page', () => {
        admin.redirectsToAdminMenuItemPage('Unlinked Media', false)
    })
  
    it('Redirects to Removed Apps page', () => {
        admin.redirectsToAdminMenuItemPage('Removed Apps', false)
    })
  
    it('Redirects to Account Status page', () => {
        admin.redirectsToAdminMenuItemPage('Account Status', false)
    })
  
    it('Redirects to Global Fields page', () => {
        admin.redirectsToAdminMenuItemPage('Global Fields', false)
    })
  
    it('Redirects to Onboarding Tracker page', () => {
        admin.redirectsToAdminMenuItemPage('Onboarding Tracker', false)
    })
})