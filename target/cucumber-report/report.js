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
  "duration": 30558449600,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Login_button()"
});
formatter.result({
  "duration": 5128751700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_Sign_up_with_face_book()"
});
formatter.result({
  "duration": 6571465300,
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
  "duration": 397568200,
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
  "duration": 311698900,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click__Login_button()"
});
formatter.result({
  "duration": 6697986100,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_On_Start_your_own_campaign_CTA()"
});
formatter.result({
  "duration": 17762568500,
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
  "name": "Enter the Campaign hashtags \"\u003cCampaign hashtags\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter the Your rate for metting \"\u003cYour rate\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Create campaign CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Invite your team.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter one or more email addresses \"\u003cEmail Address\u003e\".",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click invite the more user.",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "signin-test-on-web-application;create-new-campaign;",
  "rows": [
    {
      "cells": [
        "Amount",
        "Campaign hashtags",
        "Your rate",
        "Email Address",
        "Topic Name"
      ],
      "line": 24,
      "id": "signin-test-on-web-application;create-new-campaign;;1"
    },
    {
      "cells": [
        "15",
        "shadab",
        "2",
        "test@gmail.com",
        "test"
      ],
      "line": 25,
      "id": "signin-test-on-web-application;create-new-campaign;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "create new campaign",
  "description": "",
  "id": "signin-test-on-web-application;create-new-campaign;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "Enter the charity amount \"15\".",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter the Campaign hashtags \"shadab\".",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter the Your rate for metting \"2\".",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Create campaign CTA.",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on Invite your team.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Enter one or more email addresses \"test@gmail.com\".",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Click invite the more user.",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "Login_Step_definition.enter_the_charity(String)"
});
formatter.result({
  "duration": 830119800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shadab",
      "offset": 29
    }
  ],
  "location": "Login_Step_definition.enter_the_Campaign_hashtags(String)"
});
formatter.result({
  "duration": 410242000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    }
  ],
  "location": "Login_Step_definition.enter_the_Your_rate_for_metting(String)"
});
formatter.result({
  "duration": 475778800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Create_campaign_CTA()"
});
formatter.result({
  "duration": 3573261800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Invite_your_team()"
});
formatter.result({
  "duration": 23469880700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 35
    }
  ],
  "location": "Login_Step_definition.enter_one_or_more_email_addresses(String)"
});
formatter.result({
  "duration": 412672700,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_invite_the_more_user()"
});
formatter.result({
  "duration": 230100200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "update campaign",
  "description": "",
  "id": "signin-test-on-web-application;update-campaign",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Search for existing campaigns.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on the edit campaign option.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "verify the charity Amount.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "verify the Campaign hashtags name.",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Chhose the Campaign image.",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "click on save changes CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Step_definition.search_for_existing_campaigns()"
});
formatter.result({
  "duration": 10214496000,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_the_edit_campaign_option()"
});
formatter.result({
  "duration": 1321159500,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.update_Amount()"
});
formatter.result({
  "duration": 1199446800,
  "status": "passed"
});
formatter.match({
  "location": "Login_Step_definition.verify_the_Campaign_hashtags_name()"
});
formatter.result({
  "duration": 83955400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cSHADAB[500]\u003e but was:\u003cSHADAB[12\nclose]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat browserSetup.loginStep.Login_Step_definition.verify_the_Campaign_hashtags_name(Login_Step_definition.java:245)\r\n\tat ✽.Then verify the Campaign hashtags name.(src/test/resources/LoginTest.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Step_definition.chhose_the_Campaign_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_on_save_changes_CTA()"
});
formatter.result({
  "status": "skipped"
});
});