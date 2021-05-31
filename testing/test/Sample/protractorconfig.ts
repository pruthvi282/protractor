import {Config} from "protractor"
import {onComplete} from "cucumber"



exports.config = {
    "directConnect" : true,
    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // The address of a running selenium server.
   // seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.

    specs: ['../featurefile/datadriven.feature'],
  
    cucumberOpts: {
     //tags:'@AngularTesting',
     
      format:"json:./cucumberreport.json",
      require: ['./StepDefination/*.js'],
     
  
    },
    onComplete: () =>{
      var reporter = require('cucumber-html-reporter');
      var options = {
        theme: 'bootstrap',
        jsonFile: './JSFiles/cucumberreport.json',
        output: './Reports/cucumber.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    }
  };