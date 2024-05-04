import { StationTypeEnum } from "../../common/enums/station-type.enum";
import { ThirdPartyEnum } from "../../common/enums/third-party.enum";
import { PackagingTypeEnum } from "../../entities/batch-detail/enum/packaging-type.enum";
import { BarcodeTypeEnum } from "../../entities/product/enum/barcode-type.enum";
import { HrfDetails } from "../product-list/hrf-details.model";

export class AddBatch{
    thirdParty !: ThirdPartyEnum;
    stationType !: StationTypeEnum;
    deviceId !: string;
    packagingType !:PackagingTypeEnum;
    accountName !:string;
    regulatory !:string;
    productName !:string;
    batchName !:string;
    gtin !:string;
    ssccPrefix !:string;
    filterValue !:string;
    expiryDate !: string;
    barcodeType !:BarcodeTypeEnum;
    layers !:string;
    poDnNo !:string;
    itemInLayer !:string;
    quantity !:string;
    directInward !: boolean;
    hrfDetails !:HrfDetails;
    
}