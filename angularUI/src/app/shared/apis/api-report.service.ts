import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { AuditReport } from "../models/entities/audit-report/audit-report.model";

@Injectable({
    providedIn: 'root',
})
export class ApiReportService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get

    //#endregion

    //#region Post
    createAuditReport(auditreport:AuditReport){
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`,auditreport);
    }
    //#endregion

    //#region Put
    //#endregion

    //#region Delete
    //#endregion
}