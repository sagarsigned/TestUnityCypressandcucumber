# TestUnityCypressandcucumber

Note: Please use git pull origin master to pull the code

Cypress Cucumber Project on guru 99 insurance website This project is created for demo purpose for cypress Automation. 

#Solution

Created Page objects to capture elements from the Webpage and added action on those elements in the same .js file
Added feature file consists of 8 test cases
Added step definition file to cover all 8 scenarios in the feature file
Used Cypress fixtures to add data parameterisation 
#Prerequisites: Node should be installed NPM package manager should be available

Installation

Open Cypress folder and open Terminal/CMD
run command npm install(this should install all dependencies) use npm audit fix --force in case any vunlerabilities
Steps to Run test cases

run command npm run test always run from cypress folder (Above command will launch all feature files in folder e2e\Cucumbertests for now there is only one feature file will run test in chrome in headed mode 
post all 8 scenarios ran , run command npm run report (this will convert the cucumber html report json to html and this html report is present in folder C:\Users\Sagar\Documents\Maersktest\cypress\reports)

Used Cucumber html report which will provide details on scenarios failed and passed as below
![image](https://user-images.githubusercontent.com/129405658/228873683-57c4ee34-ba38-463b-b16d-f7093aad9fe4.png)
Under each scenario we could see the test steps fail/pass status 
![image](https://user-images.githubusercontent.com/129405658/228874235-033040bd-7abc-486e-85b4-a16f94981b54.png)
