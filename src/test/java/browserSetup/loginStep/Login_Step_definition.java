package browserSetup.loginStep;


import java.util.Random;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import ObjectRepository.LoginObject;
import browserSetup.BrowserSetup;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class Login_Step_definition extends BrowserSetup {
	PerformAction wait = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Random rad = new Random();
	String name = "" + rad.nextInt(1000);
	// Open web site URl
	@Given("^Open the application url\\.$")
	public void open_the_website_url() throws Throwable {
		driver.get(AppURL);
	    driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		log.info("It's opening the website URL");
	}

	
	@Then("^Click on Join now for free CTA\\.$")
	public void click_on_Login_button() throws Throwable {
		webelement = driver.findElement(LoginObject.join);
		wait.implictywait(driver);
		webelement.click();
		wait.implictywait(driver);
		Thread.sleep(2000);
		log.info("Click on Join now button");
	}
	
	@Then("^Click on Sign up with Twitter account CTA\\.$")
	public void click_Sign_up_with_face_book() throws Throwable {
		webelement = driver.findElement(LoginObject.TWlogin);
		wait.implictywait(driver);
		webelement.click();
		wait.implictywait(driver);
		Thread.sleep(1000);
		log.info("Click on Twitter account button");
	}
	
	@Then("^Enter email address as \"([^\"]*)\"\\.$")
	public void enter_user_email_address_as(String email) throws Throwable {

		webelement = driver.findElement(LoginObject.UserId);
		webelement.click();
		wait.implictywait(driver);
		webelement.clear();
		wait.implictywait(driver);
		webelement.sendKeys(email);
		wait.implictywait(driver);
		log.info("It's entering the user email Address");
	}

	@Then("^Enter the Password \"([^\"]*)\"\\.$")
	public void enter_the_Password(String passwd) throws Throwable {
		webelement = driver.findElement(LoginObject.userpass);
		webelement.click();
		wait.implictywait(driver);
		webelement.clear();
		wait.implictywait(driver);
		webelement.sendKeys(passwd);
		wait.implictywait(driver);
		log.info("It's entering the user password");
	}
	
	@Then("^Click on Login CTA\\.$")
	public void click__Login_button() throws Throwable {
		webelement = driver.findElement(LoginObject.login);
		wait.implictywait(driver);
		webelement.click();
		wait.implictywait(driver);
		Thread.sleep(2000);
		log.info("Click on Login button");	
	}	

@Then("^Click On Start your own campaign CTA\\.$")
public void click_On_Start_your_own_campaign_CTA() throws Throwable {
	webelement = driver.findElement(LoginObject.Start_own_campaign);
	webelement.click();
	wait.implictywait(driver);
	log.info("Click on campaign button");	
}
@And("^Enter the charity amount \"([^\"]*)\"\\.$")
public void enter_the_charity(String amount) throws Throwable {
	webelement = driver.findElement(LoginObject.Charity_amount);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(amount);
	wait.implictywait(driver);
	log.info("It's entering the charity amount");
}
@And("^Enter the campaign title \"([^\"]*)\"\\.$")
public void enter_the_campaign_title(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.Charity_title);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	
	
	webelement.sendKeys(arg1+name);
	wait.implictywait(driver);
	log.info("It's entering the charity Title");
    
}

@And("^Enter the Find charity \"([^\"]*)\"\\.$")
public void enter_the_Find_charity(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.Find_Charity);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(arg1);
	wait.implictywait(driver);
	Actions a=new Actions (driver);
	a.click(webelement).build().perform();
	wait.implictywait(driver);
	  a.sendKeys("Darul Qalb").build().perform();
	  wait.implictywait(driver);
	  log.info("It's entering the charity Find"); 
}

@And("^Enter the Description charity \"([^\"]*)\"\\.$")
public void enter_the_Description_charity(String arg1) throws Throwable {
    
	webelement = driver.findElement(LoginObject.Charity_Description);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(arg1);
	wait.implictywait(driver);
	log.info("It's entering the charity Description"); 
}

@And("^Click the Next CTA\\.$")
public void click_the_Next_CTA() throws Throwable {
	webelement = driver.findElement(LoginObject.Charity_Next);
	webelement.click();
	wait.implictywait(driver);
	log.info("Click on Next button");	
}

@And("^Enter the Topic Name \"([^\"]*)\"\\.$")
public void enter_the_Topic_Name(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.Enter_topic);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(arg1);
	wait.implictywait(driver);
	log.info("It's entering the Topic Name"); 
    
}

@And("^Click on create CTA\\.$")
public void click_on_create_CTA() throws Throwable {
	webelement = driver.findElement(LoginObject.create);
	webelement.click();
	wait.implictywait(driver);  
	log.info("Click on create button");	
}

@And("^Click on Edit campaign\\.$")
public void click_on_Edit_campaign() throws Throwable {
	webelement = driver.findElement(LoginObject.Edit_campaign);
	webelement.click();
	wait.implictywait(driver);    
	log.info("Click on Edit button");	
}

@And("^Click on Invite your team\\.$")
public void click_on_Invite_your_team() throws Throwable {
    
	webelement = driver.findElement(LoginObject.invite_team);
	webelement.click();
	wait.implictywait(driver);  
	Thread.sleep(2000);
	log.info("Click on Invite your team button");	
}


}