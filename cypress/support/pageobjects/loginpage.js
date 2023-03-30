const loginpage_Username = '#email'
const loginpage_password = "#password"
const loginpage_submit ="input[name='submit']"
const logout ="[value='Log out']"
export const loginPage = {
  
    enterusername() { 
    return cy.get(loginpage_Username) },
    enterpassword() { 
        return cy.get(loginpage_password) },
    submitlogin(){
    return cy.get(loginpage_submit)  
    },
    logout(){
        return logout
    }

} 