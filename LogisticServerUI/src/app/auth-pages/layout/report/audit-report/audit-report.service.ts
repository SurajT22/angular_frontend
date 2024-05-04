import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { ApiReportService } from "../../../../shared/apis/api-report.service";
import { AuditReportReq } from "../../../../shared/models/entities/audit-report/audit-report-req.model";
import { AuditReportPageData } from "../../../../shared/models/entities/audit-report/audit-report-page-data.model";
import { AuditReportExportReq } from "../../../../shared/models/entities/audit-report/audit-report-export-req.model";
import { AuditReportRes } from "../../../../shared/models/entities/audit-report/audit-report-res.model";


@Injectable({
    providedIn: 'root',
})
export class AuditReportService {
    apiReportService = inject(ApiReportService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getAuditPageData(): Observable<AuditReportPageData> {
        this.loaderService.show();
        return this.apiReportService.getAuditReportPageData()
            .pipe(map((response) => {
                return response;
            }));
    }

    viewAuditReport(reqData: AuditReportReq): Observable<AuditReportRes> {
        this.loaderService.show();
        return this.apiReportService.viewAuditReport(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    exportAuditReport(reqData: AuditReportExportReq): Observable<string> {
        this.loaderService.show();
        return this.apiReportService.exportAuditReport(reqData)
            .pipe(map((response) => {
                var filePath = `${this.apiReportService.exportPath}${response.ReportPath}`;
                return filePath;
            }));
    }
}