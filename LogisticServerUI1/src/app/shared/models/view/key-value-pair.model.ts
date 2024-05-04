export class KeyValuePair{
    Name!: string;
    Value!: string;

    public constructor(init?: Partial<KeyValuePair>){
        Object.assign(this, init);
    }
}