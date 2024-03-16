import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../../core/services/loader.service";
import { AlertService } from "../../../../../core/services/alert.service";
import { Prefix } from "../../../../../shared/models/entities/server-settings/prefix.model";
import { Observable, map } from "rxjs";
import { ApiServerSettingService } from "../../../../../shared/apis/api-server-settings.service";

@Injectable({
    providedIn: 'root',
})
export class PrefixDetailsService{
    apiServerSettingService = inject(ApiServerSettingService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    createPrefix(prefix: Prefix): Observable<Prefix> {
        this.loaderService.show();
        return this.apiServerSettingService.createPrefixDetail(prefix).pipe(
            map((response) => {
                this.alertService.success('Prefix detail successfully created');
                return response;
            }),
        );
    }
}