import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { Dashboard } from "../models/entities/dashboard/dashboard-total.model";
import { pieChartDashboardData } from "../models/entities/dashboard/pie-chart.model";

@Injectable({
    providedIn: 'root',
})
export class ApiDashboardService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getAllDashboardTotal():Observable<Dashboard>{
        return this.api.get(`${this.baseUrl}/webapi_Dashboard_GetDashboardDetails`);
    }

    //#region Get
    getAllBatchList():Observable<void>{
        return this.api.get(`${this.baseUrl}/webapi_Dashboard_GetBatchList`);
    }
     //#endregion

     //#region Get
     getBatchPichart(batchName: string):Observable<pieChartDashboardData>{
        return this.api.get(`${this.baseUrl}/webapi_Dashboard_GetBatchSerialNumbersDetails?BatchName=${batchName}`);
    }

}