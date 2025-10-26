import dayjs from "dayjs"
import bizPlus from "../pages/bizPlus"
import bizPlusTestData from "../test-data/bizPlus.json"
import login from "../pages/login"
import changeApplication from "../pages/changeApplication"
import admin from "../pages/admin"
import onboarding from "../pages/onboarding"
import loginTestData from "../test-data/login.json"
import onboardingTestData from "../test-data/onboarding.json"

const today = dayjs().format('MMDDYYYYhhmmss')
const day = dayjs().format('MMDDYYYY')
const timezoneText = 'Timezone'
const bizEmail = `${bizPlusTestData.emailAddressPrefix+today+bizPlusTestData.emailAddressSuffix}`
const bizApplicationName = `${bizPlusTestData.appNamePrefix+today}`

describe('Biz+', () => {
  beforeEach('Go to login page', () => {
    cy.visit(bizPlusTestData.bizPlusUrl)
    bizPlus.redirectsToBizPlusPage()
  })

  it('Successful adding Home Content', () => {
    bizPlus.submitBizPlusForm(bizApplicationName, `${bizPlusTestData.yourNamePrefix+today}`, bizEmail, bizPlusTestData.password)

    cy.visit('/')
    login.redirectsToLoginPage()
    login.loginToCreatorPortal(timezoneText, bizEmail, bizPlusTestData.password)
    //login.loginToCreatorPortal(timezoneText, 'shayne+test+0825@techtank.ca', bizPlusTestData.password)

    onboarding.onboardingTab()
    onboarding.bizPlusAndEnterpriseSection()
    onboarding.updateContentHome(`${onboardingTestData.homeTitle+today}`, onboardingTestData.file, `${onboardingTestData.headLine+today}`, `${onboardingTestData.message+today}`)
    
    for (let i = 0; i < 3; i++) {
        onboarding.updateContentTopic(`${onboardingTestData.topicsTitle+today+i}`, onboardingTestData.file)
    }

    onboarding.updateContentProfile(`${onboardingTestData.profileTitle+today}`, `${onboardingTestData.profileName+today}`, `${onboardingTestData.businessName+today}`, onboardingTestData.willUseBusinessName, onboardingTestData.file, 
      `${onboardingTestData.bio+today}`, onboardingTestData.businessEmail, onboardingTestData.websiteLink, onboardingTestData.facebookLink, onboardingTestData.twitterLink, onboardingTestData.instagramLink, onboardingTestData.youtubeLink, onboardingTestData.linkedInLink)

    onboarding.updateContentGallery(`${onboardingTestData.galleryTitle+today}`, onboardingTestData.file, `${onboardingTestData.galleryDescription+today}`, 2)
    for (let i = 0; i < 4; i++) {
      onboarding.updateContentActionBlog(`${onboardingTestData.blogTitle+today+i}`, `${onboardingTestData.blogContent+today}`, onboardingTestData.blogImageUrl, onboardingTestData.blogPostOption, 2)
    }

    for (let i = 0; i < 7; i++) {
      onboarding.updateContentVideos(`${onboardingTestData.videoTitle+today+i}`, `${onboardingTestData.videoDescription+today}`, onboardingTestData.videoUrl, 2)
    }

    for (let i = 0; i < 7; i++) {
      onboarding.updateContentArticles(`${onboardingTestData.articleTitle+today+i}`, onboardingTestData.articleAuthor, `${onboardingTestData.articleDescription+today}`, 2, onboardingTestData.file)
    }

    for (let i = 0; i < 3; i++) {
      onboarding.updateContentJournals(`${onboardingTestData.journalsTitle+today+i}`, `${onboardingTestData.journalsdescription+today}`, 1, onboardingTestData.journalsQuestion1, onboardingTestData.journalsQuestion2, onboardingTestData.journalsQuestion3, onboardingTestData.journalsQuestion4, onboardingTestData.journalsQuestion5, onboardingTestData.file)
    }

    for (let i = 0; i < 3; i++) {
      onboarding.updateContentQAs(onboardingTestData.questionEmail, `${onboardingTestData.question+today+i}`, `${onboardingTestData.answer+today}`, 0)
    }
  })
})