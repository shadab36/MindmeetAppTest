package ObjectRepository;

import org.openqa.selenium.By;

public class LoginObject {
	public static By join = By.id("home_index__primary_button_button_primary_green_overlay_opener__join_now_for_free");
	public static By TWlogin=By.id("home_index__primary_button_login_button_twitter__sign_up_with_twitter");
	public static By UserId=By.id("username_or_email");
	public static By userpass = By.id("password");
	public static By login = By.id("allow");

	
	
	public static By Start_own_campaign=By.cssSelector("body>div.campaigns.campaigns-search.container.search > div > div.search > div > div > a.button.primary.green.create");
	public static By Charity_amount =By.id("charity_campaign_goal_dollars");
	public static By Charity_title=By.id("charity_campaign_name");
	public static By Find_Charity=By.id("charity_name");
	public static By Charity_Description=By.id("charity_campaign_description");
	
	public static By Charity_Next=By.cssSelector("#new_charity_campaign  button.button.primary.green.modal-trigger");
	public static By Enter_topic=By.cssSelector(".chips>input");
	public static By create=By.cssSelector("#new_charity_campaign .button.primary.green:nth-child(2)");
    public static By Edit_campaign=By.cssSelector("body > div.container > div > div > a:nth-child(3)");
    public static By invite_team=By.cssSelector("#invite-team-form>footer>button");
	
    
    //update the Campaign 
    public static By home_page_title=By.cssSelector("body > header > div > div > div.four.columns.logo-container > h1 > a");
	public static By Search=By.id("q");
	 public static By goto_existing_Campaign=By.id("campaign_list__button_primary__go");
	public static By edit_existing_campaign=By.xpath("//a[text()='Edit campaign']");
	public static By udate_amount=By.id("charity_campaign_goal_dollars");
    public static By Campaign_image=By.xpath("(//label[text()='Choose image'])[1]");
    public static By Avtar_image=By.xpath("(//label[text()='Choose image'])[2]");
    public static By save_changes=By.xpath("//button[text()='Save changes']");
   
}
