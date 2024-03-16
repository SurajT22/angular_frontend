import { ReportSelectionEnum } from "./enums/report-selection.enum";
import { StationEnum } from "./enums/station.enum";

export class AuditReport{
    DateTime !: string;
    UserName !:string;
    Audit !:string;
    Activity !:string;
    CurrentValue !:string;
    PreviousValue !:string;
    Model !:string;
    Batch !:string;
    Type !:string;
    Station!: StationEnum;
    ReportSelection !:ReportSelectionEnum;

}