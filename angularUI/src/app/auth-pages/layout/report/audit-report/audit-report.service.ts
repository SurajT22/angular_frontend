import { Injectable, inject } from "@angular/core";
import { ApiClientService } from "../../../../shared/apis/api-client.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { AuditReport } from "../../../../shared/models/entities/audit-report/audit-report.model";


@Injectable({
    providedIn:'root',
})
export class AuditReportService{
    apiKevinWebService = inject(ApiClientService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    createAuditReport(auditreport: AuditReport): Observable<AuditReport> {
        this.loaderService.show();
        return this.apiKevinWebService.createAuditReport(auditreport).pipe(
            map((response) => {
                
                return response;
            }),
        );
    }
}