import {Given,When,Then} from "cucumber"
import { browser, element,by } from "protractor";
import { calci } from "../PageObject/homepage";


var cal=new calci;
Given('when user is in the calculator page',  async ()=> {
   await browser.get("https://rahulshettyacademy.com/angularpractice/")
   await browser.manage().window().maximize();
  });

  When('enter the number', async ()=> {
    element(by.name("name")).sendKeys("email");
  });

  
  Then('the calculator should calculate it', async ()=> {
    await element(by.buttonText("Submit")).click();
  });