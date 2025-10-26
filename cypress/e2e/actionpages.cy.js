import actionpages from "../pages/actionpages"
import changeApplication from "../pages/changeApplication"
import changeApplicationTestData from "../test-data/changeApplication.json"
import actionpagesTestData from "../test-data/actionpages.json"
import maxValueText from "../test-data/maxValueText.json"
import common from "../pages/common"
import dayjs from "dayjs"

const today = dayjs().format('MMDDYYYYhhmmss')
const actionlistTitle = `Actionlist_${today}`
const actionBlogTitle = `Actionblog_${today}`

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

describe('Search actionpages', ()=> {
    beforeEach('Login to portal', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/change_application')
        changeApplication.searchApplication(changeApplicationTestData.testClient)
        changeApplication.selectApplication(changeApplicationTestData.testClient)
    })

    it('Redirects to ACTIONLISTS page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONLISTS')
        common.searchText('One')
        common.searchText('Two')
        common.searchText('Three')
        common.searchText('Four')
        common.searchText('not exist')
    })

    it('Redirects to ACTIONBLOG page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONBLOG')
        common.searchText('One')
        common.searchText('Two')
        common.searchText('Three')
        common.searchText('Four')
        common.searchText('not exist')
    })

    it('Redirects to Videos page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Videos')
        common.searchText('One')
        common.searchText('Two')
        common.searchText('Three')
        common.searchText('Four')
        common.searchText('not exist')
    })

    it('Redirects to Articles page', () => {
        actionpages.redirectsToActionpagesMenuItemPage('Articles')
        common.searchText('One')
        common.searchText('Two')
        common.searchText('Three')
        common.searchText('Four')
        common.searchText('not exist')
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
            actionpages.addNewActionlist(true, actionlistTitle, `${actionpagesTestData.description}_${today}`, actionpagesTestData.dailyFrequency)
        })

        it('Successful updating of actionlist with required', ()=> {
            actionpages.updateActionList(true, `${actionlistTitle}_update`, `${actionpagesTestData.description}_${today}_update`, actionpagesTestData.onceFrequency)
        })

        it('Successful deleting of actionlist', ()=> {
            actionpages.deleteActionList(`${actionlistTitle}_update`)
        })

        it('Successful adding of actionlists with all fields', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlist(false, actionlistTitle, `${actionpagesTestData.description}_${today}`, actionpagesTestData.dailyFrequency, actionpagesTestData.shortDescription,
                actionpagesTestData.videoUrl, actionpagesTestData.imageUrl, actionpagesTestData.tags, actionpagesTestData.callToActionText, actionpagesTestData.callToActionUrl, 
                actionpagesTestData.cost, actionpagesTestData.topics, true)

            context('Delete actionlists', ()=> {
                it('Successful deleting of actionlist', ()=> {
                    actionpages.deleteActionList(actionlistTitle)
                })
            })
        })

        it('Successful adding of actionlists with max values', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlistWithMaxValue(maxValueText.sixty, maxValueText.thirty, actionpagesTestData.dailyFrequency, maxValueText.thirty, maxValueText.url255, maxValueText.url255, maxValueText.forty, maxValueText.integer20)

            context('Delete actionlists', ()=> {
                it('Successful deleting of actionlist', ()=> {
                    actionpages.deleteActionList(maxValueText.sixty)
                })
            })
        })
    })

    describe('Actionlist - Negative Test', ()=> {
        it('Unsuccessful adding of actionlist with empty required fields' , ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.checkActionlistsRequiredFields(actionlistTitle, `${actionpagesTestData.description}_${today}`, actionpagesTestData.dailyFrequency)
        })

        it('Unsuccessful adding of actionlists with max values', ()=> {
            actionpages.clickAddActionlistButton()
            actionpages.addNewActionlistWithMaxValue(`${maxValueText.sixty}a`, `${maxValueText.thirty}a`, actionpagesTestData.dailyFrequency, `${maxValueText.thirty}a`, `${maxValueText.url255}a`, `${maxValueText.url255}a`, `${maxValueText.forty}a`, `${maxValueText.integer20}1`, true)
        })
    })
})

describe('Actionblogs', ()=> {
    beforeEach('Redirect to Actionblogs page', () => {
        localStorage.setItem('auth', Cypress.env('accessToken'))
        cy.visit('/change_application')
        changeApplication.searchApplication(changeApplicationTestData.testClient)
        changeApplication.selectApplication(changeApplicationTestData.testClient)
        actionpages.redirectsToActionpagesMenuItemPage('ACTIONBLOG')
    })

    describe('ACTIONBLOG - Success Test', ()=> {
        it('Successful adding of actionblog with required fields' , ()=> {
            actionpages.clickAddActionblogButton()
            actionpages.addNewActionblog(true, actionBlogTitle)
        })

        it('Successful updating of actionblog with required', ()=> {
            actionpages.updateActionblog(true, `${actionBlogTitle}_update`)
        })

        it('Successful deleting of actionblog', ()=> {
            actionpages.deleteActionblog(`${actionBlogTitle}_update`)
        })

        it('Successful adding of actionblog with all fields', ()=> {
            actionpages.clickAddActionblogButton()
            actionpages.addNewActionblog(false, actionBlogTitle, `${actionpagesTestData.description}_${today}`, actionpagesTestData.videoUrl, actionpagesTestData.imageUrl, 
                actionpagesTestData.audioUrl, actionpagesTestData.tags, actionpagesTestData.callToActionText, actionpagesTestData.callToActionUrl, actionpagesTestData.topics, true)

            context('Delete actionblog', ()=> {
                it('Successful deleting of actionblog', ()=> {
                    actionpages.deleteActionblog(actionBlogTitle)
                })
            })
        })

        it('Successful adding of actionblog with max values', ()=> {
            actionpages.clickAddActionblogButton()
            actionpages.addNewActionblogWithMaxValue(maxValueText.sixty, maxValueText.thirty, maxValueText.url255, maxValueText.url255, maxValueText.url255, maxValueText.fifty)

            context('Delete actionblog', ()=> {
                it('Successful deleting of actionblog', ()=> {
                    actionpages.deleteActionblog(maxValueText.sixty)
                })
            })
        })
    })

    describe('Actionblog - Negative Test', ()=> {
        it('Unsuccessful adding of actionblog with empty required fields' , ()=> {
            actionpages.clickAddActionblogButton()
            actionpages.checkActionblogRequiredFields(actionBlogTitle, `${actionpagesTestData.description}_${today}`)
        })

        it('Unsuccessful adding of actionblog with max values', ()=> {
            actionpages.clickAddActionblogButton()
            actionpages.addNewActionblogWithMaxValue(`${maxValueText.sixty}a`, `${maxValueText.thirty}a`, `${maxValueText.url255}a`, `${maxValueText.url255}a`, `${maxValueText.url255}a`, `${maxValueText.fifty}a`, true)
        })
    })
})