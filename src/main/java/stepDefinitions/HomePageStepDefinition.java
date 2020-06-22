package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;



public class HomePageStepDefinition {

    WebDriver driver;
    Actions action;

    @Given("^user is on home page$")
    public void user_is_on_homepage() {
        System.setProperty("webdriver.chrome.driver", "/Users/rahul/Desktop/testing/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://automationpractice.com/index.php");
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
    }

    @When("^title home page is My Store$")
    public void title_home_page_is_My_Store() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("My Store", title);

    }
    @Then("^user inputs in search bar and user enters \"([^\"]*)\" and click$")
    public void userInputsInSearchBarAndUserEntersAndClick(String search) throws InterruptedException {
        driver.findElement(By.id("search_query_top")).sendKeys(search);
        driver.findElement(By.name("submit_search")).click();
        Thread.sleep(3000);
        driver.navigate().back();
    }
    @Then("^user hoover on women label$")
    public void userHooverOnWomenLabel() throws InterruptedException {
        Actions action = new Actions(driver);
    WebElement label=driver.findElement(By.xpath("//a[@class=\"sf-with-ul\"]"));
    action.moveToElement(label).build().perform();
    Thread.sleep(3000);

    }
    @Then("^user clicks on top trend banner$")
    public void user_clicks_on_top_trend_banner() throws InterruptedException {
        driver.findElement(By.xpath("/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[1]/a/img")).click();
        Thread.sleep(3000);
        driver.navigate().back();
    }
    @Then("^user input \"([^\"]*)\" in newsletter$")
    public void userInputInNewsletter(String email) {
        driver.findElement(By.id("newsletter-input")).sendKeys(email);

    }
    @Then("^user clicks on newsletter button$")
    public void user_clicks_on_newsletter_button() {
        driver.findElement(By.name("submitNewsletter")).click();
    }

    @Then("exit the browser")
    public void exit_the_browser() {
        driver.quit();

    }


}
