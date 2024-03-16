import { BaseEntity } from "../../common/base-entity.model";
import { TestStatusEnum } from "./enums/test-status.enum";


export class TestClient extends BaseEntity{
    clientName!: string;
    ipAddress!: string;
    macAddress!: string;
    lineAddress!: string;
    plantName!: string;
    location!: string;
    status!: TestStatusEnum;
    pakingLevel!: string;
    states!: string;
    systemName!: string;
    systemModel!: string;
}