const progressTabText = 'Progress'
const designTabText = 'DESIGN'
const revniewTabText = 'REVIEW'
const buildTabText = 'BUILD'
const submitTabText = 'SUBMIT'
const liveTabText = 'LIVE!'
const appInfoTabText = 'App Info.'
const addItemText = 'Add Item'

const buildAndSubmitSectionText = 'Build and Submit (admin)'
const appDesignSectionText = 'App Design'
const uploadContentSectionText = 'Upload Content'
const appStoreInfoSectionText = 'App Store Info'
const developerAccountsSectionText = 'Developer Accounts'
const uploadNowText = 'Upload Now'

const accordionLocator = 'svg[data-icon="chevron-down"]'
const welcomeScreenLocator = 'img[alt="Welcome Screen"]'
const titleLocator = 'input[id="title"]'
const fileUploadLocator = 'input[type="file"]'
const welcomeHeadlineLocator = 'input[id="welcome_headline"]'
const welcomeMessageLocator = 'textarea[id="welcome_message"]'
const submitLocator = 'button[type="submit"]'
const topicImageLocator = 'img[alt="Topic"]'
const topicNameLocator = 'input[id="topic"]'
const profileImageLocator = 'img[alt="Profile"]'
const profileTitleLocator = 'input[id="title"]'
const profileNameLocator = 'input[id="profile_name"]'
const businessNameLocator = 'input[id="business_name"]'
const willUseBusinessNameCheckboxLocator = 'input[id="will_use_business_name"]'
const bioLocator = 'textarea[id="bio"]'
const businessEmailLocator = 'input[id="email"]'
const websiteLinkLocator = 'input[id="web_url"]'
const facebookLinkLocator = 'input[id="facebook_url"]'
const twitterLinkLocator = 'input[id="twitter_url"]'
const instagramLinkLocator = 'input[id="instagram_url"]'
const youtubeLinkLocator = 'input[id="youtube_url"]'
const linkedInLinkLocator = 'input[id="linkedin_url"]'
const galleryImageLocator = 'img[alt="Gallery"]'
const galleryTitleLocator = 'input[id="title"]'
const galleryDescriptionLocator = 'textarea[id="gallery_description"]'
const topicsSearchLocator = 'input[id="search_input"]'
const gallerySearchOptionLocatory = 'li[class^="option"]'
const blogImageLocator = 'img[alt="Video Screenshot"]'
const blogTitleLocator = 'input[id="title"]'
const blogContentLocator = 'textarea[id="video_description"]'
const blogImageUrlLocator = 'input[id="image_url"]'
const videoImageLocator = 'img[alt="Video Screenshot"]'
const videoTitleLocator = 'input[id="name"]'
const videoDescriptionLocator = 'textarea[id="video_description"]'
const youtubeOrVimeoLocator = 'input[id="youtube_or_vimeo"]'
const articleImageLocator = 'img[alt="Video Screenshot"]'
const articleTitleLocator = 'input[id="title"]'
const articleAuthorLocator = 'input[id="author"]'
const articleContentLocator = 'textarea[id="video_description"]'
const journalImageLocator = 'img[alt="Journal"]'
const journalTitleLocator = 'input[id="title"]'
const journalDescriptionLocator = 'textarea[id="journal_description"]'
const question1Locator = 'textarea[id="journal_1"]'
const question2Locator = 'textarea[id="journal_2"]'
const question3Locator = 'textarea[id="journal_3"]'
const question4Locator = 'textarea[id="journal_4"]'
const question5Locator = 'textarea[id="journal_5"]'

class onboarding{
    
    onboardingTab(){
        cy.contains(progressTabText).should('exist')
        cy.contains(designTabText).should('exist')
        cy.contains(revniewTabText).should('exist')
        cy.contains(buildTabText).should('exist')
        cy.contains(submitTabText).should('exist')
        cy.contains(liveTabText).should('exist')
        cy.contains(appInfoTabText).should('exist')
    }

    bizPlusAndEnterpriseSection(isAdmin = false){
        if (isAdmin) cy.contains(buildAndSubmitSectionText).should('exist')
        
        cy.contains(appDesignSectionText).should('exist')
        cy.contains(uploadContentSectionText).should('exist')
        cy.contains(appStoreInfoSectionText).should('exist')
        cy.contains(developerAccountsSectionText).should('exist')
    }

    updateContentHome(title, welcomeBanner, welcomeHeadline, welcomeMessage){
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click()

        cy.get(welcomeScreenLocator).should('exist')
        cy.get(titleLocator).should('exist')
        cy.get(fileUploadLocator).should('exist')
        cy.get(welcomeHeadlineLocator).should('exist')
        cy.get(welcomeMessageLocator).should('exist')

        cy.get(titleLocator).type(title)
        cy.get(fileUploadLocator).last().selectFile(welcomeBanner, { force: true });
        cy.get(welcomeHeadlineLocator).type(welcomeHeadline)
        cy.get(welcomeMessageLocator).type(welcomeMessage)

        cy.get(submitLocator).last().click()

        cy.get(welcomeScreenLocator).should('not.exist')
        cy.get(titleLocator).should('not.exist')
        cy.get(welcomeHeadlineLocator).should('not.exist')
        cy.get(welcomeMessageLocator).should('not.exist')
    }

    updateContentTopic(title, file = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(topicImageLocator).should('exist')
        cy.get(topicNameLocator).should('exist')
        cy.get(fileUploadLocator).should('exist')

        cy.get(topicNameLocator).type(title)
        if(file != '') cy.get(fileUploadLocator).last().selectFile(file, { force: true });

        cy.get(submitLocator).last().click()

        cy.get(topicImageLocator).should('not.exist')
        cy.get(topicNameLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click()
    }

    updateContentProfile(profileTitle = '', profileName, businessName = '', willUseBusinessName, file, bio, businessEmail = '', websiteLink = '',
        facebookLink = '', twitterLink = '', instagramLink = '', youtubeLink = '', linkedInLink = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(profileImageLocator).should('exist')
        cy.get(profileTitleLocator).should('exist')
        cy.get(profileNameLocator).should('exist')
        cy.get(businessNameLocator).should('exist')
        cy.get(willUseBusinessNameCheckboxLocator).should('exist')
        cy.get(bioLocator).should('exist')
        cy.get(businessEmailLocator).should('exist')
        cy.get(websiteLinkLocator).should('exist')
        cy.get(facebookLinkLocator).should('exist')
        cy.get(twitterLinkLocator).should('exist')
        cy.get(instagramLinkLocator).should('exist')
        cy.get(youtubeLinkLocator).should('exist')
        cy.get(linkedInLinkLocator).should('exist')
        cy.get(fileUploadLocator).should('exist')

        if(profileTitle != '') cy.get(profileTitleLocator).type(profileTitle)
        cy.get(profileNameLocator).type(profileName)
        cy.get(businessNameLocator).type(businessName)
        cy.get(fileUploadLocator).last().selectFile(file, { force: true });
        if(willUseBusinessNameCheckboxLocator) cy.get(willUseBusinessNameCheckboxLocator).click()
        cy.get(bioLocator).type(bio)
        cy.get(businessEmailLocator).type(businessEmail)
        if(websiteLinkLocator != '') cy.get(websiteLinkLocator).type(websiteLink)
        if(facebookLinkLocator != '') cy.get(facebookLinkLocator).type(facebookLink)
        if(twitterLinkLocator != '') cy.get(twitterLinkLocator).type(twitterLink)
        if(instagramLinkLocator != '') cy.get(instagramLinkLocator).type(instagramLink)
        if(youtubeLinkLocator != '') cy.get(youtubeLinkLocator).type(youtubeLink)
        if(linkedInLinkLocator != '') cy.get(linkedInLinkLocator).type(linkedInLink)

        cy.get(submitLocator).last().click()

        cy.get(profileImageLocator).should('not.exist')
        cy.get(profileTitleLocator).should('not.exist')
        cy.get(profileNameLocator).should('not.exist')
        cy.get(businessNameLocator).should('not.exist')
        cy.get(willUseBusinessNameCheckboxLocator).should('not.exist')
        cy.get(businessEmailLocator).should('not.exist')
        cy.get(bioLocator).should('not.exist')
        cy.get(websiteLinkLocator).should('not.exist')
        cy.get(facebookLinkLocator).should('not.exist')
        cy.get(twitterLinkLocator).should('not.exist')
        cy.get(instagramLinkLocator).should('not.exist')
        cy.get(youtubeLinkLocator).should('not.exist')
        cy.get(linkedInLinkLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click()
    }

    updateContentGallery(title, file, description, topic = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(galleryImageLocator).should('exist')
        cy.get(galleryTitleLocator).should('exist')
        cy.get(galleryDescriptionLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')

        cy.get(galleryTitleLocator).type(title)
        cy.get(galleryDescriptionLocator).type(description)
        cy.get(fileUploadLocator).last().selectFile([file, file, file, file, file, file, file, file, file, file, file, file, file, file, file], { force: true });
        cy.contains(uploadNowText).click().wait(5000)
        cy.wait(5000)
        cy.contains('Uploaded').should('exist')
        if(topic != '') {
            cy.get(topicsSearchLocator).click()
            cy.get(gallerySearchOptionLocatory).eq(topic).click()
        }

        cy.get(submitLocator).last().click({ force: true })

        cy.get(galleryImageLocator).should('not.exist')
        cy.get(galleryTitleLocator).should('not.exist')
        cy.get(galleryDescriptionLocator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click()
    }

    updateContentActionBlog(title, content, imageUrl, postOption = 'URL', topic = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(blogImageLocator).should('exist')
        cy.get(blogTitleLocator).should('exist')
        cy.get(blogContentLocator).should('exist')
        cy.get(blogImageUrlLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')
        cy.get(fileUploadLocator).should('exist')

        cy.get(blogTitleLocator).type(title)
        cy.get(blogContentLocator).type(content)
        
        if(postOption == 'URL') cy.get(blogImageUrlLocator).type(imageUrl)
        else cy.get(fileUploadLocator).last().selectFile(file, { force: true });

        if(topic != '') {
            cy.get(topicsSearchLocator).click()
            cy.get(gallerySearchOptionLocatory).eq(topic).click()
        }

        cy.get(submitLocator).last().click({force: true})

        cy.get(blogImageLocator).should('not.exist')
        cy.get(blogTitleLocator).should('not.exist')
        cy.get(blogContentLocator).should('not.exist')
        cy.get(blogImageUrlLocator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click()
    }

    updateContentVideos(title, description, url, topic = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(videoImageLocator).should('exist')
        cy.get(videoTitleLocator).should('exist')
        cy.get(videoDescriptionLocator).should('exist')
        cy.get(youtubeOrVimeoLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')

        cy.get(videoTitleLocator).type(title)
        cy.get(videoDescriptionLocator).type(description)
        cy.get(youtubeOrVimeoLocator).type(url)
        if(topic != '') {
            cy.get(topicsSearchLocator).click()
            cy.get(gallerySearchOptionLocatory).eq(topic).click()
        }


        cy.get(submitLocator).last().click({force: true})

        cy.get(videoImageLocator).should('not.exist')
        cy.get(videoTitleLocator).should('not.exist')
        cy.get(videoDescriptionLocator).should('not.exist')
        cy.get(youtubeOrVimeoLocator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click()
    }

    updateContentArticles(title, author, description, topic, file = ''){    
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(articleImageLocator).should('exist')
        cy.get(articleTitleLocator).should('exist')
        cy.get(articleAuthorLocator).should('exist')
        cy.get(articleContentLocator).should('exist')
        cy.get(fileUploadLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')

        cy.get(articleTitleLocator).type(title)
        cy.get(articleAuthorLocator).type(author)
        cy.get(articleContentLocator).type(description)
        if(file != '') cy.get(fileUploadLocator).last().selectFile(file, { force: true });
        cy.get(topicsSearchLocator).click()
        cy.get(gallerySearchOptionLocatory).eq(topic).click()


        cy.get(submitLocator).last().click({force: true})

        cy.get(articleImageLocator).should('not.exist')
        cy.get(articleTitleLocator).should('not.exist')
        cy.get(articleAuthorLocator).should('not.exist')
        cy.get(articleContentLocator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click({force: true})
    }

    updateContentJournals(title, description, topic, question1, question2 = '', question3 = '', question4 = '', question5 = '', file = ''){  
        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(journalImageLocator).should('exist')
        cy.get(journalTitleLocator).should('exist')
        cy.get(journalDescriptionLocator).should('exist')
        cy.get(question1Locator).should('exist')
        cy.get(question2Locator).should('exist')
        cy.get(question3Locator).should('exist')
        cy.get(question4Locator).should('exist')
        cy.get(question5Locator).should('exist')
        cy.get(fileUploadLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')

        cy.get(journalTitleLocator).type(title)
        cy.get(journalDescriptionLocator).type(description)
        cy.get(question1Locator).type(question1)        
        if(file != '') cy.get(question2Locator).type(question2)
        if(file != '') cy.get(question3Locator).type(question3)
        if(file != '') cy.get(question4Locator).type(question4)
        if(file != '') cy.get(question5Locator).type(question5)
        if(file != '') cy.get(fileUploadLocator).last().selectFile(file, { force: true });
        cy.get(topicsSearchLocator).click()
        cy.get(gallerySearchOptionLocatory).eq(topic).click()

        cy.get(submitLocator).last().click({force: true})

        cy.get(journalImageLocator).should('not.exist')
        cy.get(journalTitleLocator).should('not.exist')
        cy.get(journalDescriptionLocator).should('not.exist')
        cy.get(question1Locator).should('not.exist')
        cy.get(question2Locator).should('not.exist')
        cy.get(question3Locator).should('not.exist')
        cy.get(question4Locator).should('not.exist')
        cy.get(question5Locator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click({force: true})
    }

    updateContentQAs(questionEmail, question, answer, topic){  
        const qaImageLocator = 'img[alt="Q&A"]'
        const questionEmailLocator = 'input[id="email"]'
        const questionLocator = 'textarea[id="question"]'
        const answerLocator = 'textarea[id="answer"]'

        cy.get(accordionLocator).eq(1).click()
        cy.contains(addItemText).click({force: true})

        cy.get(qaImageLocator).should('exist')
        cy.get(questionEmailLocator).should('exist')
        cy.get(questionLocator).should('exist')
        cy.get(answerLocator).should('exist')
        cy.get(topicsSearchLocator).should('exist')

        cy.get(questionEmailLocator).type(questionEmail)
        cy.get(questionLocator).type(question)
        cy.get(answerLocator).type(answer)
        cy.get(topicsSearchLocator).click()
        cy.get(gallerySearchOptionLocatory).eq(topic).click()

        cy.get(submitLocator).last().click({force: true})

        cy.get(qaImageLocator).should('not.exist')
        cy.get(questionEmailLocator).should('not.exist')
        cy.get(questionLocator).should('not.exist')
        cy.get(answerLocator).should('not.exist')
        cy.get(topicsSearchLocator).should('not.exist')
        cy.get(accordionLocator).eq(1).click({force:true})
    }
}

module.exports = new onboarding()   