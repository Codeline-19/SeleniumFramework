package com.lamtech.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^user on create new account page$")
    public void userOnCreateNewAccountPage() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        // open mercury website
        driver.get("https://demo1-m2.mage.direct/");

        //maximise browser
        driver.manage().window().maximize();

        //click on create new customer account link
        //driver.findElement(By.linkText(")).click();
    }

    @When("^user enters first name$")
    public void userEntersFirstName() {
    }

    @And("^user enters last name$")
    public void userEntersLastName() {
    }

    @And("^user enters an email$")
    public void userEntersAnEmail() {
    }

    @And("^user enters password$")
    public void userEntersPassword() {
    }

    @And("^user enters confirm password$")
    public void userEntersConfirmPassword() {
    }

    @Then("^click create an account$")
    public void clickCreateAnAccount() {
    }
}
