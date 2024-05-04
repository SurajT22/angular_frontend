import { Injectable, inject } from "@angular/core";
import { ApiClientService } from "../../../../shared/apis/api-client.service";
import { Client } from "../../../../shared/models/entities/client-registration/client.model";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { RegulatoryDetail } from "../../../../shared/models/entities/server-settings/regulatory-detail.model";


@Injectable({
    providedIn: 'root',
})
export class RegistrationDetailsService {
    apiKevinWebService = inject(ApiClientService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);


    getAllClients(): Observable<Client[]>{
        this.loaderService.show();
        return this.apiKevinWebService.getAllClients().pipe(
            map((response) => {
                return response;
            }),
        );
    }

    getClient(ip: string, mac:string): Observable<Client>{
        this.loaderService.show();
        return this.apiKevinWebService.getSelectedClient(ip, mac).pipe(
            map((response) => {
                return response;
            }),
        );
    }

    createClient(client: Client): Observable<void> {
        this.loaderService.show();
        return this.apiKevinWebService.createClient(client).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    updateClient(client: Client): Observable<void>{
        this.loaderService.show();
        return this.apiKevinWebService.updateClient(client).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    deleteClient(ip: string, mac: string): Observable<void>{
        this.loaderService.show();
        return this.apiKevinWebService.deleteClient(ip,mac).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    getAllRegulatory():Observable<RegulatoryDetail[]>{
        this.loaderService.show();
        return this.apiKevinWebService.getRegulatory().pipe(
            map((response) => {
                return response;
            }),
        );
    }
    getAllClientIp(): Observable<string[]>{
        this.loaderService.show();
        return this.apiKevinWebService.getAllClientsIp().pipe(
            map((response) => {
                return response;
            }),
        );
    }

getSelectedClientIp(ip: string): Observable<Client> {
    this.loaderService.show();
    return this.apiKevinWebService.getSelectedClientIp(ip)
        .pipe(map((response) => {
            return response;
        }));
}

    
}