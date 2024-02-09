import DynamicElementPage from "../pages/DynamicElementPage.js";
import ChallengingDomPage from "../pages/ChallengingDomPage.js";

import { DYNAMIC_PAGE_URL, CHALLENGING_DOM_URL, DYNAMIC_ELEMENT_TEXT } from '../constants/Miscellaneous.js';

describe('Frontend automation scenarious', () => {
  
  it('Dynamic element test', () => {
    cy.visit(DYNAMIC_PAGE_URL);
    DynamicElementPage.elements.dynamicTextElement().should("not.be.visible");
    DynamicElementPage.clickInTheStartButton();
    DynamicElementPage.elements.dynamicTextElement().should("be.visible");
    DynamicElementPage.elements.dynamicTextElement().should("have.text", DYNAMIC_ELEMENT_TEXT);
  })

  it('Challenging DOM test', () => {
    cy.visit(CHALLENGING_DOM_URL);
    ChallengingDomPage.clickThreeColorfulButtons();
    ChallengingDomPage.clickAllEditButtons();
    ChallengingDomPage.clickAllDeleteButtons();
  })
  
})