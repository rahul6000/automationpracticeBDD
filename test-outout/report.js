$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Test",
  "description": "",
  "id": "home-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Automation Practice HomePage Test Scenario",
  "description": "",
  "id": "home-page-test;automation-practice-homepage-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title home page is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs in search bar and user enters \"\u003csearch\u003e\" and click",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user hoover on women label",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on top trend banner",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user input \"\u003cemail\u003e\" in newsletter",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on newsletter button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "home-page-test;automation-practice-homepage-test-scenario;",
  "rows": [
    {
      "cells": [
        "search",
        "email"
      ],
      "line": 15,
      "id": "home-page-test;automation-practice-homepage-test-scenario;;1"
    },
    {
      "cells": [
        "shoes",
        "abc@hotmail.com"
      ],
      "line": 16,
      "id": "home-page-test;automation-practice-homepage-test-scenario;;2"
    },
    {
      "cells": [
        "clothing",
        "123@hotmail.com"
      ],
      "line": 17,
      "id": "home-page-test;automation-practice-homepage-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Automation Practice HomePage Test Scenario",
  "description": "",
  "id": "home-page-test;automation-practice-homepage-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title home page is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs in search bar and user enters \"shoes\" and click",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user hoover on women label",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on top trend banner",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user input \"abc@hotmail.com\" in newsletter",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on newsletter button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 13101740574,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.title_home_page_is_My_Store()"
});
formatter.result({
  "duration": 57521812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 43
    }
  ],
  "location": "HomePageStepDefinition.userInputsInSearchBarAndUserEntersAndClick(String)"
});
formatter.result({
  "duration": 4644290812,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.userHooverOnWomenLabel()"
});
formatter.result({
  "duration": 3407135277,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_top_trend_banner()"
});
formatter.result({
  "duration": 8514920285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@hotmail.com",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefinition.userInputInNewsletter(String)"
});
formatter.result({
  "duration": 611579253,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_newsletter_button()"
});
formatter.result({
  "duration": 1415212813,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.exit_the_browser()"
});
formatter.result({
  "duration": 333535889,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Automation Practice HomePage Test Scenario",
  "description": "",
  "id": "home-page-test;automation-practice-homepage-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title home page is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user inputs in search bar and user enters \"clothing\" and click",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user hoover on women label",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on top trend banner",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user input \"123@hotmail.com\" in newsletter",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on newsletter button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "exit the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 7451966119,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.title_home_page_is_My_Store()"
});
formatter.result({
  "duration": 18595273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clothing",
      "offset": 43
    }
  ],
  "location": "HomePageStepDefinition.userInputsInSearchBarAndUserEntersAndClick(String)"
});
formatter.result({
  "duration": 5257924140,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.userHooverOnWomenLabel()"
});
formatter.result({
  "duration": 3262693808,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_top_trend_banner()"
});
formatter.result({
  "duration": 9600186541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123@hotmail.com",
      "offset": 12
    }
  ],
  "location": "HomePageStepDefinition.userInputInNewsletter(String)"
});
formatter.result({
  "duration": 480067285,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_newsletter_button()"
});
formatter.result({
  "duration": 1385779143,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.exit_the_browser()"
});
formatter.result({
  "duration": 205471807,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Practice",
  "description": "",
  "id": "automation-practice",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 15,
  "name": "Automation Practice Login Test Scenario",
  "description": "",
  "id": "automation-practice;automation-practice-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "automation-practice;automation-practice-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 22,
      "id": "automation-practice;automation-practice-login-test-scenario;;1"
    },
    {
      "cells": [
        "rahul6000@hotmail.com",
        "test123"
      ],
      "line": 23,
      "id": "automation-practice;automation-practice-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Automation Practice Login Test Scenario",
  "description": "",
  "id": "automation-practice;automation-practice-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "title of login page is My Store",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 8405322039,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_My_Store()"
});
formatter.result({
  "duration": 42483254,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 239625084,
  "status": "passed"
});
});