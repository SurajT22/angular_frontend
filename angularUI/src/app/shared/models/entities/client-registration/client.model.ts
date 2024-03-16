import { BaseEntity } from "../../common/base-entity.model";
import { RegistrationStatusEnum } from "./enums/registration-status.enum";

export class Client{
    ip!: string;
    mac_id!: string;
    line_number!: string;
    plant_name!: string;
    location!: string;
    status!: RegistrationStatusEnum;
    Date_Time!: Date;
    packaging_Level!: string;
    regulatory!: string;
    system_name!: string;
    account_type!: string;
    System_Model!: string;
}