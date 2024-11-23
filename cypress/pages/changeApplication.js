const searchLocator = 'input[id="search"]'

class changeApplciation{
    searchApplication(application){
        cy.get(searchLocator).type(application)
    }

    selectApplication(application){
        cy.contains(application).click()
        cy.contains(`${application} - Home`)
    }
}

module.exports = new changeApplciation()
