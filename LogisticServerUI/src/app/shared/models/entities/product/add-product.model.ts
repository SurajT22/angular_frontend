import { BatchTypeEnum } from "./enum/batch-type.enum";
import { StationDetails } from "./station-details.model";

export class AddProductDetail{
    ProductName!: string;
    ItemCode!:string;
    CompanyPrefix!:string;
    BatchType!: BatchTypeEnum;
    AccountName!: string;
    MAHGLNNumber!:string;
    CustomerProductCode!:string;
    ServerType!: string;
    StationDetails!:StationDetails[];
}