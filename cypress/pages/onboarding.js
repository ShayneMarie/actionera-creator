const progressTabText = 'Progress'
const designTabText = 'DESIGN'
const revniewTabText = 'REVIEW'
const buildTabText = 'BUILD'
const submitTabText = 'SUBMIT'
const liveTabText = 'LIVE!'
const appInfoTabText = 'App Info.'

const buildAndSubmitSectionText = 'Build and Submit (admin)'
const appDesignSectionText = 'App Design'
const uploadContentSectionText = 'Upload Content'
const appStoreInfoSectionText = 'App Store Info'
const developerAccountsSectionText = 'Developer Accounts'

class onboarding{
    bizPlusTab(){
        cy.contains(progressTabText).should('exist')
        cy.contains(designTabText).should('exist')
        cy.contains(revniewTabText).should('exist')
        cy.contains(buildTabText).should('exist')
        cy.contains(submitTabText).should('exist')
        cy.contains(liveTabText).should('exist')
        cy.contains(appInfoTabText).should('exist')
    }

    bizPlusSection(isAdmin = false){
        if (isAdmin) cy.contains(buildAndSubmitSectionText).should('exist')
        
        cy.contains(appDesignSectionText).should('exist')
        cy.contains(uploadContentSectionText).should('exist')
        cy.contains(appStoreInfoSectionText).should('exist')
        cy.contains(developerAccountsSectionText).should('exist')
    }
}

module.exports = new onboarding()   