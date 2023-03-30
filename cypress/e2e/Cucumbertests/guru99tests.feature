Feature: guru 99 tests


Scenario: Verify Login is successful with a valid user id and password
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
Then verify user is landed on the Home page

Scenario: Verify Login is failed with a invalid user id and valid password
Given user visited the Guru99 Website
When user Enter the invalid username and valid password and click on login button
Then verify user is not landed on the Home page

Scenario: Verify Login is failed with a valid user id and invalid password
Given user visited the Guru99 Website
When user Enter the valid username and invalid password and click on login button
Then verify user is not landed on the Home page


Scenario: Verify user is able to request a quotation and the returned quotation is valid and then save quotation
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
And user navigates to requestquotation page
And user selects breeakdowncover
And user selects windscreenrepair
And user enters incidents
And user enters registration number
And user enters Annual mileage
And user enters estimated value 
And selects parking location
And user selects start of policy dates
And user clicks on calculate premium
Then generated premium should be valid premium
And save the quotation

Scenario: Verify user is able to retrive a quotation with valid id and verify the details
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
And user navigates to retrive quotation page
And user enters valid id and click on search
Then verify the results are as expected


Scenario: Verify user is able to edit the profile details
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
And user navigates to profileedit page
And enters the data in all mandatory fields
And clicks on submit


Scenario: Verify profile details in the profile page
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
And user navigates to profile page
Then verify the user name


Scenario: Verify logout functionality post successful login
Given user visited the Guru99 Website
When user Enter the valid username and valid password and click on login button
And user clicks on logout
Then verify user is logged out successfully





