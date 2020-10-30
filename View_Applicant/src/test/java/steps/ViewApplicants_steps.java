package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ViewApplicants_steps {
	WebDriver driver;

	@Before()
	public void setup() {
		System.setProperty("webdriver.chrome.driver",
				"F:\\View_Applicant\\View_Applicant\\src\\test\\java\\resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);

	}

	@After()
	public void end() {
		driver.manage().deleteAllCookies();
		driver.quit();
	}
	
	@When("^user logs in \\(employer\\)$")
	public void user_logs_in_employer() throws Throwable {
		// user login
		driver.get("http://20.52.44.20/auth/login");
		driver.findElement(By.id("InputEmail")).sendKeys("testing.amalitech@gmail.com");
		driver.findElement(By.id("InputPassword1")).sendKeys("12345678!Aa");
		driver.findElement(By.id("signin_button")).click();	 
	}

	@When("^user clicks on view applicants \\(employer\\)$")
	public void user_clicks_on_view_applicants_employer() throws Throwable {
		Thread.sleep(5000);
		// click on job dropdown
		driver.findElement(By.id("")).click();
		
		Thread.sleep(3000);
		// click on view job from dropdown
		driver.findElement(By.id("")).click();
	}

	@Then("^user should be able to filter \\(employer\\)$")
	public void user_should_be_able_to_filter_employer() throws Throwable {
		// filter Type
		Thread.sleep(3000);
		Select type = new Select(driver.findElement(By.id("")));
		type.selectByVisibleText(" ");
	}

	@Then("^user can select a particular applicant \\(employer\\)$")
	public void user_can_select_a_particular_applicant_employer() throws Throwable {
		driver.findElement(By.id("")).click();
	}

	@Then("^user should be able to select applicant CV to download \\(employer\\)$")
	public void user_should_be_able_to_select_applicant_CV_to_download_employer() throws Throwable {
		driver.findElement(By.id("")).click();
	}

}
