"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Excelobject_1 = require("../PageObject/Excelobject");
let a = new Excelobject_1.ex();
describe("first test", function () {
    it("test", function () {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/").then(function () {
            protractor_1.browser.sleep(2000);
        });
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a.desired_value2);
        protractor_1.element(protractor_1.by.model("second")).sendKeys(a.desired_value2);
        protractor_1.element(protractor_1.by.id("gobutton")).click().then(function () {
            protractor_1.browser.sleep(2000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZmluYXRpb24vRXhjZWxUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsMkNBQWlEO0FBQ2pELDJEQUErQztBQUUvQyxJQUFJLENBQUMsR0FBQyxJQUFJLGdCQUFFLEVBQUUsQ0FBQztBQUlmLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsRUFBRSxDQUFDLE1BQU0sRUFBQztRQUVOLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFELG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RCxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUNwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==