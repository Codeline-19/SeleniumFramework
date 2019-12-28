$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagement.feature");
formatter.feature({
  "line": 1,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create New Customer Account",
  "description": "",
  "id": "account-management;create-new-customer-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@CreateAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user on create new account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enters an email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click create an account",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountManagementSteps.userOnCreateNewAccountPage()"
});
formatter.result({
  "duration": 16274734200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersFirstName()"
});
formatter.result({
  "duration": 44100,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersLastName()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersAnEmail()"
});
formatter.result({
  "duration": 144900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersPassword()"
});
formatter.result({
  "duration": 32900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersConfirmPassword()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.clickCreateAnAccount()"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
});