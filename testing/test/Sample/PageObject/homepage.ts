import { by, element, ElementFinder } from "protractor";

export class calci{

    firstbox:ElementFinder;
    Secondbox:ElementFinder;
    button:ElementFinder;
    result:ElementFinder

    constructor(){
        this.firstbox=element(by.model("first"));
        this.Secondbox=element(by.model("second"));
        this.button= element(by.id("gobutton"));
        this.result=element(by.className("ng-binding"));
    }
}