
const reqquotation = "select[id='quotation_breakdowncover']"
const windscreen_repair = "label[for='quotation_windscreenrepair'] ~ label"
const incidents ='#quotation_incidents'
const registrationnumber ='#quotation_vehicle_attributes_registration'
const annualmileage ='#quotation_vehicle_attributes_mileage'
const estimatedvalue ='#quotation_vehicle_attributes_value'
const parkinglocation ='#quotation_vehicle_attributes_parkinglocation'
const year ="[name='year']"
const month ="[name='month']"
const date ="[name='date']"
const calculatepremiumbutton="[value='Calculate Premium']"
const reqquotsubmitbutton='[name="submit"]'
const savequotationverify ="body > :nth-child(1)"

export const requestquotation= {

    reqquotationbreakdownoption(){
        return cy.get(reqquotation)
    },
    windscreen_repair(){
        return windscreen_repair
    },
    incidents(){
        return incidents
    },
    registrationnumber(){
        return registrationnumber
    },
    annualmileage(){
        return annualmileage
    },
    estimatedvalue(){
        return estimatedvalue
    },
    parkinglocation(){
        return parkinglocation
    },
    year(){
        return year
    },
    date(){
        return date
    },
    month(){
        return month
    }, 
    calculatepremiumbutton(){
        return calculatepremiumbutton
    },
    reqquotsubmitbutton(){
        return reqquotsubmitbutton
    },
    savequotationverify(){
        return savequotationverify
    }
    
    

    
} 