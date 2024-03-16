import { Injectable, inject } from "@angular/core";
import { ApiClientService } from "../../../../shared/apis/api-client.service";
import { Client } from "../../../../shared/models/entities/client-registration/client.model";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RegistrationDetailsService {
    apiKevinWebService = inject(ApiClientService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    createClient(client: Client): Observable<Client> {
        this.loaderService.show();
        return this.apiKevinWebService.createClient(client).pipe(
            map((response) => {
                this.alertService.success('Client successfully created');
                return response;
            }),
        );
    }
}