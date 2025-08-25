import actionpagesTestData from "../test-data/actionpages.json"

class actionpages{
    redirectsToActionpagesMenuItemPage(menuitem){
        if(menuitem == actionpagesTestData.actionlistsText){
            cy.contains(actionpagesTestData.actionlistsText).click({ force: true })
            cy.contains(actionpagesTestData.actionListsPageText).should('exist')
            cy.url().should('contain', '/action-lists')
        } else if(menuitem == actionpagesTestData.actionblogText) {
            cy.contains(actionpagesTestData.actionblogText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.actionBlogsText).should('exist')
            cy.url().should('contain', '/tips')
        } else if(menuitem == actionpagesTestData.videosText) {
            cy.contains(actionpagesTestData.videosText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.videosText).should('exist')
            cy.url().should('contain', '/videos')
        } else if(menuitem == actionpagesTestData.articlesText) {
            cy.contains(actionpagesTestData.articlesText).click({ force: true })
            cy.contains(actionpagesTestData.articlesText).should('exist')
            cy.url().should('contain', '/articles')
        } else if(menuitem == actionpagesTestData.lessonsText) {
            cy.contains(actionpagesTestData.lessonsText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.lessonsText).should('exist')
            cy.url().should('contain', '/lessons')
        } else if(menuitem == actionpagesTestData.audioText) {
            cy.contains(actionpagesTestData.audioText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.audiosText).should('exist')
            cy.url().should('contain', '/audios')
        } else if(menuitem == actionpagesTestData.actionJournalText) {
            cy.contains(actionpagesTestData.actionJournalText).click({ force: true })
            cy.contains(actionpagesTestData.actionJournalsText).should('exist')
            cy.url().should('contain', '/journals')
        } else if(menuitem == actionpagesTestData.QandAText) {
            cy.contains(actionpagesTestData.QandAText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.QandAText).should('exist')
            cy.url().should('contain', '/questions')
        } else if(menuitem == actionpagesTestData.galleriesText) {
            cy.contains(actionpagesTestData.galleriesText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.galleriesText).should('exist')
            cy.url().should('contain', '/galleries')
        } else if(menuitem == actionpagesTestData.resourcesText) {
            cy.contains(actionpagesTestData.resourcesText).click({ force: true })
            cy.contains(actionpagesTestData.resourcesText).should('exist')
            cy.url().should('contain', '/resources')
        } else if(menuitem == actionpagesTestData.productsText) {
            cy.contains(actionpagesTestData.productsText).click({ force: true })
            cy.contains(actionpagesTestData.productsText).should('exist')
            cy.url().should('contain', '/products')
        } else if(menuitem == actionpagesTestData.specialOfferCodesText) {
            cy.contains(actionpagesTestData.specialOfferCodesText).click({ force: true }).wait(5000)
            cy.contains(actionpagesTestData.specialOfferCodesText).should('exist')
            cy.url().should('contain', '/offers')
        } else if(menuitem == actionpagesTestData.profilesText) {
            cy.contains(actionpagesTestData.profilesText).click({ force: true })
            cy.contains(actionpagesTestData.profilesText).should('exist')
            cy.url().should('contain', '/profiles')
        } else if(menuitem == actionpagesTestData.podcastsText) {
            cy.contains(actionpagesTestData.podcastsText).click({ force: true })
            cy.contains(actionpagesTestData.podcastsText).should('exist')
            cy.url().should('contain', '/podcasts')
        } else if(menuitem == actionpagesTestData.documentsText) {
            cy.contains(actionpagesTestData.documentsText).click({ force: true })
            cy.contains(actionpagesTestData.documentsText).should('exist')
            cy.url().should('contain', '/documents')
        }            
    }

    clickAddActionlistButton(){
        cy.contains(actionpagesTestData.addActionlistButtonText).should('exist')
        cy.contains(actionpagesTestData.addActionlistButtonText).click()

        cy.contains(actionpagesTestData.newActionlistText).should('exist')
        cy.url().should('contain', actionpagesTestData.newActionlistUrl)
    }

    clickUpdateButton(){
        cy.contains(actionpagesTestData.updateButtonText).should('exist')
        cy.contains(actionpagesTestData.updateButtonText).click()

        cy.contains(actionpagesTestData.editActionlistText).should('exist')
    }

    addNewActionlist(isRequired = true, title, description, frequency, shortDescription = '', videoUrl = '', imageUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', actionListCost = '', topicsOrListings = '', isUrl = true){
        cy.get(actionpagesTestData.titleTextLocator).type(title)
        cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)
        cy.get(actionpagesTestData.frequencyDropdownLocator).select(frequency)

        if(!isRequired){
            cy.get(actionpagesTestData.shortDescriptionLocator).type(shortDescription)
            cy.get(actionpagesTestData.videoUrlTextLocator).type(videoUrl)
            cy.get(actionpagesTestData.imageUrlTextLocator).type(imageUrl)
            cy.get(actionpagesTestData.tagsDropdownLocator).type(tags)
            cy.contains(tags).click({ force: true })
            cy.get(actionpagesTestData.callToActionTextLocator).type(callToActionText)
            cy.get(actionpagesTestData.callToActionUrlLocator).type(callToActionUrl)
            cy.get(actionpagesTestData.actionlistCostLocator).type(actionListCost)
            cy.get(actionpagesTestData.topicsOrListingDropdownLocator).type(topicsOrListings)
            cy.contains(topicsOrListings).click({ force: true })
        }

        cy.contains(actionpagesTestData.submitButtonText).click()

        cy.contains(actionpagesTestData.actionListsPageText).should('exist')
        cy.url().should('contain', '/action-lists')
        cy.contains(title).should('exist')
    }

    addNewActionlistWithMaxValue(title, description, frequency, shortDescription, videoUrl, imageUrl, callToActionText, actionListCost, isMoreThanMaxValue = false){
        cy.get(actionpagesTestData.titleTextLocator).type(title)
        cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)
        cy.get(actionpagesTestData.frequencyDropdownLocator).select(frequency)

        cy.get(actionpagesTestData.shortDescriptionLocator).type(shortDescription)
        cy.get(actionpagesTestData.videoUrlTextLocator).type(videoUrl)
        cy.get(actionpagesTestData.imageUrlTextLocator).type(imageUrl)
        cy.get(actionpagesTestData.callToActionTextLocator).type(callToActionText)
        cy.get(actionpagesTestData.actionlistCostLocator).type(actionListCost)

        cy.contains(actionpagesTestData.submitButtonText).click()

        if(isMoreThanMaxValue){
            cy.contains(actionpagesTestData.error20Characters).should("exist") //Action List Cost
            cy.contains(actionpagesTestData.error30Characters).should("exist") //Short Description
            cy.contains(actionpagesTestData.error40Characters).should("exist") //Call to Action Text
            cy.contains(actionpagesTestData.error60Characters).should("exist") //Title
            cy.contains(actionpagesTestData.error255Characters).should("exist") //Video and Image URL
            //cy.contains(actionpagesTestData.error65535Characters).should("exist") //Description
        } else {
            cy.contains(actionpagesTestData.actionListsPageText).should('exist')
            cy.url().should('contain', '/action-lists')
            cy.contains(title).should('exist')
        }
    }

    checkActionlistsRequiredFields(title, description, frequency, shortDescription){
        cy.get(actionpagesTestData.titleTextLocator).type(title)
        cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)
        cy.contains(actionpagesTestData.submitButtonText).click()
        cy.contains(actionpagesTestData.errorRequired).should('exist')

        cy.get(actionpagesTestData.titleTextLocator).clear()
        cy.get(actionpagesTestData.frequencyDropdownLocator).select(frequency)
        cy.contains(actionpagesTestData.submitButtonText).click()
        cy.contains(actionpagesTestData.errorRequired).should('exist')

        cy.get(actionpagesTestData.titleTextLocator).type(title)
        cy.get(actionpagesTestData.descriptionTextareaLocator).clear()
        cy.contains(actionpagesTestData.submitButtonText).click()
        cy.contains(actionpagesTestData.errorRequired).should('exist')
    }

    updateActionList(isRequired = true, title, description, frequency, shortDescription = '', videoUrl = '', imageUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', actionListCost = '', topicsOrListings = '', isUrl = true){
        cy.contains(updateButtonText).should('exist')
        cy.contains(updateButtonText).click()
        cy.get(titleTextLocator).clear().type(title)
        cy.get(descriptionTextareaLocator).type(descriptionTextareaLocator)
        cy.get(frequencyDropdownLocator).select(frequency)
        cy.contains(submitButtonText).click()    

        cy.contains(actionpagesTestData.actionListsPageText).should('exist')
        cy.url().should('contain', '/action-lists')
        cy.contains(title).should('exist')
    }

    deleteActionList(title){
        cy.get('tr[class="ant-table-row ant-table-row-level-0"]').first().within(()=>{
            cy.get('button[type="button"]').last().click({ force: true })
        })
        cy.contains(actionpagesTestData.actionlistDeleteModalText).should('exist')
        cy.contains(actionpagesTestData.deleteButtonText).click()

        cy.contains(title).should('not.exist')
    }

    clickAddActionblogButton(){
        cy.contains(actionpagesTestData.addActionblogButtonText).should('exist')
        cy.contains(actionpagesTestData.addActionblogButtonText).click()

        cy.contains(actionpagesTestData.newActionblogText).should('exist')
        cy.url().should('contain', actionpagesTestData.newActionblogUrl)
    }

    addNewActionblog(isRequired = true, title, description = '', videoUrl = '', imageUrl = '', audioUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', topicsOrListings = '', isUrl = true){
        cy.get(actionpagesTestData.titleTextLocator).type(title)

        if(!isRequired){
            cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)
            cy.get(actionpagesTestData.videoUrlTextLocator).type(videoUrl)
            cy.get(actionpagesTestData.imageUrlTextLocator).type(imageUrl)
            cy.get(actionpagesTestData.audioUrlTextLocator).type(audioUrl)
            cy.get(actionpagesTestData.tagsDropdownLocator).type(tags)
            cy.contains(tags).click({ force: true })
            cy.get(actionpagesTestData.callToActionTextLocator).type(callToActionText)
            cy.get(actionpagesTestData.callToActionUrlLocator).type(callToActionUrl)
            cy.get(actionpagesTestData.topicsOrListingDropdownLocator).type(topicsOrListings)
            cy.contains(topicsOrListings).click({ force: true })
        }

        cy.contains(actionpagesTestData.submitButtonText).click().wait(1000) 

        cy.contains(actionpagesTestData.actionBlogsText).should('exist')
        cy.url().should('contain', '/tips')
        cy.contains(title).should('exist')
    }

    addNewActionblogWithMaxValue(title, description, videoUrl, imageUrl, audioUrl, callToActionText, isMoreThanMaxValue = false){
        cy.get(actionpagesTestData.titleTextLocator).type(title)
        cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)

        cy.get(actionpagesTestData.videoUrlTextLocator).type(videoUrl)
        cy.get(actionpagesTestData.imageUrlTextLocator).type(imageUrl)
        cy.get(actionpagesTestData.audioUrlTextLocator).type(audioUrl)
        cy.get(actionpagesTestData.callToActionTextLocator).type(callToActionText)

        cy.contains(actionpagesTestData.submitButtonText).click().wait(1000) 

        if(isMoreThanMaxValue){
            cy.contains(actionpagesTestData.error20Characters).should("exist") //Action List Cost
            cy.contains(actionpagesTestData.error40Characters).should("exist") //Call to Action Text
            cy.contains(actionpagesTestData.error60Characters).should("exist") //Title
            cy.contains(actionpagesTestData.error255Characters).should("exist") //Video, Image and Audio URL
            //cy.contains(actionpagesTestData.error65535Characters).should("exist") //Description
        } else {
            cy.contains(actionpagesTestData.actionListsPageText).should('exist')
            cy.url().should('contain', '/action-lists')
            cy.contains(title).should('exist')
        }
    }

    checkActionblogRequiredFields(title, description){
        cy.get(actionpagesTestData.titleTextLocator).clear()
        cy.get(actionpagesTestData.descriptionTextareaLocator).type(description)
        cy.contains(actionpagesTestData.submitButtonText).click().wait(1000) 
        cy.contains(actionpagesTestData.errorRequired).should('exist')
    }

    updateActionblog(isRequired = true, title, description, videoUrl = '', imageUrl = '', audioUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', topicsOrListings = '', isUrl = true){
        cy.contains(actionpagesTestData.updateButtonText).should('exist')
        cy.contains(actionpagesTestData.updateButtonText).click()
        cy.get(actionpagesTestData.titleTextLocator).clear().type(title)
        cy.contains(actionpagesTestData.submitButtonText).click().wait(1000)    

        cy.contains(actionpagesTestData.actionBlogsText).should('exist')
        cy.url().should('contain', '/tips')
        cy.contains(title).should('exist')
    }

    deleteActionblog(title){
        cy.get('tr[class="ant-table-row ant-table-row-level-0"]').first().within(()=>{
            cy.get('button[type="button"]').last().click({ force: true })
        })
        cy.contains(actionpagesTestData.actionblogDeleteModalText).should('exist')
        cy.contains(actionpagesTestData.deleteButtonText).click()

        cy.contains(title).should('not.exist')
    }
}

module.exports = new actionpages()
