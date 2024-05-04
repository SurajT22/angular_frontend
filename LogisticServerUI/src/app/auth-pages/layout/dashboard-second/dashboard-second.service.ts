import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../core/services/loader.service";
import { AlertService } from "../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { ApiDashboardService } from "../../../shared/apis/api-dashboard.service";
import { pieChartDashboardData } from "../../../shared/models/entities/dashboard/pie-chart.model";

@Injectable({
    providedIn: 'root',
})
export class DashboardSecondService {
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiDashboardService = inject(ApiDashboardService);

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