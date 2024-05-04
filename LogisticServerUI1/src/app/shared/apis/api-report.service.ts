import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { AuditReportPageData } from "../models/entities/audit-report/audit-report-page-data.model";
import { AuditReportReq } from "../models/entities/audit-report/audit-report-req.model";
import { AuditReportExportReq } from "../models/entities/audit-report/audit-report-export-req.model";
import { AuditReportRes } from "../models/entities/audit-report/audit-report-res.model";
import { AuditReportExportRes } from "../models/entities/audit-report/audit-report-export-res.model";
import { ProductionReportPageData } from "../models/entities/production-report/production-report-page-data.model";
import { FilterData } from "../models/entities/production-report/filter-data.model";
import { ProductionReportDataReq } from "../models/entities/production-report/production-report-data-req.model";
import { ProductionReportDataRes } from "../models/entities/production-report/production-report-data-res.model";
import { ReportSettings } from "../models/entities/report-settings/report-settings.model";
import { ProductionReportExportRes } from "../models/entities/production-report/production-report-export-res.model";
import { ProductionReportExportReq } from "../models/entities/production-report/production-report-export-req.model";
import { AppConfigService } from "../../core/services/app-config.service";

@Injectable({
    providedIn: 'root',
})
export class ApiReportService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    get exportPath():string{
        return  AppConfigService?.appSettings?.exportPath;
    }

    //#region Get
    getAuditReportPageData():Observable<AuditReportPageData>{
        return this.api.get(`${this.baseUrl}/webapi_AuditReport_GetAuditReportPage`);
    }

    getProductionReportPageData():Observable<ProductionReportPageData>{
        return this.api.get(`${this.baseUrl}/webapi_ProductionReport_PageDetails`);
    }

    getBatchListFromLine(lineNumber:string):Observable<FilterData[]>{
        return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetBatchListFromLine?LineNumber=${lineNumber}`);
    }

    getProductwiseBatchList(productName:string):Observable<FilterData[]>{
        return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetProductwiseBatchList?ProductName=${productName}`);
    }

    getPOwiseBatchList(poNumber:string):Observable<FilterData[]>{
        return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetPOwiseBatchList?PONumber=${poNumber}`);
    }

    getReportSettings():Observable<ReportSettings>{
        return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetReportSettings`);
    }
    //#endregion

    //#region Post
    viewAuditReport(reqData:AuditReportReq):Observable<AuditReportRes>{
        return this.api.post(`${this.baseUrl}/webapi_AuditReport_AuditReportData`,reqData);
    }

    exportAuditReport(reqData:AuditReportExportReq):Observable<AuditReportExportRes>{
        return this.api.post(`${this.baseUrl}/webapi_AuditReport_AuditReportExport`,reqData);
    }
    
    viewProductionReport(reqData:ProductionReportDataReq): Observable<ProductionReportDataRes>{
        return this.api.post(`${this.baseUrl}/webapi_ProductionReport_ProductionReportData`,reqData);
    }

    exportProductionReport(reqData:ProductionReportExportReq):Observable<ProductionReportExportRes>{
        return this.api.post(`${this.baseUrl}/webapi_ProductionReport_ExportReport`,reqData);
    }
    //#endregion
    
    //#region Put
    updateReportSetting(reqData: ReportSettings):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_ProductionReport_SaveReportSettings`,reqData);
    }
    //#endregion

    //#region Delete
    //#endregion
}