import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Client } from "../models/entities/client-registration/client.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ApiClientService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    //#endregion

    //#region Post
    createClient(client: Client): Observable<Client> {
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`, client);
    }

    registerAccess(clientIp:string){
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_RegistrationAccess`, {ClientIP : clientIp});
    }
    //#endregion

    //#region Put
    //#endregion

    //#region Delete
    //#endregion
}