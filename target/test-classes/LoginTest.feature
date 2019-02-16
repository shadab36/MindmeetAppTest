Feature: signin Test On Web Application 
@validLogintest 
Scenario Outline: Data driving for valid sign-in test. 
	Given Open the application url. 
	Then  Click on Join now for free CTA. 
	Then Click on Sign up with Twitter account CTA. 
	Then Enter email address as "<EmailAddress>". 
	Then Enter the Password "<Pass>". 
	Then Click on Login CTA. 
	Then Click On Start your own campaign CTA. 
	Examples: 
		|EmailAddress           |Pass          |
		|test.shadab@gmail.com  | shadabsha@123|  
		
	Scenario Outline: create new campaign 
		And Enter the charity amount "<Amount>". 
		And Enter the campaign title "<Title>". 
		And Enter the Find charity "<Name>". 
		And Enter the Description charity "<Description>". 
		And Click the Next CTA. 
		And Enter the Topic Name "<Topic Name>". 
		And Click on create CTA. 
		And Click on Edit campaign. 
		And Click on Invite your team. 
		Examples: 
			|Amount              |Title            |Name   |Description  | Topic Name   |
			|12                  | shadab          |  qa   | test        |    test      |
			
	Scenario: update campaign 
	Then Back to campaigns page.
	Then Search for existing campaigns.
	Then click on the edit campaign option.
	Then Update Amount.
	Then Chhose the Campaign image.
	Then Chhose the Avatar image.
	Then click on save changes CTA.