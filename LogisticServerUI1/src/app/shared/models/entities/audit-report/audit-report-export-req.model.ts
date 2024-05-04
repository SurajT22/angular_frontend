export class AuditReportExportReq{
    StartDate !: string;
    EndDate !: string;
    UserName !: string;
    EventFilter !: string;
    StartPage !: string;
    EndPage !: string;
    ReportFormat !: string;
    BatchName !: string;
}