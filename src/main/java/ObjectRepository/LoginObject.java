package ObjectRepository;

import org.openqa.selenium.By;

public class LoginObject {
	public static By join = By.id("home_index__primary_button_button_primary_green__join_now_for_free");
	public static By TWlogin=By.cssSelector("div.stack>a[href='/users/auth/twitter']");
	public static By UserId=By.id("username_or_email");
	public static By userpass = By.id("password");
	public static By login = By.id("allow");

	
	public static By campaign=By.cssSelector("body > footer > div > div > div > div.eight.columns > nav > ul:nth-child(1) > li:nth-child(6) > a");
	public static By Start_own_campaign=By.cssSelector("body>div.campaigns.campaigns-search.container.search > div > div.search > div > div > a.button.primary.green.create");
	public static By Charity_amount =By.id("charity_campaign_goal_dollars");
	public static By Charity_hashtag=By.cssSelector(".input[placeholder='Enter a hashtag']");
	public static By your_rate_metting=By.id("user_videoconference_price");
	public static By create=By.cssSelector(".button[type='submit']");
	 public static By invite_team=By.cssSelector("div.container>div >div>a");
	    public static By enter_more_email=By.cssSelector(".input[placeholder='Enter emails']");
	    public static By invite_team_more=By.cssSelector(".button[type='submit']");
	    
	    public static By Search_exitsing=By.id("q");
	    
	 


   
    
    //update the Campaign 

	public static By edit_existing_campaign=By.xpath("//a[text()='Edit campaign']");
	public static By udate_amount=By.id("charity_campaign_goal_dollars");
    public static By Campaign_image=By.xpath("(//label[text()='Choose image'])[1]");
    public static By save_changes=By.xpath("//button[text()='Save changes']");
   
}
