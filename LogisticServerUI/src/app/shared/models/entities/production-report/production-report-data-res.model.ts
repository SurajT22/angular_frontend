import { CountData } from "./count-data.model";
import { LoosePackPallet } from "./loose-pack-pallet.model";
import { LoosePackShipper } from "./loose-pack-shipper.model";
import { ParentChildData } from "./parent-child-data.model";
import { PCRStationDetails } from "./pcr-station-details.model";
import { ProductData } from "./product-data.model";
import { ReconciliationData } from "./reconciliation-data.model";
import { SerialNumberData } from "./serial-number-data.model";
import { StationDetails } from "./station-details.model";

export class ProductionReportDataRes{
    ReportName !: string;
    TotalData !: string;
    CountData !: CountData;
    SerialNumberData !: SerialNumberData[];
    ReconciliationData !: ReconciliationData[];
    StationDetails !: StationDetails | PCRStationDetails[];
    ProductData !: ProductData;
    ParentChildData !: ParentChildData[];
    LoosePackPallet !: LoosePackPallet[];
    LoosePackShipper !: LoosePackShipper[];
}