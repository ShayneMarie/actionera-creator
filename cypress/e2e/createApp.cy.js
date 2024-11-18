import createApp from "../pages/createApp"
import createAppTestData from '../test-data/createApp.json'
const dayjs = require('dayjs')
const todaysDate = dayjs().format('MMDDYYYYhhmmss')

describe('Create app', () => {
    beforeEach('Login', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
        createApp.redirectsToCreateAppPage()
    })

    it.skip('Successful creating an app', () => {
        createApp.creationOfNewApp(`Shayne_${todaysDate}`, createAppTestData.successCreateAppText)
    })

    it.skip('Successful creating an app with template', () => {
        createApp.creationOfNewAppWithTemplate(`Shayne_template_${todaysDate}`, createAppTestData.template, createAppTestData.successCreateAppText)
    })

    it('Unsuccessful creating an existing app', () => {
        createApp.creationOfNewApp(createAppTestData.existingApp, createAppTestData.errorExistingAppText)
    })

    it('Redirect to new app', () => {
        createApp.redirectsToNewAppPage()
    })
})