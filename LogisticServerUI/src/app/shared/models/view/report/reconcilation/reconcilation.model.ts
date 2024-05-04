import { ReportTypeEnum } from "../production-report/enums/report-type.enum";

export class Reconcilation{
    ReportType!: ReportTypeEnum;
    Batch !:string;
    GTIN !:string;
    packageLevel !:string;
}