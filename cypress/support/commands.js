/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


// Command to check anelement enabled with matching selector
Cypress.Commands.add('checkElementClickable', (selector) => {
    cy.get(selector).should('be.enabled')
})

// Command to click on an element with matching selector
Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).should('be.visible').click();
})

// Command to enter text in matching selector
Cypress.Commands.add('enterText', (selector, text) => {
    cy.get(selector).clear();
    cy.get(selector).should('be.visible').type(`${text}{enter}`);
})

//Command to enter any text inn matching selector
Cypress.Commands.add("enterAnyText", (selector, text) => {
    cy.get(selector).should('be.visible');
    if (text == undefined || text == null) {
        cy.get(selector).should('be.visible');
        cy.get(selector).clear();
        cy.get(selector).focus().blur();
    } else if (text == "") {
        //do nnothing
    } else {
        cy.get(selector).clear();
        cy.get(selector).should('be.visible').type(text);
    }
})

//Command to validate the element attriute match with the expected
Cypress.Commands.add('elementShouldHaveAttriute', (selector, attriute, value) => {
    cy.get(selector).should('be.visible').should('have.css', attriute).and('eq', value);
});

//Command to validate the element attriute match with the expected
Cypress.Commands.add('elementShouldNotHaveAttriute', (selector, attriute) => {
    cy.get(selector).should('not.have.attr', attriute, 'true')
});

// Command to assert text in matching selector
Cypress.Commands.add('assertText', (selector, text) => {
    cy.get(selector).should('contain.text', text)
})

// Command to assert text in matching selector
Cypress.Commands.add('assertFormFieldValue', (selector, text) => {
    cy.get(selector).should('have.value', text)
})

// Command to assert text in selected dropdown selector
Cypress.Commands.add('assertDropDownFieldValue', (selector, text) => {
    cy.get(selector).should('have.text', text);
})

Cypress.Commands.add('assertValueWithLatestDataFile', (filePath, selector, key) => {
    if (filePath != null && filePath != undefined) {
        cy.get(selector).invoke('val').then(text => {
            cy.readFile(filePath).its(key).should('eq', text);
        });
    }
})

// Command to click on an element with matching Index
Cypress.Commands.add('clickElementByIndex', (selector, index) => {
    cy.get(selector).should('be.visible').eq(index).click()
})

// Command to assert that element is visible in the DOM
Cypress.Commands.add('elementShouldBeVisible', selector => {
    cy.get(selector).should('be.visible');
});

// Command to assert that element does not exists in the DOM
Cypress.Commands.add('elementShouldNotExist', selector => {
    cy.get(selector).should('not.exist');
});

//Command to return element count in given selector
Cypress.Commands.add('getElementCount', selector => {
    cy.elementShouldBeVisible(selector);
    cy.get('body').then((body) => {
        return body.find(selector).length;
    });
});

// Command to assert that the URL contains certain text
Cypress.Commands.add('urlShouldIncludeText', text => {
    cy.url().should('include', text);
});

// Command for storing the text value of the selector to fixture file
Cypress.Commands.add('saveTextOfSelector', (selector, fileName, variableName) => {
    cy.get(selector).invoke('text').then(el => {
        if ((el.includes('€')) && (!el.includes(','))) {
            const data = {};
            data[variableName] = el + ',00'.trim();
            cy.updateFile(fileName, data);
        } else {
            const data = {};
            data[variableName] = el.trim();
            cy.updateFile(fileName, data);
        }
    });
});

// Command for storing the text value of the selector to fixture file
Cypress.Commands.add('saveValueOfSelector', (selector, fileName, variableName) => {
    cy.get(selector).invoke('val').then(el => {
        const data = {};
        data[variableName] = el.trim();
        cy.updateFile(fileName, data);
    });
});

// Command for checking the text of the element
Cypress.Commands.add('checkTextOfElement', (selector, expectedText) => {
    cy.get(selector).should('be.visible');
    cy.get(selector).invoke('text').should('eq', expectedText);
});

// Command for return the text of the element
Cypress.Commands.add('returnTextOfElement', (selector) => {
    cy.get(selector).should('be.visible');
    return cy.get(selector).invoke('text').then(text => {
        return text;
    });
});

// Command for validate the text of the element
Cypress.Commands.add('validateTextOfElement', (selector, exoectedText) => {
    cy.get(selector).should('be.visible');
    cy.get(selector).invoke('text').then(text => {
        expect(text).to.equal(exoectedText);
    });
});

// Command to update the Json Fixture File
Cypress.Commands.add('updateFile', (fileName, jsonData) => {
    cy.readFile(`cypress/fixtures/${fileName}.json`, (err, data) => {
        if (err) {
            cy.log(err);
        }
    }).then(data => {
        const merged = Object.assign(data, jsonData);
        cy.writeFile(`cypress/fixtures/${fileName}.json`, merged);
    });
});


/**
 * Custom command for clicking webelement forcefully
 */
Cypress.Commands.add('forceClickElement', (selector) => {
    cy.get(selector).should('be.visible').click({ force: true });
})

/**
 * Custom command for clicking on single webelement 
 */
Cypress.Commands.add('clickSingleElement', (selector) => {
    cy.get(selector).should('be.visible').click({ multiple: true, force: true });
})


// Command to click on an element with matching Index
Cypress.Commands.add('clickElementByForceIndex', (selector, index) => {
    cy.get(selector).should('be.visible').eq(index).click({ force: true })
})


Cypress.Commands.add('selectFromDropDown', (selector, option) => {
    cy.get(selector).should('be.visible');
    cy.get(selector).select(option).should('have.value', option);
});

Cypress.Commands.add('clickElementByElementInList', (selector) => {
    cy.get(selector).should('be.visible');
    cy.get(selector).each(($el) => {
        cy.wrap($el).click();
    })
});

Cypress.Commands.add('getFileObjectValue', (filePath, key) => {
    return cy.readFile(filePath).its(key)
});

Cypress.Commands.add('checkElementVisible', (selector) => {
    cy.get('body').then((body) => {
        if (body.find(selector).length > 0) {
            return true;
        } else {
            return false;
        }
    });
});

Cypress.Commands.add('checkRadioElementState', (selector, index) => {
    cy.get('body').then((body) => {
        return body.find(selector).eq(index).is(":checked")
    });
});

Cypress.Commands.add('replaceSubText', (selector, start, end, string) => {
    cy.get(selector).invoke('val').then(text => {
        var newString = text.slice(start, end) + string;
        cy.get(selector).clear().type(newString);
    });
});

/**
     * Custom command to scroll page till element is visible 
     */
Cypress.Commands.add('scrollPageTillElementVisible', (selector) => {
    cy.get(selector).scrollIntoView({ duration: 2000 }).should('be.visible');
});

/**
 * Custom command to click elements matching css selector
 */
Cypress.Commands.add('clickAllElements', (selector) => {
    cy.get(selector).each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        cy.wrap($el).click();
        cy.wrap($el).should('not.exist');
    })
});


/**
 * Custom command for clicking on single webelement 
 */
Cypress.Commands.add('clickSingleElementByDisablingAnimation', (selector) => {
    cy.get(selector).should('be.visible').click({ multiple: true, waitForAnimations: false, force: true, animationDistanceThreshold: 20 });
})

/**
 * Command to click on an element with matching Index by forcing it
 */
Cypress.Commands.add('forceClickElementByIndex', (selector, index) => {
    cy.get(selector).eq(index).click({ force: true });
})

/**
 *  Custom command for mouse hovering webelement by using index 
 */
Cypress.Commands.add('mouseOverOnElementByIndex', (selector, index) => {
    cy.get(selector).eq(index).trigger('mouseover');
})

/**
 *  Custom command for entering text in edit box in iframe
 */
Cypress.Commands.add('enterTextInIframe', (iframeSelector, iframeIndex, selector, value) => {
    cy.get(iframeSelector).its(iframeIndex + '.contentDocument.body')
        .should('not.be.empty').then(cy.wrap)
        .find(selector).type(value, { force: true });
})

/**
 *   Custom command for clicking on element in iframe
 */
Cypress.Commands.add('clickElementInIframe', (selector) => {
    cy.get("iframe").then($iframe => {
        const $doc = $iframe.contents();
        cy.wrap($doc.find(selector)).first().click({ force: true, multiple: true });
    });
})

/**
 *  Customer command for selecting list dropdown option
 */
Cypress.Commands.add('selectFromListDropDown', (selector, option) => {
    cy.get(selector).should('be.visible');
    cy.get(selector).each(($ele) => {
        if ($ele.text() == option) {
            cy.wrap($ele).click();
        }
    })
});


/**
* Custom command to scroll page to specific position
* @param position 
*/
Cypress.Commands.add('scrollPage', (position) => {
    cy.scrollTo(position);
});

/**
 * Custom command for changing url
 */
Cypress.Commands.add('changeURL', (url, selector) => {
    cy.origin(url, { args: { webSelector: selector } }, ({ webSelector }) => {
        cy.get(webSelector).should('be.visible').click({ force: true });
    });
});


Cypress.Commands.add('checkElementCountInIframe', (selector, count) => {
    cy.get("iframe").then($iframe => {
        const $doc = $iframe.contents();
        const locatorCount = $doc.find(selector).length;
        // Assert that the number of locators is correct
        expect(locatorCount).to.eq(count);
    });
})

Cypress.Commands.add('clickElementByRemovingTarget', (selector) => {
    cy.get(selector).invoke("removeAttr", "target").click({ force: true, multiple: true });
    // cy.get("iframe").then($iframe => {
    //     const $doc = $iframe.contents();
    //     cy.wrap($doc.find(selector)).first().invoke("removeAttr", "target").click({ force: true, multiple: true });
    // });
})

// Command to assert that the title contains certain text
Cypress.Commands.add('titleShouldIncludeText', text => {
    cy.title().should('include', text);
});


// Command to check element in iframe
Cypress.Commands.add('checkElementInIframe', (selector) => {
    cy.get('iframe').then(($iframe) => {
        const $doc = $iframe.contents();
        cy.get('iframe').its(0 + '.contentDocument.body')
            .should('not.be.empty').then(cy.wrap)
            .find(selector).should('exist')
    });
})

// Command to get element count in iframe
Cypress.Commands.add('getElementCountInIframe', (selector) => {
    cy.get("iframe").then($iframe => {
        const $doc = $iframe.contents();
        return $doc.find(selector).length;
    });
})

// Command to get element text in iframe
Cypress.Commands.add('checkElementTextInIframe', (selector, elementText) => {
    cy.get('iframe').then(($iframe) => {
        const $doc = $iframe.contents();
        cy.get('iframe').its(0 + '.contentDocument.body')
            .should('not.be.empty').then(cy.wrap)
            .find(selector).contains(elementText).should('exist')
    });
})

// Command to verify link in navigate link
Cypress.Commands.add('checkMapsLink', (selector, mapsLink) => {
    cy.get("iframe").then($iframe => {
        const $doc = $iframe.contents();
        cy.wrap($doc.find(selector)).first().invoke("attr", "href").then(hrefValue => {
            expect(hrefValue).to.contains(mapsLink);
        })
    });
})


/* 
Custom command for clicking on first web element 
*/
Cypress.Commands.add('clickFirstElement', (selector) => {
    cy.get(selector).should('be.visible').first().click({ multiple: true, force: true });
})
