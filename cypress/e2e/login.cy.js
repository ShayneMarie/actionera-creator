import login from "../pages/login"
import loginTestData from "../test-data/login.json"

describe('Successful login', () => {
  beforeEach('Go to login page', () => {
    cy.visit('/')
    login.redirectsToLoginPage()
  })

  it('Successful login with valid credentials', () => {
    login.loginToCreatorPortal(loginTestData.switchToOnboardingWizardView, loginTestData.validEmail, loginTestData.validPassword)
  })

  it('Successful login with uppercase email address', () => {
    login.loginToCreatorPortal(loginTestData.switchToOnboardingWizardView, loginTestData.validEmail.toUpperCase(), loginTestData.validPassword)
  })

  it('Successful login with leading and trailing white space', () => {
    login.loginToCreatorPortal(loginTestData.switchToOnboardingWizardView, ` ${loginTestData.validEmail} `, loginTestData.validPassword)
  })
})

describe('Unsuccessful login', () => {
  beforeEach('Go to login page', () => {
    cy.visit('/')
    login.redirectsToLoginPage()
  })

  it('Unsuccessful login with empty email address', () => {
    login.loginToCreatorPortal(loginTestData.errorInvalidEmailAddress)
  })

  it('Unsuccessful login with empty password', () => {
    login.loginToCreatorPortal(loginTestData.errorInvalidEmailAddress, loginTestData.validEmail)
  })

  it('Unsuccessful login invalid credentials', () => {
    login.loginToCreatorPortal(loginTestData.errorInvalidEmailAddress, loginTestData.validEmail, loginTestData.validEmail)
  })

  it('Unsuccessful login invalid password letter case', () => {
    login.loginToCreatorPortal(loginTestData.errorInvalidEmailAddress, loginTestData.validEmail, loginTestData.validPassword.toUpperCase())
  })
})