import { Params } from "@angular/router";

export class AuditReportReq{
  StartDate !: string;
  EndDate !: string;
  UserName !: string;
  EventFilter !: string;
  StartIndex !: string;
  PageSize !: string;
  BatchName !: string;
  public constructor(init?: Partial<AuditReportReq>) {
    Object.assign(this, init);
  }
}