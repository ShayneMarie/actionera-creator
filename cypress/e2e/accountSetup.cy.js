import createApp from "../pages/createApp"
import admin from "../pages/admin"
import createAppTestData from '../test-data/createApp.json'
const dayjs = require('dayjs')
const todaysDate = dayjs().format('MMDDYYYYhhmmss')
const day = dayjs().format('MMDDYYYY')
const appForTesting = `Shayne_${day}_forTesting`

describe('Account Setup Manipulation', () => {
    before('Login', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
        createApp.redirectsToCreateAppPage()
        createApp.creationOfNewApp(appForTesting)
        //createApp.checkIfAppIsExisting()
        createApp.redirectsToNewAppPage(appForTesting)
        //admin.redirectsToAdminMenuItemPage('ACCOUNT SETUP')
    })
})