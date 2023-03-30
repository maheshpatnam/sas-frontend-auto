// load type definitions that come with Cypress module
/// <reference types="cypress" />

import { StringNullableChain } from "cypress/types/lodash"

declare global {

  namespace Cypress {
    interface Chainable {
      /**
      * Custom command for asserting that element is visible
      * @example cy.elementShouldBeVisible("[data-testid="text"]")
      */
      elementShouldBeVisible(selector: string): Chainable<void>

      /**
      * Custom command for asserting that drop down selection
      * @example cy.assertDropDownFieldValue('[data-testid="text"]', 'text'")
      */
      assertDropDownFieldValue(selector: string, text: string): Chainable<void>

      /**
      * Custom command for asserting that element is should not exist
      * @example cy.elementShouldNotExist("[data-testid="text"]")
      */
      elementShouldNotExist(selector: string): Chainable<void>

      /**
       * Custom command for storing the text value of the selector to fixture file
       * @example cy.saveTextOfSelector("[data-testid="text"]","fixtureFileName","variableName")
       */
      saveTextOfSelector(selector: string, fileName: String, varibaleName: String): Chainable<void>

      /**
      * Custom command for storing the text value of the text field to fixture file
      * @example cy.saveValueOfSelector("[data-testid="text"]","fixtureFileName","variableName")
      */
      saveValueOfSelector(selector: string, fileName: String, varibaleName: String): Chainable<void>

      /**
        * Custom command for checking the text of element with expected text
        * @example cy.checkTextOfElement("[data-testid="bla"],"expectedText")
        */
      checkTextOfElement(selector: String, expectedText: String): Chainable<void>

      /**
        * Custom command to return the text of element
        * @example cy.returnTextOfElement("[data-testid='bla']")
        */
      returnTextOfElement(selector: String): Chainable<string>

      /**
        * Custom command to validate the text of element
        * @example cy.validateTextOfElement("[data-testid='bla']", "boo")
        */
      validateTextOfElement(selector: string, expectedText: string): Chainable<string>


      /**
       * Custom command to update the Json Fixture File.
       * @example cy.updateFile("[data-testid="text"]","fixtureFileName","variableName")
       */
      updateFile(fileName: String, jsonData: String): Chainable<void>

      /**
      * Custom command for clicking webelement by using index
      * @example cy.clickElementByIndex()
      */
      clickElementByIndex(selector: string, index: string): Chainable<void>

      /**
      * Custom command for entering text in input tag 
      * @example cy.enterText()
      */
      enterText(selector: string, text: string): Chainable<void>

      /**
      * Custom command for clicking webelement using selector
      * @example cy.clickElement()
      */
      clickElement(selector: string): Chainable<void>

      /**
       * Custom command for check element clickable using selector
       * @param selector 
       * @example cy.clickElement()
       */
      checkElementClickable(selector: string): Chainable<void>

      /**
      * Custom command for clicking webelement forcefully
      * @example cy.forceClickElement()
      */
      forceClickElement(selector: string): Chainable<void>

      /**
      * Command to assert text in matching selector
      * @example cy.assertText()
      */
      assertText(selector: string, text: string): Chainable<void>
      
      /**
      * Custom command for setting clientId and clientSecret
      * @example cy.setClientSecret()
      */
      setClientSecret(): Chainable<void>

      /**
       * Custom command for clicking single element 
       * @example cy.clickSingleElement()
       */
      clickSingleElement(selector: string): Chainable<void>

      /**
      * Custom command for entering text in input tag 
      * @example cy.enterText()
      */
      enterAnyText(selector: string, text: string): Chainable<void>

      /**
       * Custome command to validate the element attribute
       * @param selector 
       * @param attriute 
       * @param value
       * @example elementShouldHaveAttriute('[data-testid="text"]', 'background-color', 'rgb(0, 0, 0)')
       */
      elementShouldHaveAttriute(selector: string, attriute: string, value: string): Chainable<void>

      /**
       * Custome command to validate the element should not have attribute
       * @param selector 
       * @param attriute 
       * @param value
       * @example elementShouldNotHaveAttriute('[data-testid="text"]', 'background-color', 'rgb(0, 0, 0)')
       */
      elementShouldNotHaveAttriute(selector: string, attriute: string): Chainable<void>

      /**
       * Customer command for select dropdown option
       * @param selector 
       * @param option 
       * @example cy.selectFromDropDown()
       */
      selectFromDropDown(selector: string, option: string): Chainable<void>

      /**
      * Command to assert text in matching form field 
      * @example cy.assertFormFieldValue()
      */
      assertFormFieldValue(selector: string, text: string): Chainable<void>

      /**
      * Custom command for clicking on element by index number, for example click first product name at index 0 
      * @example cy.clickOnElementByIndex("[data-testid="product"]", 0)
      */
      clickElementByForceIndex(selector: string, index: string): Chainable<void>


      /**
       * Custom command to select element one by one in a element list
       * @example cy.clickElementByElementInList('[data-testid="bla"]')
       */
      clickElementByElementInList(selector: string): Chainable<void>;

      /**
       * Custom command to validate the url text
       * @param url 
       * @example cy.urlShouldIncludeText('https://blabla.com/')
       */
      urlShouldIncludeText(text: string): Chainable<void>;

      /**
       * Custom command to return the key value of data file
       * @param fielPath 
       * @param key 
       * @example cy.getFileObjectValue('/data/user.json', 'userName');
       */
      getFileObjectValue(fielPath: string, key: string): Chainable<string>

      /** Custom command to check element visible
      * @param locator 
      * @example cy.checkElementVisible('[data-testid="bla"]')
      */
      checkElementVisible(selector: string): Chainable<boolean>

      /**
       * Custom command to return radio button state
       * @param selector 
       * @example cy.checkRadioElementState('[data-testid="bla"]')
       */
      checkRadioElementState(selector: string, index: string): Chainable<boolean>

      /**
       * Custome command to return the length of given css selector
       * @param selector 
       * @example cy.getElementCount('[data-testid="bla"]')
       */
      getElementCount(selector: string): Chainable<Number>

      /** Custom command to validate the url text
      * @param selector
      * @param start
      * @param end
      * @param newText
      * @example cy.replaceSubText('[data-testid="bla"]', 0, -1, "new")
      */
      replaceSubText(selector: string, start: number, end: number, newText: any): Chainable<void>

      /**
      * Custom command to scroll page till element is visible 
      * @param selector 
      */
      scrollPageTillElementVisible(selector: string): Chainable<void>

      /**
      * Custom command for clicking webelement by using index by forcing it
      * @example cy.forceClickElementByIndex()
      */
      forceClickElementByIndex(selector: string, index: string): Chainable<void>

      /**
      * Custom command for clicking single element by disabling animation
      * @example cy.clickSingleElement()
      */
      clickSingleElementByDisablingAnimation(selector: string): Chainable<void>

      /**
      * Custom command to click elements matching css selector
      * @param selector 
      */
      clickAllElements(selector: string): Chainable<void>

      /**
      * Custom command for mouse hovering webelement by using index 
      * @example cy.forceClickElementByIndex()
      */
      mouseOverOnElementByIndex(selector: string, index: string): Chainable<void>
      /**
          *  Custom command for entering text in edit box in iframe
          * @example cy.forceClickElementByIndex()
         */
      enterTextInIframe(iframeSelector: string, iframeIndex: string, selector: string, value: string): Chainable<void>

      /**
      *  Custom command for clicking on element in iframe
      * @example cy.forceClickElementByIndex()
     */
      clickElementInIframe(selector: string): Chainable<void>

      /**
       * Customer command for selecting list dropdown option
       * @param selector 
       * @param option 
       * @example cy.selectFromListDropDown()
       */
      selectFromListDropDown(selector: string, option: string): Chainable<void>

      /**
       * Custom command to scroll page to specific position
       * @param position 
       */
      scrollPage(position: string): Chainable<void>

      /**
       * Custom command for changing url
       * @param url 
       * @param selector 
       */
      changeURL(url: string, selector: string): Chainable<void>

      /**
      *  Custom command for checking on elements count in iframe
      * @example cy.forceClickElementByIndex()
     */
      checkElementCountInIframe(selector: string, count: number): Chainable<void>

      /**
      *  Custom command for clicking on element by deleting href 
      * @example cy.clickElementInIframeByDeletingTarget()
     */
       clickElementByRemovingTarget(selector: string): Chainable<void>

      /**
       * Custom command to validate the title text
       * @param url 
       * @example cy.urlShouldIncludeText('https://blabla.com/')
       */
      titleShouldIncludeText(text: string): Chainable<void>;

      /**
        *  Custom command for checking on element in iframe
        * @example cy.checkElementInIframe()
       */
      checkElementInIframe(selector: string): Chainable<void>

      /**
      * Custome command to return the count of CSS selector
      * @param selector 
      * @example cy.getElementCount('[data-testid="bla"]')
      */
      getElementCountInIframe(selector: string): Chainable<number>

      /**
     *  Custom command for checking on element text in iframe
     * @example cy.checkElementTextInIframe()
    */
      checkElementTextInIframe(selector: string, elementText: string): Chainable<void>
    /**
     *  Custom command for checking maps link in iframe
     * @example cy.checkMapsLink()
    */
     checkMapsLink(selector: string,mapsLink: string): Chainable<void>
      /**
      * Custom command for clicking on first web element 
      * @param selector 
      * @example cy.getElementCount('[data-testid="bla"]')
      */
       clickFirstElement(selector: string): Chainable<number>
    }
  }
}