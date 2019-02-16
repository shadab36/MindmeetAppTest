$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "signin Test On Web Application",
  "description": "",
  "id": "signin-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data driving for valid sign-in test.",
  "description": "",
  "id": "signin-test-on-web-application;data-driving-for-valid-sign-in-test.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@validLogintest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the application url.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Join now for free CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign up with Twitter account CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter email address as \"\u003cEmailAddress\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter the Password \"\u003cPass\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click On Start your own campaign CTA.",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "signin-test-on-web-application;data-driving-for-valid-sign-in-test.;",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Pass"
      ],
      "line": 12,
      "id": "signin-test-on-web-application;data-driving-for-valid-sign-in-test.;;1"
    },
    {
      "cells": [
        "test.shadab@gmail.com",
        "shadabsha@123"
      ],
      "line": 13,
      "id": "signin-test-on-web-application;data-driving-for-valid-sign-in-test.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Data driving for valid sign-in test.",
  "description": "",
  "id": "signin-test-on-web-application;data-driving-for-valid-sign-in-test.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@validLogintest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open the application url.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Join now for free CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign up with Twitter account CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter email address as \"test.shadab@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter the Password \"shadabsha@123\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on Login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click On Start your own campaign CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_definition.open_the_website_url()"
});
formatter.result({
  "duration": 7089957900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Login_button()"
});
formatter.result({
  "duration": 2375849700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_Sign_up_with_face_book()"
});
formatter.result({
  "duration": 4538317300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.shadab@gmail.com",
      "offset": 24
    }
  ],
  "location": "Login_Step_definition.enter_user_email_address_as(String)"
});
formatter.result({
  "duration": 430104400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadabsha@123",
      "offset": 20
    }
  ],
  "location": "Login_Step_definition.enter_the_Password(String)"
});
formatter.result({
  "duration": 377304000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click__Login_button()"
});
formatter.result({
  "duration": 7522623300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_On_Start_your_own_campaign_CTA()"
});
formatter.result({
  "duration": 1979869100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "create new campaign",
  "description": "",
  "id": "signin-test-on-web-application;create-new-campaign",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Enter the charity amount \"\u003cAmount\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the campaign title \"\u003cTitle\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter the Find charity \"\u003cName\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter the Description charity \"\u003cDescription\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click the Next CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter the Topic Name \"\u003cTopic Name\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on create CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Edit campaign.",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Invite your team.",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "signin-test-on-web-application;create-new-campaign;",
  "rows": [
    {
      "cells": [
        "Amount",
        "Title",
        "Name",
        "Description",
        "Topic Name"
      ],
      "line": 26,
      "id": "signin-test-on-web-application;create-new-campaign;;1"
    },
    {
      "cells": [
        "12",
        "shadab",
        "qa",
        "test",
        "test"
      ],
      "line": 27,
      "id": "signin-test-on-web-application;create-new-campaign;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "create new campaign",
  "description": "",
  "id": "signin-test-on-web-application;create-new-campaign;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Enter the charity amount \"12\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the campaign title \"shadab\".",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter the Find charity \"qa\".",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter the Description charity \"test\".",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click the Next CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter the Topic Name \"test\".",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click on create CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on Edit campaign.",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on Invite your team.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    }
  ],
  "location": "Login_Step_definition.enter_the_charity(String)"
});
formatter.result({
  "duration": 648637700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 26
    }
  ],
  "location": "Login_Step_definition.enter_the_campaign_title(String)"
});
formatter.result({
  "duration": 390714500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa",
      "offset": 24
    }
  ],
  "location": "Login_Step_definition.enter_the_Find_charity(String)"
});
formatter.result({
  "duration": 577435100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 31
    }
  ],
  "location": "Login_Step_definition.enter_the_Description_charity(String)"
});
formatter.result({
  "duration": 375719700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_the_Next_CTA()"
});
formatter.result({
  "duration": 194457600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 22
    }
  ],
  "location": "Login_Step_definition.enter_the_Topic_Name(String)"
});
formatter.result({
  "duration": 407953600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_create_CTA()"
});
formatter.result({
  "duration": 1325432700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Edit_campaign()"
});
formatter.result({
  "duration": 1514003100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Invite_your_team()"
});
formatter.result({
  "duration": 2413723100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "update campaign",
  "description": "",
  "id": "signin-test-on-web-application;update-campaign",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Back to campaigns page.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Search for existing campaigns.",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on the edit campaign option.",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Update Amount.",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Chhose the Campaign image.",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Chhose the Avatar image.",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "click on save changes CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_definition.back_to_campaigns_page()"
});
formatter.result({
  "duration": 2328381300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.search_for_existing_campaigns()"
});
formatter.result({
  "duration": 6715618700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_the_edit_campaign_option()"
});
formatter.result({
  "duration": 1070289800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.update_Amount()"
});
formatter.result({
  "duration": 573361700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.chhose_the_Campaign_image()"
});
formatter.result({
  "duration": 11734059000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.chhose_the_Avatar_image()"
});
formatter.result({
  "duration": 6959822300,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_save_changes_CTA()"
});
formatter.result({
  "duration": 4374564500,
  "status": "passed"
});
});