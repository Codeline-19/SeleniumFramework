Feature: Account Management

  @CreateAccount
  Scenario: Create New Customer Account
    Given user on create new account page
    When user enters first name
    And user enters last name
    And user enters an email
    And user enters password
    And user enters confirm password
    Then click create an account