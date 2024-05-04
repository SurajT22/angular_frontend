import { ReportTypeEnum } from "./enums/report-type.enum";
import { ReportViewEnum } from "./enums/report-view.enum";

export class ProductionReport {
    ReportType !: ReportTypeEnum;
    ReportView !: ReportViewEnum;
    LineNumber !: string;
    BatchName !: string;
    ProductName !: string;
    GTIN !: string;
    Status !: string;
    WareHouseReport : boolean = false;
    PackagingLevel !: string;

    public constructor(init? : Partial<ProductionReport>){
        Object.assign(this,init);
    }
}