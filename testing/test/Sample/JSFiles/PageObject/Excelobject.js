"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex = void 0;
class ex {
    constructor() {
        var XLSX = require('xlsx');
        var workbook = XLSX.readFile('test.xlsx');
        var first_sheet_name = workbook.SheetNames[0];
        var address_of_cell1 = 'A1';
        var address_of_cell2 = 'B1';
        var worksheet = workbook.Sheets[first_sheet_name];
        var desired_cell1 = worksheet[address_of_cell1];
        var desired_cell2 = worksheet[address_of_cell2];
        this.desired_value1 = desired_cell1.v;
        this.desired_value2 = desired_cell2.v;
    }
}
exports.ex = ex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjZWxvYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0L0V4Y2Vsb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLE1BQWEsRUFBRTtJQUlmO1FBQ0ksSUFBSSxJQUFJLEdBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEMsSUFBSSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBSTVCLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUdsRCxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUkvQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBSXRDLENBQUM7Q0FDSjtBQTVCRCxnQkE0QkMifQ==