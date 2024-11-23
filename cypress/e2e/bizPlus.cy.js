import dayjs from "dayjs"
import bizPlus from "../pages/bizPlus"
import bizPlusTestData from "../test-data/bizPlus.json"
import login from "../pages/login"
import changeApplication from "../pages/changeApplication"
import admin from "../pages/admin"
import onboarding from "../pages/onboarding"
import loginTestData from "../test-data/login.json"

const today = dayjs().format('MMDDYYYYhhmmss')
const day = dayjs().format('MMDDYYYY')
const timezoneText = 'Timezone'
const bizEmail = `${bizPlusTestData.emailAddressPrefix+day+bizPlusTestData.emailAddressSuffix}`
const bizApplicationName = `${bizPlusTestData.appNamePrefix+day}`

describe('Biz+', () => {
  beforeEach('Go to login page', () => {
    cy.visit(bizPlusTestData.bizPlusUrl)
    bizPlus.redirectsToBizPlusPage()
  })

  it('Successful biz plus creation', () => {
    bizPlus.submitBizPlusForm(`${bizPlusTestData.appNamePrefix+today}`, `${bizPlusTestData.yourNamePrefix+today}`, 
        `${bizPlusTestData.emailAddressPrefix+today+bizPlusTestData.emailAddressSuffix}`, `${bizPlusTestData.password}`)

    cy.visit('/')
    login.redirectsToLoginPage()
    login.loginToCreatorPortal(timezoneText, bizPlusTestData.emailAddressPrefix+today+bizPlusTestData.emailAddressSuffix, bizPlusTestData.password)
  })

  it('Unsuccessful biz plus creation with invalid email address', () => {
    bizPlus.submitBizPlusForm(`${bizPlusTestData.appNamePrefix+today}`, `${bizPlusTestData.yourNamePrefix+today}`, 
        `${bizPlusTestData.emailAddressPrefix+today}`, `${bizPlusTestData.password}`, 'E-mail Address')
  })

  it('Unsuccessful biz plus creation with invalid password', () => {
    bizPlus.submitBizPlusForm(`${bizPlusTestData.appNamePrefix+today}`, `${bizPlusTestData.yourNamePrefix+today}`, 
        `${bizPlusTestData.emailAddressPrefix+today+bizPlusTestData.emailAddressSuffix}`, `${bizPlusTestData.invalidPassword}`, bizPlusTestData.errorInvalidPassword)
  })
})

describe('Biz+ checking', () => {
  before('Create biz+', () => {
    cy.visit(bizPlusTestData.bizPlusUrl)
    bizPlus.redirectsToBizPlusPage()
    bizPlus.submitBizPlusFormNoError(bizApplicationName, `${bizPlusTestData.yourNamePrefix+day}`, 
      bizEmail, `${bizPlusTestData.password}`)
  })

  beforeEach('Change application', () => {
    localStorage.setItem('auth', Cypress.env('accessToken'))
    cy.visit('/change_application')
    changeApplication.searchApplication(bizApplicationName)
    changeApplication.selectApplication(bizApplicationName)
  })

  it('Check Account Setup', () => {
    admin.redirectsToAccountSetupPage()
    admin.checkBizPlusAccountSetup()
  })

  it('Check enterprise menus are not present', () => {
    admin.checkEnterpriseMenus(false)
  })
})

describe('Biz+ onboarding', () => {
  before('Create biz+', () => {
    cy.visit(bizPlusTestData.bizPlusUrl)
    bizPlus.redirectsToBizPlusPage()
    bizPlus.submitBizPlusFormNoError(bizApplicationName, `${bizPlusTestData.yourNamePrefix+day}`, 
      bizEmail, `${bizPlusTestData.password}`)
  })

  beforeEach('Login to onboarding wizard', () => {
    cy.visit('/')
    login.redirectsToLoginPage()
    login.loginToCreatorPortal(loginTestData.onboardingWizardWelcomeText, bizEmail, `${bizPlusTestData.password}`)
  })

  it('Check biz+ onboarding tab', () => {
    onboarding.bizPlusTab()
  })

  it('Checks biz+ sections', () => {
    onboarding.bizPlusSection()
  })
})