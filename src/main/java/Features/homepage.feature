Feature: Home Page Test

  Scenario Outline: Automation Practice HomePage Test Scenario

    Given user is on home page
    When title home page is My Store
    Then user inputs in search bar and user enters "<search>" and click
    Then user hoover on women label
    Then user clicks on top trend banner
    Then user input "<email>" in newsletter
    Then user clicks on newsletter button
    Then exit the browser

    Examples:
    |search|email|
    |shoes|abc@hotmail.com|
    |clothing|123@hotmail.com|