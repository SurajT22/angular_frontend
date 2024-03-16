import { BaseEntity } from "../../common/base-entity.model";
import { TestStatusEnum } from "./enums/test-status.enum";


export class TestDetails extends BaseEntity{
    ipAddress!: string;
    macAddress!: string;
    lineNumber!: string;
    plantName!: string;
    location!: string;
    status!: TestStatusEnum;
}
 