import actionpagesTestData from "../test-data/actionpages.json"

class common{
    searchText(text){
        cy.get(actionpagesTestData.searchTextfieldLocator).should('exist')
        cy.get(actionpagesTestData.searchTextfieldLocator).clear().type(text)

        if(text == 'One') {
            cy.contains('One').should('exist')
            cy.contains('Test Two').should('not.exist')
            cy.contains('Test Test Three').should('not.exist')
            cy.contains('Test Test Test Four').should('not.exist')
        } else if(text == 'Two') {
            cy.contains('One').should('not.exist')
            cy.contains('Test Two').should('exist')
            cy.contains('Test Test Three').should('not.exist')
            cy.contains('Test Test Test Four').should('not.exist')
        } else if(text == 'Three') {
            cy.contains('One').should('not.exist')
            cy.contains('Test Two').should('not.exist')
            cy.contains('Test Test Three').should('exist')
            cy.contains('Test Test Test Four').should('not.exist')
        } else if(text == 'Four') {
            cy.contains('One').should('not.exist')
            cy.contains('Test Two').should('not.exist')
            cy.contains('Test Test Three').should('not.exist')
            cy.contains('Test Test Test Four').should('exist')
        } else if(text == 'not exist') {
            cy.contains('No data').should('exist')
            cy.contains('One').should('not.exist')
            cy.contains('Test Two').should('not.exist')
            cy.contains('Test Test Three').should('not.exist')
            cy.contains('Test Test Test Four').should('not.exist')
        }
    }

}

module.exports = new common()
