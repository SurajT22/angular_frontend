import { Injectable, inject } from "@angular/core";
import { Sscc } from "../../../../../shared/models/entities/server-settings/sscc.model";
import { LoaderService } from "../../../../../core/services/loader.service";
import { Observable, map } from "rxjs";
import { AlertService } from "../../../../../core/services/alert.service";
import { ApiServerSettingService } from "../../../../../shared/apis/api-server-settings.service";

@Injectable({
    providedIn: 'root',
})
export class SsccDetailsService {
    apiServerSettingService = inject(ApiServerSettingService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    createSsccDetail(sscc: Sscc): Observable<Sscc> {
        this.loaderService.show();
        return this.apiServerSettingService.createSsccDetail(sscc).pipe(
            map((response) => {
                this.alertService.success('Sscc successfully created');
                return response;
            }),
        );
    }
}