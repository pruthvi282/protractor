"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calci = void 0;
const protractor_1 = require("protractor");
class calci {
    constructor() {
        this.firstbox = protractor_1.element(protractor_1.by.model("first"));
        this.Secondbox = protractor_1.element(protractor_1.by.model("second"));
        this.button = protractor_1.element(protractor_1.by.id("gobutton"));
        this.result = protractor_1.element(protractor_1.by.className("ng-binding"));
    }
}
exports.calci = calci;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0L2hvbWVwYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLEtBQUs7SUFPZDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztDQUNKO0FBYkQsc0JBYUMifQ==