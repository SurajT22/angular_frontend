import { InwardTypeEnum } from "../../entities/batch-detail/enum/inward-type.enum";

export class InwardBatch{
    regulatory !:string;
    lineNumber !:string;
    inwardType :InwardTypeEnum = InwardTypeEnum.DIRECT_INWARD;
    accountName !:string;
    scanner !:boolean;
    scannedData !:string;
    productName !:string;
    batchName !:string;
    gtin !:string;
    expiryDate !:string;
    mfg !:string;
    newPo !:boolean;
    poNumber !:string;
    packagingLevel !: string;
}