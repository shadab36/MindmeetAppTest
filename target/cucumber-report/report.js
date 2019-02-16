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
  "name": "Click on Sign up with face book CTA.",
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
  "name": "Click on Sign up with face book CTA.",
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
  "duration": 4473651000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: C:\\Users\\ALMOIN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53094}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: d9a741e798a4e48de9507a19f13ca815\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat browserSetup.loginStep.Login_Step_definition.open_the_website_url(Login_Step_definition.java:26)\r\n\tat ✽.Given Open the application url.(src/test/resources/LoginTest.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_Sign_up_with_face_book()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click__Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_On_Start_your_own_campaign_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Data driving for fileed valid data.",
  "description": "",
  "id": "signin-test-on-web-application;data-driving-for-fileed-valid-data.",
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
  "id": "signin-test-on-web-application;data-driving-for-fileed-valid-data.;",
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
      "id": "signin-test-on-web-application;data-driving-for-fileed-valid-data.;;1"
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
      "id": "signin-test-on-web-application;data-driving-for-fileed-valid-data.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Data driving for fileed valid data.",
  "description": "",
  "id": "signin-test-on-web-application;data-driving-for-fileed-valid-data.;;2",
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
  "duration": 6087354100,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d72.0.3626.109)\n  (Driver info: chromedriver\u003d73.0.3683.20 (8e2b610813e167eee3619ac4ce6e42e3ec622017),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.20 (8e2b610813e16..., userDataDir: C:\\Users\\ALMOIN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:53094}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.109, webStorageEnabled: true}\nSession ID: d9a741e798a4e48de9507a19f13ca815\n*** Element info: {Using\u003did, value\u003dcharity_campaign_goal_dollars}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat browserSetup.loginStep.Login_Step_definition.enter_the_charity(Login_Step_definition.java:96)\r\n\tat ✽.And Enter the charity amount \"12\".(src/test/resources/LoginTest.feature:16)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_the_Next_CTA()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_on_create_CTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Edit_campaign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login_Step_definition.click_on_Invite_your_team()"
});
formatter.result({
  "status": "skipped"
});
});