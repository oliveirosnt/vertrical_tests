import { DYNAMIC_ELEM_PAGE_START_BUTTON_ELEMENT_LOCATOR, 
    DYNAMIC_ELEM_PAGE_DYNAMIC_TEXT_ELEMENT_LOCATOR } from '../constants/Locators.js';

import { TIMEOUT_15S } from '../constants/Miscellaneous.js';

class DynamicElementPage {
    
    elements = {
        startButtonElement : () => cy.xpath(DYNAMIC_ELEM_PAGE_START_BUTTON_ELEMENT_LOCATOR),
        dynamicTextElement : () => cy.xpath(DYNAMIC_ELEM_PAGE_DYNAMIC_TEXT_ELEMENT_LOCATOR, {timeout: TIMEOUT_15S})
    }

    clickInTheStartButton () {
        this.elements.startButtonElement().click()
    }
}

export default new DynamicElementPage();