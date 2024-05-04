import { ColumnHeader } from "./column-header.model";
import { HRFValue } from "./hrf-value.model";

export class ReportSettings{
    CompanyName !: string;
    CompanyAddress !: string;
    ColumnHeader : ColumnHeader;
    HRFValue : HRFValue;

    constructor(){
        this.ColumnHeader = new ColumnHeader();
        this.HRFValue = new HRFValue();
    }
}