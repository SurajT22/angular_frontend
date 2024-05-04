import { BatchTypeEnum } from "../../entities/product/enum/batch-type.enum";
import { ViewStationDetail } from "./view-station-detail.model";

export class ViewAddProduct{
    ProductName!: string;
    ItemCode!:string;
    CompanyPrefix!:string;
    BatchType!: BatchTypeEnum;
    AccountName!: string;
    MAHGLNNumber!:string;
    CustomerProductCode!:string;
    ServerType!: string;
    StationDetails!: ViewStationDetail[];
}

