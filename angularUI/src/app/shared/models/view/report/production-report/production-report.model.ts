import { ReportTypeEnum } from "./enums/report-type.enum";
import { ReportViewEnum } from "./enums/report-view.enum";

export class ProductionReport {
    ReportType!: ReportTypeEnum;
    ReportView !: ReportViewEnum;
    Batch!: string;
    ProductionName!: string;
    GTIN!: string;
    Status !: string;
    wareHouseReport !: Boolean;
}