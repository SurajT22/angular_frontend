import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoaderService } from "../../../core/services/loader.service";
import { AlertService } from "../../../core/services/alert.service";
import { Dashboard } from "../../../shared/models/entities/dashboard/dashboard-total.model";
import { ApiDashboardService } from "../../../shared/apis/api-dashboard.service";
import { pieChartDashboardData } from "../../../shared/models/entities/dashboard/pie-chart.model";



@Injectable({
    providedIn: 'root',
})
export class DashboardDetailsService {
    apiDashboardService = inject(ApiDashboardService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);


    getAllDashboard(): Observable<Dashboard>{
        this.loaderService.show();
        return this.apiDashboardService.getAllDashboardTotal().pipe(
            map((response) => {
                return response;
            }),
        );
    }
    getAllBatchList():Observable<string[]>{
        this.loaderService.show();
        return this.apiDashboardService.getAllBatchList().pipe(
            map((response: any) => {
                return response;
            }),
        );
    }

    getBatchPichart(batchName: string): Observable<pieChartDashboardData> {
        this.loaderService.show();
        return this.apiDashboardService.getBatchPichart(batchName)
            .pipe(map((response) => {
                return response;
            }));
    }
}