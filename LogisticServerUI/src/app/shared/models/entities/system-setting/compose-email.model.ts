export class ComposeEmail{
    From !:string;
    To !:string[];
    Cc !:string[];
    Subject !:string;
    ComposeMail !:string;
    FileNameAndPath !:string[];

    constructor(init?: Partial<ComposeEmail>) {
        Object.assign(this, init);
      }
}