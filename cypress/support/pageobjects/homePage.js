const homePage_homelink = '#ui-id-1'
const homePage_loginerrormessage = '#login-form > div >span >b'
const homePage_requestQuotation ='#ui-id-2'
const reqquotation = "select[id='quotation_breakdowncover']"
const windscreen_repair = "label[for='quotation_windscreenrepair'] ~ label"

export const homePage= {
    homepagelink(value) { 
    cy.verifyText(homePage_homelink,value) },
    homepageerror(value){
    cy.verifyText(homePage_loginerrormessage,value)
    },
    requestQuotationlink(){
    return cy.get(homePage_requestQuotation)
    },
    reqquotationbreakdownoption(){
        return cy.get(reqquotation)
    },
    windscreen_repair(){
        return windscreen_repair
    }
} 