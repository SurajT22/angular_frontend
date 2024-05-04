import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../../core/services/alert.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { ApiReportService } from "../../../../shared/apis/api-report.service";
import { Observable, map } from "rxjs";
import { ProductionReportPageData } from "../../../../shared/models/entities/production-report/production-report-page-data.model";
import { FilterData } from "../../../../shared/models/entities/production-report/filter-data.model";
import { ProductionReportDataReq } from "../../../../shared/models/entities/production-report/production-report-data-req.model";
import { ProductionReportDataRes } from "../../../../shared/models/entities/production-report/production-report-data-res.model";
import { ReportSettings } from "../../../../shared/models/entities/report-settings/report-settings.model";
import { ProductionReportExportReq } from "../../../../shared/models/entities/production-report/production-report-export-req.model";
import { ApiProductService } from "../../../../shared/apis/api-product.service";
import { ApiBatchDetailService } from "../../../../shared/apis/api-batch-detail.service";

@Injectable({
    providedIn: 'root',
})
export class ProductionReportService {
    apiReportService = inject(ApiReportService);
    apiProductService = inject(ApiProductService);
    apiBatchDetailService = inject(ApiBatchDetailService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getProductList(): Observable<string[]> {
        this.loaderService.show();
        return this.apiProductService.getAllProductNames()
            .pipe(map((response) => {
                return response;
            }));
    }

    getPoList(): Observable<string[]> {
        this.loaderService.show();
        return this.apiBatchDetailService.getInwardPoList()
            .pipe(map((response) => {
                return response;
            }));
    }

    getProductionReportPageData(): Observable<ProductionReportPageData> {
        this.loaderService.show();
        return this.apiReportService.getProductionReportPageData()
            .pipe(map((response) => {
                return response;
            }));
    }

    getBatchListFromLine(lineNumber: string): Observable<FilterData[]> {
        this.loaderService.show();
        return this.apiReportService.getBatchListFromLine(lineNumber)
            .pipe(map((response) => {
                return response;
            }));
    }

    getProductwiseBatchList(productName: string): Observable<FilterData[]> {
        this.loaderService.show();
        return this.apiReportService.getProductwiseBatchList(productName)
            .pipe(map((response) => {
                return response;
            }));
    }

    getPOwiseBatchList(poNumber: string): Observable<FilterData[]> {
        this.loaderService.show();
        return this.apiReportService.getPOwiseBatchList(poNumber)
            .pipe(map((response) => {
                return response;
            }));
    }

    getReportSettings(): Observable<ReportSettings> {
        this.loaderService.show();
        return this.apiReportService.getReportSettings()
            .pipe(map((response) => {
                return response;
            }));
    }

    viewProductionReport(reqData: ProductionReportDataReq): Observable<ProductionReportDataRes> {
        this.loaderService.show();
        return this.apiReportService.viewProductionReport(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    exportProductionReport(reqData: ProductionReportExportReq): Observable<string> {
        this.loaderService.show();
        return this.apiReportService.exportProductionReport(reqData)
            .pipe(map((response) => {
                var filePath = `${this.apiReportService.exportPath}${response.ReportPath}`;
                return filePath;
            }));
    }

    updateReportSetting(reqData: ReportSettings): Observable<void> {
        this.loaderService.show();
        return this.apiReportService.updateReportSetting(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }
}