import actionpages from "../pages/actionpages"
import changeApplication from "../pages/changeApplication"
import changeApplicationTestData from "../test-data/changeApplication.json"
import actionpagesTestData from "../test-data/actionpages.json"
import maxValueText from "../test-data/maxValueText.json"
import dayjs from "dayjs"

const today = dayjs().format('MMDDYYYYhhmmss')
const actionlistTitle = `Actionlist_${today}`

describe('Actionpages menus redirection - Super Admin', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/')
    })
  
    it('Redirects to ACTIONLISTS page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONLISTS')
    })

    it('Redirects to ACTIONBLOG page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONBLOG')
    })

    it('Redirects to Videos page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Videos')
    })

    it('Redirects to Articles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Articles')
    })
      
    it('Redirects to Lessons page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Lessons')
    })

    it('Redirects to Audio page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Audio')
    })

    it('Redirects to ActionJournal page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ActionJournal')
    })

    it('Redirects to Q&A page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Q&A')
    })

    it('Redirects to Galleries page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Galleries')
    })

    it('Redirects to Resources page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Resources')
    })
      
    it('Redirects to Products page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Products')
    })

    it('Redirects to Special Offer Codes page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Special Offer Codes')
    })
      
    it('Redirects to Profiles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Profiles')
    })

    it('Redirects to Podcasts page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Podcasts')
    })

    it('Redirects to Documents page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Documents')
    })
})

describe.skip('Actionpages menus redirection - Creator', () => {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessTokenCreator'))
        cy.visit('/')
    })
  
    it('Redirects to ACTIONLISTS page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONLISTS')
    })

    it('Redirects to ACTIONBLOG page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONBLOG')
    })

    it('Redirects to Videos page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Videos')
    })

    it('Redirects to Articles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Articles')
    })
      
    it('Redirects to Lessons page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Lessons')
    })

    it('Redirects to Audio page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Audio')
    })

    it('Redirects to ActionJournal page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ActionJournal')
    })

    it('Redirects to Q&A page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Q&A')
    })

    it('Redirects to Galleries page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Galleries')
    })

    it('Redirects to Resources page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Resources')
    })
      
    it('Redirects to Products page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Products')
    })

    it('Redirects to Special Offer Codes page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Special Offer Codes')
    })
      
    it('Redirects to Profiles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Profiles')
    })

    it('Redirects to Podcasts page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Podcasts')
    })

    it('Redirects to Documents page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Documents')
    })
})

describe('Actionlists', ()=> {
    beforeEach('Redirect to Actionlist page', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/change_application')
        changeApplication.searchApplication(changeApplicationTestData.testClient)
        changeApplication.selectApplication(changeApplicationTestData.testClient)
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONLISTS')
    })

    describe('Actionlist - Success Test', ()=> {
        it('Successful adding of actionlist with required fields' , ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlist(true, actionlistTitle, `${actionpagesTestData.actionlistDescription}_${today}`, actionpagesTestData.dailyFrequency)
        })

        it('Successful updating of actionlist with required', ()=> {
            actionpages.updateActionList(true, `${actionlistTitle}_update`, `${actionpagesTestData.actionlistDescription}_${today}_update`, actionpagesTestData.onceFrequency)
        })

        it('Successful deleting of actionlist', ()=> {
            actionpages.deleteActionList(`${actionlistTitle}_update`)
        })

        it('Successful adding of actionlists with all fields', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlist(false, actionlistTitle, `${actionpagesTestData.actionlistDescription}_${today}`, actionpagesTestData.dailyFrequency, actionpagesTestData.shortDescription,
                actionpagesTestData.videoUrl, actionpagesTestData.imageUrl, actionpagesTestData.tags, actionpagesTestData.callToActionText, actionpagesTestData.callToActionUrl, 
                actionpagesTestData.cost, actionpagesTestData.topics, true)

            describe('Delete actionlists', ()=> {
                it('Successful deleting of actionlist', ()=> {
                    actionpages.deleteActionList(actionlistTitle)
                })
            })
        })

        it('Successful adding of actionlists with max values', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlistWithMaxValue(maxValueText.sixty, maxValueText.thirty, actionpagesTestData.dailyFrequency, maxValueText.thirty, maxValueText.url255, maxValueText.url255, maxValueText.forty, maxValueText.integer20)

            describe('Delete actionlists', ()=> {
                it('Successful deleting of actionlist', ()=> {
                    actionpages.deleteActionList(maxValueText.sixty)
                })
            })
        })
    })

    describe('Actionlist - Negative Test', ()=> {
        it('Unsuccessful adding of actionlist with empty required fields' , ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.checkRequiredFields(actionlistTitle, `${actionpagesTestData.actionlistDescription}_${today}`, actionpagesTestData.dailyFrequency)
        })

        it('Unsuccessful adding of actionlists with max values', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlistWithMaxValue(`${maxValueText.sixty}a`, `${maxValueText.thirty}a`, actionpagesTestData.dailyFrequency, `${maxValueText.thirty}a`, `${maxValueText.url255}a`, `${maxValueText.url255}a`, `${maxValueText.forty}a`, `${maxValueText.integer20}1`, true)
        })
    })
})