import { browser } from "protractor";


var{Before,After,Status}=require("cucumber")

// Before({tags: "@AngularTesting"}, function () {
// console.log("open angular site")
//   });

 Before({tags: "@calculatorTesting"}, function () {
    console.log("open calculator site")
      });

After({tags: "@AngularTesting"}, function () {
        console.log("aumgalr site test completed")
          });
 After(async function(scenario) {

  if(scenario.result.status=== Status.FAILED){
   const screenshot=await browser.takeScreenshot();
     this.attach(screenshot,"image/png");
 } 
  
              });