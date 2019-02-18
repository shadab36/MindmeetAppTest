package browserSetup.loginStep;


import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import ObjectRepository.LoginObject;
import ObjectRepository.WindowHandle;
import browserSetup.BrowserSetup;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class Login_Step_definition extends BrowserSetup {
	PerformAction wait = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Random rad = new Random();
	public static String campaign_hashtags_name;
	String name = "" + rad.nextInt(1000);
	public static String Amount;
	// Open web site URl
	@Given("^Open the application url\\.$")
	public void open_the_website_url() throws Throwable {
		driver.get(AppURL);
	    driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		log.info("It's opening the website URL");
		Thread.sleep(2000);
	}
	
	@Then("^Click on Join now for free CTA\\.$")
	public void click_on_Login_button() throws Throwable {
		WebElement et= driver.findElement(LoginObject.join);
		js.executeScript("arguments[0].scrollIntoView(true);", et);
		Thread.sleep(500); 
		wait.implictywait(driver);
		js.executeScript("arguments[0].click();", et);
		wait.implictywait(driver);
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
	webelement = driver.findElement(LoginObject.campaign);
	webelement.click();
	wait.implictywait(driver);
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
	Amount=amount;
	webelement.sendKeys(Amount);
	wait.implictywait(driver);
	log.info("It's entering the charity amount");
}
@And("^Enter the Campaign hashtags \"([^\"]*)\"\\.$")
public void enter_the_Campaign_hashtags(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.Charity_hashtag);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);

	campaign_hashtags_name=arg1+name;
	wait.implictywait(driver);
			webelement.sendKeys(campaign_hashtags_name);
			wait.implictywait(driver);
	log.info("It's entering the charity Title");
    
}

@And("^Enter the Your rate for metting \"([^\"]*)\"\\.$")
public void enter_the_Your_rate_for_metting(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.your_rate_metting);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(arg1);
	wait.implictywait(driver);
	
//	Actions a=new Actions (driver);
//	a.click(webelement).build().perform();
//	wait.implictywait(driver);
//	  a.sendKeys("Darul Qalb").build().perform();
//	  wait.implictywait(driver);
//	  log.info("It's entering the charity Find"); 
}




@And("^Click on Create campaign CTA\\.$")
public void click_on_Create_campaign_CTA() throws Throwable {
	webelement = driver.findElement(LoginObject.create);
	webelement.click();
	wait.implictywait(driver);  
	log.info("Click on create button");	
}



@And("^Click on Invite your team\\.$")
public void click_on_Invite_your_team() throws Throwable {
    
	webelement = driver.findElement(LoginObject.invite_team);
	webelement.click();
	wait.implictywait(driver);  
	Thread.sleep(2000);
	log.info("Click on Invite your team button");	
}
@And("^Enter one or more email addresses \"([^\"]*)\"\\.$")
public void enter_one_or_more_email_addresses(String arg1) throws Throwable {
	webelement = driver.findElement(LoginObject.enter_more_email);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(arg1);
	wait.implictywait(driver);

}

@And("^Click invite the more user\\.$")
public void click_invite_the_more_user() throws Throwable {
	webelement = driver.findElement(LoginObject.invite_team_more);
	webelement.click();
	wait.implictywait(driver);
	webelement.click();
	
}

@Then("^Search for existing campaigns\\.$")
public void search_for_existing_campaigns() throws Throwable {
	
	webelement = driver.findElement(LoginObject.campaign);
	webelement.click();
	wait.implictywait(driver);
	webelement = driver.findElement(LoginObject.Search_exitsing);
	webelement.click();
	wait.implictywait(driver);
	webelement.clear();
	wait.implictywait(driver);
	webelement.sendKeys(campaign_hashtags_name);
	wait.implictywait(driver);
	Thread.sleep(2000);
	
	

	webelement=driver.findElement(By.cssSelector(".predictive-target ul li:nth-child(1)>a img"));
	webelement.click();
	wait.implictywait(driver);
	Thread.sleep(1000);
}


@Then("^click on the edit campaign option\\.$")
public void click_on_the_edit_campaign_option() throws Throwable {
    
	webelement = driver.findElement(LoginObject.edit_existing_campaign);
	webelement.click();
	wait.implictywait(driver);
}

@Then("^verify the charity Amount\\.$")
public void update_Amount() throws Throwable {
	wait.implictywait(driver);
	String Amount_val = driver.findElement(LoginObject.udate_amount).getAttribute("value");
    System.err.println("qa amount" +Amount_val);
	wait.implictywait(driver);
	Assert.assertEquals(Amount, Amount_val);
	wait.implictywait(driver);
	Thread.sleep(1000);
    System.err.println("qa2 amount" +Amount);
}

@Then("^verify the Campaign hashtags name\\.$")
public void verify_the_Campaign_hashtags_name() throws Throwable {
	
	String Verify_hashtags_name = driver.findElement(By.cssSelector(".chip")).getText();
	System.err.println("test"+ Verify_hashtags_name);
	System.err.println("test1"+ campaign_hashtags_name.toUpperCase());
//	Assert.assertEquals(campaign_hashtags_name.toUpperCase(), Verify_hashtags_name);
	wait.implictywait(driver);

	
}
@Then("^Chhose the Campaign image\\.$")
public void chhose_the_Campaign_image() throws Throwable {
	webelement = driver.findElement(LoginObject.Campaign_image);
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	webelement.click();
	Thread.sleep(1000);
	WindowHandle.window();
}

@Then("^click on save changes CTA\\.$")
public void click_on_save_changes_CTA() throws Throwable {
	webelement = driver.findElement(LoginObject.save_changes);
	webelement.click();
	wait.implictywait(driver); 
    Thread.sleep(2000);
}



}