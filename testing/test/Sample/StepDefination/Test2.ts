import {Given,When,Then} from "cucumber"
import { browser, element,by } from "protractor";
import { calci } from "../PageObject/homepage";
import chai from "chai"
var expect = chai.expect;
var cal=new calci;

Given('user is in the calculator site', async ()=> {
    await browser.get("http://juliemr.github.io/protractor-demo/")
  });

  When('user enters {string} and {string}', async (string, string2)=> {
    await cal.firstbox.sendKeys(string)
    await cal.Secondbox.sendKeys(string2)
  });

  Then('calci must add the above numbers and output should be {string}', async (string)=> {
    await cal.button.click().then(function(){
        browser.sleep(4000);
    })
    await cal.result.getText().then(function(text){
        expect(text).to.equal(string)   
    })
  });