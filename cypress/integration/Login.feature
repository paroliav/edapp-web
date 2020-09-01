Feature: EdApp Web Login

  I want to login to EdApp from web browser

  Scenario: Register and Login to EdApp
    Given I open EdApp login page
    And I click on 'Create an EdApp account' button
    When I enter a valid email and continue
    And I enter a valid password and continue
    And I click on 'better myself' button
    And I click on 'Skip' button
    And I click on 'Join our community' button
    Then I should see 'Welcome!' message
    And a button to add courses