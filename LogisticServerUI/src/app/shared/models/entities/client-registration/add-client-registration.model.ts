import { RegistrationStatusEnum } from "./enums/registration-status.enum";

export class AddClientRegistration{
    Ip!: string;
    MacId!: string;
    LineNumber!: string;
    PlantName!: string;
    Location!: string;
    Status!: RegistrationStatusEnum;
    DateTime!: Date;
    PackagingLevel!: string;
    Regulatory!: string;
    SystemName!: string;
    AccountType!: string;
    SystemModel!: string;

}