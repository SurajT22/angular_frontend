import { LevelDetails } from "./level-details.model";

export class InwardVerifyFileRes {
    BatchName !: string;
    ExpiryDate !: string;
    MFGDate !: string;
    LevelDetails !: LevelDetails[];

    constructor(){
        this.LevelDetails = [];
    }
}