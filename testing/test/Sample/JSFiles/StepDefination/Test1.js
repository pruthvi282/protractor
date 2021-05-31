"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const homepage_1 = require("../PageObject/homepage");
var cal = new homepage_1.calci;
cucumber_1.Given('when user is in the calculator page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/");
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.When('enter the number', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.element(protractor_1.by.name("name")).sendKeys("email");
}));
cucumber_1.Then('the calculator should calculate it', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.element(protractor_1.by.buttonText("Submit")).click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5hdGlvbi9UZXN0MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF3QztBQUN4QywyQ0FBaUQ7QUFDakQscURBQStDO0FBRy9DLElBQUksR0FBRyxHQUFDLElBQUksZ0JBQUssQ0FBQztBQUNsQixnQkFBSyxDQUFDLHFDQUFxQyxFQUFHLEdBQVEsRUFBRTtJQUNyRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUE7SUFDcEUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsa0JBQWtCLEVBQUUsR0FBUSxFQUFFO0lBQ2pDLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLG9DQUFvQyxFQUFFLEdBQVEsRUFBRTtJQUNuRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pELENBQUMsQ0FBQSxDQUFDLENBQUMifQ==