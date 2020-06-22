package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginStepDefinition {

    WebDriver driver;

    @Given("^user is already on Login Page$")
    public void user_already_on_login_page() {
        System.setProperty("webdriver.chrome.driver", "/Users/rahul/Desktop/testing/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://automationpractice.com/index.php");
    }

    @When("^title of login page is My Store$")
    public void title_of_login_page_is_My_Store() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("My Store", title);
    }

    @Then("Close the browser")
    public void close_the_browser(){
        driver.quit();

}

}