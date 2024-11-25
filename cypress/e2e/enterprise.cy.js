import dayjs from "dayjs"
import bizPlus from "../pages/bizPlus"
import bizPlusTestData from "../test-data/bizPlus.json"
import login from "../pages/login"
import changeApplication from "../pages/changeApplication"
import admin from "../pages/admin"
import onboarding from "../pages/onboarding"
import loginTestData from "../test-data/login.json"
import enterpriseTestData from "../test-data/enterprise.json"

const today = dayjs().format('MMDDYYYYhhmmss')
const day = dayjs().format('MMDDYYYY')
const enterpriseEmail = `${enterpriseTestData.emailAddressPrefix+day+bizPlusTestData.emailAddressSuffix}`
const enterpriseApplicationName = `${enterpriseTestData.appNamePrefix+day}`

describe('Entperprise', () => {
  beforeEach('Go to login page', () => {
    cy.visit(bizPlusTestData.bizPlusUrl)
    bizPlus.redirectsToBizPlusPage()
  })

  it('Successful enterprise creation', () => {
    bizPlus.submitBizPlusForm(`${enterpriseTestData.appNamePrefix+today}`, `${enterpriseTestData.yourNamePrefix+today}`, 
        `${enterpriseTestData.emailAddressPrefix+today+bizPlusTestData.emailAddressSuffix}`, `${enterpriseTestData.password}`)

    localStorage.setItem('auth', Cypress.env('accessToken'))
    cy.visit('/change_application')
    changeApplication.searchApplication(`${enterpriseTestData.appNamePrefix+today}`)
    changeApplication.selectApplication(`${enterpriseTestData.appNamePrefix+today}`)

    admin.redirectsToAdminMenuItemPage()
    admin.checkBizPlusAccountSetup()
    admin.updateBizPlusToEnterprise()

    admin.checkEnterpriseAccountSetup()
    admin.checkEnterpriseMenus()
  })
})

describe('Enterprise onboarding', () => {
    before('Create biz+', () => {
        cy.visit(bizPlusTestData.bizPlusUrl)
        bizPlus.redirectsToBizPlusPage()
        bizPlus.submitBizPlusFormNoError(enterpriseApplicationName, `${enterpriseTestData.yourNamePrefix+day}`, enterpriseEmail, `${enterpriseTestData.password}`)

        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/change_application')
        changeApplication.searchApplication(enterpriseApplicationName)
        changeApplication.selectApplication(enterpriseApplicationName)

        admin.redirectsToAdminMenuItemPage()
        admin.checkBizPlusAccountSetup()
        admin.updateBizPlusToEnterprise()
    })

    beforeEach('Login to onboarding wizard', () => {
        cy.clearLocalStorage()
        cy.visit('/')
        login.redirectsToLoginPage()
        login.loginToCreatorPortal(loginTestData.onboardingWizardWelcomeText, enterpriseEmail, `${enterpriseTestData.password}`)
    })

    it('Check enterprise onboarding tab', () => {
        onboarding.onboardingTab()
    })

    it('Checks enterprise sections', () => {
        onboarding.bizPlusAndEnterpriseSection()
    })
})