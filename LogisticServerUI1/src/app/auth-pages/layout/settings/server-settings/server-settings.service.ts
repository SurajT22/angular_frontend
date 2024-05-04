import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../../core/services/alert.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { ApiServerSettingService } from "../../../../shared/apis/api-server-settings.service";
import { Observable, map } from "rxjs";
import { AvailableUidLength } from "../../../../shared/models/entities/server-settings/available-uid-length.model";
import { UidDetails } from "../../../../shared/models/entities/server-settings/uid-details.model";
import { GenerateUidReq } from "../../../../shared/models/entities/server-settings/generate-uid-req.model";

@Injectable({
    providedIn: 'root',
})
export class ServerSettingService {
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiServerSettingService = inject(ApiServerSettingService);

    getAvailableUidLengths(): Observable<AvailableUidLength> {
        this.loaderService.show();
        return this.apiServerSettingService.getAvailableUidLength()
            .pipe(map((response) => {
                return response;
            }));
    }

    getUidDetail(uidLength: string, uidType: string): Observable<UidDetails> {
        this.loaderService.show();
        return this.apiServerSettingService.getUidDetails(uidLength, uidType)
            .pipe(map((response) => {
                return response;
            }));
    }

    generateUid(generateReq: GenerateUidReq): Observable<void> {
        this.loaderService.show();
        return this.apiServerSettingService.generateUID(generateReq)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }
}