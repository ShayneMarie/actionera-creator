import dayjs from "dayjs"
import bizPlus from "../pages/bizPlus"
import bizPlusTestData from "../test-data/bizPlus.json"
import login from "../pages/login"

const today = dayjs().format('MMDDYYYYhhmmss')
const timezoneText = 'Timezone'

describe('Successful login', () => {
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
