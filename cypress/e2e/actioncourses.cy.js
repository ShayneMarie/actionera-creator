import actioncourses from "../pages/actioncourses"

describe('Action Courses menus redirection - Super Admin', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to Categories page', () => {
        actioncourses.redirectsToActionCoursesMenuItemPage('Categories')
    })

    it('Redirects to Create/Edit page', () => {
        actioncourses.redirectsToActionCoursesMenuItemPage('Create/Edit')
    })
})

describe('Action Courses menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
        cy.visit('/')
    })
  
    it('Redirects to Categories page', () => {
        actioncourses.redirectsToActionCoursesMenuItemPage('Categories')
    })

    it('Redirects to Create/Edit page', () => {
        actioncourses.redirectsToActionCoursesMenuItemPage('Create/Edit')
    })
})