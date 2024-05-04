import { BarcodeTypeEnum } from "./enum/barcode-type.enum";

export class Product{
    ProductName!: string;
    ItemCode !: string;
    CompanyPrefix !: string;
    BatchType !: string;
    AccountName!: string;
    MAHGLNNumber!: string;
    CustomerProductCode!: string;
    ServerType!: string;
    GTIN!: string;
    PackagingLevel!: string;
    Layers!: string;
    ItemsInLayer!: string;
    BarcodeType!: BarcodeTypeEnum;
    SSCCPrefix!: string;
    FilterValue!: string;
    Recipe!: string;
    ProductHeight!: string;
    HRF1 !: string;
    HRF2 !: string;
    HRF3 !: string;
    HRF4 !: string;
    HRF5 !: string;
}