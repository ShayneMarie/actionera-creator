import actioncourses from "../pages/actioncourses"

describe('Action Courses menus redirection', () => {
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