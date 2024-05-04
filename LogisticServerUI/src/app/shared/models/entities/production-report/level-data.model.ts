export class LevelData{
    GTIN !: string;
    PackagingLevel !: string;
    public constructor(init?:Partial<LevelData>){
        Object.assign(this,init);
    }
}