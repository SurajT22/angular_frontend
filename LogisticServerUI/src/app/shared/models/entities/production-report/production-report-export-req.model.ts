export class ProductionReportExportReq{
    BatchName !: string;
    GTIN !: string;
    PackagingLevel !: string;
    ReportType !: string;
    ReportName !: string;
    SerialNumberStatus !: string;
    StartPage !: string;
    EndPage !: string;
    ReportFormat !: string;
    Warehouse !: boolean;
}