import { BaseEntity } from "../../common/base-entity.model";
import { RegistrationStatusEnum } from "./enums/registration-status.enum";

export class RegistrationDetail extends BaseEntity{
    ipAddress!: string;
    macAddress!: string;
    lineNumber!: string;
    plantName!: string;
    location!: string;
    status!: RegistrationStatusEnum;
}