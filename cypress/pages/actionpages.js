const actionlistsText = 'ACTIONLISTS'
const actionblogText = 'ACTIONBLOG'
const videosText = 'Videos'
const articlesText = 'Articles'
const lessonsText = 'Lessons'
const audioText = 'Audio'
const actionJournalText = 'ActionJournal'
const QandAText = 'Q&A'
const galleriesText = 'Galleries'
const resourcesText = 'Resources'
const productsText = 'Products'
const specialOfferCodesText = 'Special Offer Codes'
const profilesText = 'Profiles'
const podcastsText = 'Podcasts'
const documentsText = 'Documents'

const actionListsPageText = 'ActionLists'
const actionBlogsText = 'ActionBlogs'
const audiosText = 'Audio'
const actionJournalsText = 'ActionJournals'

const addActionlistButtonText = 'Add ActionList'
const newActionlistText = 'New ActionList'
const newActionlistUrl = '/action-lists/new'
const titleTextLocator = 'input[id="title"]'
const descriptionTextareaLocator = 'textarea[id="description"]'
const frequencyDropdownLocator = 'select[id="frequency"]'
const editActionlistText = 'Edit ActionList'
const actionlistDeleteModalText = 'Are you sure you want to delete this ActionList?'

const updateButtonText = 'Update'
const submitButtonText = 'Submit'
const deleteButtonText = 'Delete'

class actionpages{
    redirectsToActionpagesMenuItemPage(menuitem){
        if(menuitem == actionlistsText){
            cy.contains(actionlistsText).click({ force: true })
            cy.contains(actionListsPageText).should('exist')
            cy.url().should('contain', '/action-lists')
        } else if(menuitem == actionblogText) {
            cy.contains(actionblogText).click({ force: true }).wait(5000)
            cy.contains(actionBlogsText).should('exist')
            cy.url().should('contain', '/tips')
        } else if(menuitem == videosText) {
            cy.contains(videosText).click({ force: true }).wait(5000)
            cy.contains(videosText).should('exist')
            cy.url().should('contain', '/videos')
        } else if(menuitem == articlesText) {
            cy.contains(articlesText).click({ force: true })
            cy.contains(articlesText).should('exist')
            cy.url().should('contain', '/articles')
        } else if(menuitem == lessonsText) {
            cy.contains(lessonsText).click({ force: true }).wait(5000)
            cy.contains(lessonsText).should('exist')
            cy.url().should('contain', '/lessons')
        } else if(menuitem == audioText) {
            cy.contains(audioText).click({ force: true }).wait(5000)
            cy.contains(audiosText).should('exist')
            cy.url().should('contain', '/audios')
        } else if(menuitem == actionJournalText) {
            cy.contains(actionJournalText).click({ force: true })
            cy.contains(actionJournalsText).should('exist')
            cy.url().should('contain', '/journals')
        } else if(menuitem == QandAText) {
            cy.contains(QandAText).click({ force: true }).wait(5000)
            cy.contains(QandAText).should('exist')
            cy.url().should('contain', '/questions')
        } else if(menuitem == galleriesText) {
            cy.contains(galleriesText).click({ force: true }).wait(5000)
            cy.contains(galleriesText).should('exist')
            cy.url().should('contain', '/galleries')
        } else if(menuitem == resourcesText) {
            cy.contains(resourcesText).click({ force: true })
            cy.contains(resourcesText).should('exist')
            cy.url().should('contain', '/resources')
        } else if(menuitem == productsText) {
            cy.contains(productsText).click({ force: true })
            cy.contains(productsText).should('exist')
            cy.url().should('contain', '/products')
        } else if(menuitem == specialOfferCodesText) {
            cy.contains(specialOfferCodesText).click({ force: true }).wait(5000)
            cy.contains(specialOfferCodesText).should('exist')
            cy.url().should('contain', '/offers')
        } else if(menuitem == profilesText) {
            cy.contains(profilesText).click({ force: true })
            cy.contains(profilesText).should('exist')
            cy.url().should('contain', '/profiles')
        } else if(menuitem == podcastsText) {
            cy.contains(podcastsText).click({ force: true })
            cy.contains(podcastsText).should('exist')
            cy.url().should('contain', '/podcasts')
        } else if(menuitem == documentsText) {
            cy.contains(documentsText).click({ force: true })
            cy.contains(documentsText).should('exist')
            cy.url().should('contain', '/documents')
        }            
    }

    clickAddActionlistButton(){
        cy.contains(addActionlistButtonText).should('exist')
        cy.contains(addActionlistButtonText).click()

        cy.contains(newActionlistText).should('exist')
        cy.url().should('contain', newActionlistUrl)
    }

    clickUpdateButton(){
        cy.contains(updateButtonText).should('exist')
        cy.contains(updateButtonText).click()

        cy.contains(editActionlistText).should('exist')
    }

    addNewActionlist(isRequired = true, title, description, frequency, shortDescription = '', videoUrl = '', imageUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', actionListCost = '', topicsOrListings = '', isUrl = true){
        cy.get(titleTextLocator).type(title)
        cy.get(descriptionTextareaLocator).type(descriptionTextareaLocator)
        cy.get(frequencyDropdownLocator).select(frequency)
        cy.contains(submitButtonText).click()

        if(!isRequired){
            //update
        }

        cy.contains(actionListsPageText).should('exist')
        cy.url().should('contain', '/action-lists')
        cy.contains(title).should('exist')
    }

    updateActionList(isRequired = true, title, description, frequency, shortDescription = '', videoUrl = '', imageUrl = '', tags = '', callToActionText = '',
        callToActionUrl = '', actionListCost = '', topicsOrListings = '', isUrl = true){
        cy.contains(updateButtonText).should('exist')
        cy.contains(updateButtonText).click()
        cy.get(titleTextLocator).type(title)
        cy.get(descriptionTextareaLocator).type(descriptionTextareaLocator)
        cy.get(frequencyDropdownLocator).select(frequency)
        cy.contains(submitButtonText).click()    

        cy.contains(actionListsPageText).should('exist')
        cy.url().should('contain', '/action-lists')
        cy.contains(title).should('exist')
    }

    deleteActionList(title){
        cy.get('tr[class="ant-table-row ant-table-row-level-0"]').first().within(()=>{
            cy.get('button[type="button"]').last().click()
        })
        cy.contains(actionlistDeleteModalText).should('exist')
        cy.contains(deleteButtonText).click()

        cy.contains(title).should('not.exist')
    }
}

module.exports = new actionpages()
