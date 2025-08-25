const loginText = 'Log in to continue'
const loginUrl = 'https://sso-release.ae-qa.techtank.ca/admins/sign_in'

class login{
    redirectsToLoginPage(){
        cy.contains(loginText).click()
        cy.url().should('eq', loginUrl)
    }

    enterEmailAddress(email){
        cy.get('input[id="admin_email"]').should('exist')
        cy.get('input[id="admin_email"]').type(email)
    }

    enterPassword(password){
        cy.get('input[id="admin_password"]').should('exist')
        cy.get('input[id="admin_password"]').type(password)
    }

    loginToCreatorPortal(displayInPage, email, password){
        if(email) this.enterEmailAddress(email)
        if(password) this.enterPassword(password)

        cy.contains('Log in').click()
        
        if(displayInPage == 'Timezone'){
            cy.contains(displayInPage).should('exist')
            cy.contains('OK').click()
        }
    }
}

module.exports = new login()   