import { RegulatoryEnum } from "./enums/sscc-regulatory.enum";
import { SsccStatusEnum } from "./enums/sscc-status.enum";


export class Sscc{
    ID!: string;
    Start !:string;
    End !:string;
    UserLimit !:string;
    ExDigit !:string;
    Status !: SsccStatusEnum;
    DateTime !: Date;
    Regulatory !: RegulatoryEnum;
    RemainingQty !:string;
    CompanyPrefrix !:string;
    Quantity !: string;
}