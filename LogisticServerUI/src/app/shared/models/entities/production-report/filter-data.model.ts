import { LevelData } from "./level-data.model";

export class FilterData {
    BatchName !: string;
    ProductName !: string;
    LevelData !: LevelData[];
    
    public constructor(init?:Partial<LevelData>){
        Object.assign(this,init);
    }
}