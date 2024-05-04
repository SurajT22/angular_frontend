import { RegulatoryEnum } from "./enums/sscc-regulatory.enum";
import { SsccStatusEnum } from "./enums/sscc-status.enum";


export class Sscc{
    ID!: string;
    StartRange !:string;
    EndRange !:string;
    UsedLimit !:string;
    ExtentionDigit !:string;
    Status !: SsccStatusEnum;
    DateTime !: Date;
    Regulatory !: RegulatoryEnum;
    RemainingQty !:string;
    CompanyPrefix !:string;
    Quantity !: string;
}