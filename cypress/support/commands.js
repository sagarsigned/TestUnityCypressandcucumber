//Below command will be used for selecting any value from the dynamic drop down 
Cypress.Commands.add('searchListandclick', (locator, value) => {
    cy.get(locator).each(($el, index, $list) => {
        if ($el.text().includes(value)) {
            cy.get(locator).eq(index).click({force:true}).then(function(){return false})
            
        }
    })
})
Cypress.Commands.add('searchListandSelect', (locator, value) => {
    cy.get(locator).each(($el, index, $list) => {
        if ($el.text().includes(value)) {
            cy.get(locator).eq(index).select().then(function(){return false})
            
        }
    })
})
//Below command will be used for selecting any element based on the index from list of elements
Cypress.Commands.add('searchByIndexAndClick', (locator, index) => {
    cy.get(locator).eq(index).click();
})
//Below command will be used for verifying the text from
Cypress.Commands.add('verifyText', (locator, value) => {
    cy.get(locator).then((name) => {
        var names = name.text()
        expect(names).includes(value)
    })
})
//Below command will be used to wait for an element visibility can be used for any specific elements taking more time than other elements
Cypress.Commands.add('waitUntilElementVisible', (locator) => {
    return cy.get(locator,{timeout:120000}).should('be.visible')    
})
//Below command will be used to wait for an element invisibility can be used for any specific elements taking more time than other elements
Cypress.Commands.add('waitUntilElementInVisible', (locator) => {
    return cy.get(locator,{timeout:120000}).should('not.be.visible')    
})