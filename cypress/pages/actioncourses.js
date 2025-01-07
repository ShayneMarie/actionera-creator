const categoriesText = 'Categories'
const createEditText = 'Create/Edit'

const courseCategoriesListText = 'Course Categories List'
const courseListText= 'Course List'

class actioncourses{
    redirectsToActionCoursesMenuItemPage(menuitem){
        if(menuitem == categoriesText){
            cy.contains(categoriesText).click({ force: true })
            cy.contains(courseCategoriesListText).should('exist')
            cy.url().should('contain', '/course_categories')
        } else if(menuitem == createEditText) {
            cy.contains(createEditText).click({ force: true }).wait(5000)
            cy.contains(courseListText).should('exist')
            cy.url().should('contain', '/courses')
        } 
    }
}

module.exports = new actioncourses()
