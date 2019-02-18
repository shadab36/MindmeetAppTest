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
		And Enter the Campaign hashtags "<Campaign hashtags>". 
		And Enter the Your rate for metting "<Your rate>". 
		And Click on Create campaign CTA. 
		And Click on Invite your team. 
		And Enter one or more email addresses "<Email Address>". 
		And  Click invite the more user. 
		Examples: 
			|Amount              |Campaign hashtags      |Your rate   |Email Address            | Topic Name   |
			|15                  | shadab                |  2         | test@gmail.com          |    test      |
			
		Scenario: update campaign 
			Then Search for existing campaigns. 
			Then click on the edit campaign option. 
			Then verify the charity Amount. 
			Then verify the Campaign hashtags name. 
			Then Chhose the Campaign image. 
			Then click on save changes CTA. 
			