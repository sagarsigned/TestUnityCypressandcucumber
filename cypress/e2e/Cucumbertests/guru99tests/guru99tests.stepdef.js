import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { homePage } from "../../../support/pageobjects/homePage";
import { loginPage } from "../../../support/pageobjects/loginpage";
import { requestquotation } from "../../../support/pageobjects/requestquotation";
import { retrivequotation } from "../../../support/pageobjects/retrivequotation";
import { profileEdit } from "../../../support/pageobjects/profileedit";
import { profile } from "../../../support/pageobjects/profile";

beforeEach(function () {
    cy.clearCookies()
    cy.log("cookies cleared")

    cy.fixture('keydata').then(function (data) {
        this.data = data;
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
Given('user visited the Guru99 Website', function () {
    cy.visit(Cypress.env('sit'))

})
When('user Enter the valid username and valid password and click on login button', function () {
    loginPage.enterusername().type("sagar.morabagalu@gmail.com")
    loginPage.enterpassword().type("sagar1994")
    loginPage.submitlogin().click({ force: true })
})
When('user Enter the invalid username and valid password and click on login button', function () {
    loginPage.enterusername().type("$")
    loginPage.enterpassword().type("sagar1994")
    loginPage.submitlogin().click({ force: true })
})
When('user Enter the valid username and invalid password and click on login button', function () {
    loginPage.enterusername().type("sagar.morabagalu@gmail.com")
    loginPage.enterpassword().type("&")
    loginPage.submitlogin().click({ force: true })
})
Then('verify user is landed on the Home page', function () {
    homePage.homepagelink("Home")
})
Then('verify user is not landed on the Home page', function () {
    homePage.homepageerror("Enter your Email address and password correct")
})
And('user navigates to requestquotation page', function () {
    homePage.requestQuotationlink().click()
})
And('user navigates to retrive quotation page', function () {
    cy.get(retrivequotation.retrivequotationlink()).click()
})





And('user selects breeakdowncover', function () {
    requestquotation.reqquotationbreakdownoption().select(this.data.Breakdowncover)
})
And('user selects windscreenrepair', function () {
    cy.searchListandclick(requestquotation.windscreen_repair(), this.data.Windscreenrepair)
})
And('user enters incidents', function () {
    cy.get(requestquotation.incidents()).type(this.data.incidents)
})
And('user enters registration number', function () {
    cy.get(requestquotation.registrationnumber()).type(this.data.Registration)

})
And('user enters Annual mileage', function () {
    cy.get(requestquotation.annualmileage()).type(this.data.Annualmileage)

})
And('user enters estimated value', function () {
    cy.get(requestquotation.estimatedvalue()).type(this.data.Estimatedvalue)

})
And('selects parking location', function () {
    cy.get(requestquotation.parkinglocation()).select(this.data.ParkingLocation)

})
And('user selects start of policy dates', function () {
    cy.get(requestquotation.year()).select(this.data.Startofpolicy.year)
    cy.get(requestquotation.month()).select(this.data.Startofpolicy.month)
    cy.get(requestquotation.date()).select(this.data.Startofpolicy.date)

})
And('user clicks on calculate premium', function () {
    cy.get(requestquotation.calculatepremiumbutton()).click()

})
And('save the quotation', function () {

    cy.get(requestquotation.reqquotsubmitbutton()).click()
    cy.verifyText(requestquotation.savequotationverify(), this.data.savedmessage)
})
Then('generated premium should be valid premium', function () {
    cy.verifyText("#calculatedpremium", this.data.expectedpremium)
})


And('user enters valid id and click on search', function () {
    cy.get(retrivequotation.searchbarid()).type(this.data.retirveid)
    cy.get(retrivequotation.getQuotebutton()).click()
})
Then('verify the results are as expected', function () {
    cy.get('tbody>tr>td').each(($el, index, $list) => {
        if ($el.text().includes('Registration')) {
            cy.get('tbody>tr>td').eq(index + 1).should('have.text', 'KA-01-EZ-9230')

        }
    })
})

And('user navigates to profileedit page', function () {
    cy.get(profileEdit.profileeditlink()).click()
})
And('enters the data in all mandatory fields', function () {
    cy.get(profileEdit.Title()).select(this.data.title)
    cy.get(profileEdit.usersurname()).type(this.data.surname)
    cy.get(profileEdit.userfirstname()).type(this.data.firstname)
    cy.get(profileEdit.userphone()).type(this.data.phonenumber)
    cy.get(profileEdit.month()).type(this.data.fulldate.month)
    cy.get(profileEdit.date()).type(this.data.fulldate.date)
    cy.get(profileEdit.year()).type(this.data.fulldate.year)
    cy.get(profileEdit.licenseperiod()).select(this.data.licenseperiod)
    cy.get(profileEdit.useroccupation()).select(this.data.useroccupation)
})
And('clicks on submit', function () {
    cy.get(profileEdit.submitbutton()).click()
})
And('user navigates to profile page', function () {
    cy.get(profile.profilelink()).click()
})
Then('verify the user name', function () {
    cy.get(profile.userfirstname()).should('have.text','\n Title:Sagar\n')
})

And('user clicks on logout', function () {
    cy.get(loginPage.logout()).click()
})
Then('verify user is logged out successfully', function () {
    cy.get("input[name='submit']").should('be.enabled')
})

