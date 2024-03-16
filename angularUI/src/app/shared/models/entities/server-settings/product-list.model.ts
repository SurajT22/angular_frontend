import { HrfDetails } from "./hrf-details.model";
import { StationDetail } from "./station-details.model";

export class ProductList{
    ProductName!: string;
    GTIN !: string ;
    StationDetail !: string;
    Value !: string;
    HRFName !:string;
    HRFValue !:string;
    CompanyPrefrix!:string;
    BatchType !:string;
    LineNumber !:string;
    stationDetails !:string;
    hrfDetails !:string;
    productHeight !:string;
    productList !:string;
}