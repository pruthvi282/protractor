

import { Workbook } from "exceljs";
import { browser, element,by } from "protractor";
import { ex } from "../PageObject/Excelobject";

let a=new ex();
describe("first test" ,function(){

    it("test",function(){
      
        browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
            browser.sleep(2000)
        });
        element(by.model("first")).sendKeys(a.desired_value2);
        element(by.model("second")).sendKeys(a.desired_value2);
        element(by.id("gobutton")).click().then(function(){
            browser.sleep(2000);
        });
    })
})

