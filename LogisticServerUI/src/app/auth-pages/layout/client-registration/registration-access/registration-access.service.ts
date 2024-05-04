import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../../core/services/alert.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { ApiClientService } from "../../../../shared/apis/api-client.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RegistrationAccessService{
    apiKevinWebService = inject(ApiClientService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    registrationAccess(clientIp: string): Observable<void> {
        this.loaderService.show();
        return this.apiKevinWebService.registerAccess(clientIp).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }
}