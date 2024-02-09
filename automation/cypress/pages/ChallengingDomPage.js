import { CHALLENGING_DOM_PAGE_BLUE_BUTTON_LOCATOR, 
    CHALLENGING_DOM_PAGE_RED_BUTTON_LOCATOR, 
    CHALLENGING_DOM_PAGE_GREEN_BUTTON_LOCATOR,
    CHALLENGING_DOM_PAGE_EDIT_BUTTON_LIST_LOCATOR,
    CHALLENGING_DOM_PAGE_DELETE_BUTTON_LIST_LOCATOR } from '../constants/Locators.js';

class ChallengingDomPage {
    
    elements = {
        blueButtonElement : () => cy.xpath(CHALLENGING_DOM_PAGE_BLUE_BUTTON_LOCATOR),
        redButtonElement : () => cy.xpath(CHALLENGING_DOM_PAGE_RED_BUTTON_LOCATOR),
        greenButtonElement : () => cy.xpath(CHALLENGING_DOM_PAGE_GREEN_BUTTON_LOCATOR),
        editButtonListElements : () => cy.xpath(CHALLENGING_DOM_PAGE_EDIT_BUTTON_LIST_LOCATOR),
        deleteButtonListElements : () => cy.xpath(CHALLENGING_DOM_PAGE_DELETE_BUTTON_LIST_LOCATOR)
    }

    clickThreeColorfulButtons () {
        this.elements.blueButtonElement().click();
        this.elements.redButtonElement().click();
        this.elements.greenButtonElement().click();
    }

    clickAllEditButtons () {
        this.elements.editButtonListElements().each($editButton => {
            cy.wrap($editButton).click();
        })
    }

    clickAllDeleteButtons () {
        this.elements.deleteButtonListElements().each($deleteButton => {
            cy.wrap($deleteButton).click();
        })
    }
}

export default new ChallengingDomPage();