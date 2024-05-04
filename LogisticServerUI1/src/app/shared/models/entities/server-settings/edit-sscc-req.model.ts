import { RegulatoryEnum } from "./enums/sscc-regulatory.enum";
import { SsccStatusEnum } from "./enums/sscc-status.enum";

export class EditSsccReq {
    ID !: string;
    CompanyPrefix !: string;
    ExtentionDigit!: string;
    Regulatory !: RegulatoryEnum;
    Status!: SsccStatusEnum;
}