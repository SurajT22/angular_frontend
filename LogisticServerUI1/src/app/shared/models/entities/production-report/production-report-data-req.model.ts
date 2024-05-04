export class ProductionReportDataReq{
    BatchName !: string;
    GTIN !: string;
    PackagingLevel !: string;
    ReportType !: string;
    ReportName !: string;
    SerialNumberStatus !: string;
    StartIndex !: string;
    PageSize !: string;
    Warehouse : boolean = false;

    public constructor(init? : Partial<ProductionReportDataReq>){
        Object.assign(this,init);
    }
}