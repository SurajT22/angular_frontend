import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../../core/services/alert.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { ApiClientService } from "../../../../shared/apis/api-client.service";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RegistrationAccessService{
    apiKevinWebService = inject(ApiClientService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    registrationAccess(clientIp: string) {
        this.loaderService.show();
        return this.apiKevinWebService.registerAccess(clientIp).pipe(
            map((response) => {
                this.alertService.success('Registration Access Successful');
                return response;
            }),
        );
    }
}