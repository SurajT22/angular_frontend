import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Client } from "../models/entities/client-registration/client.model";
import { Observable } from "rxjs";
import { RegulatoryDetail } from "../models/entities/server-settings/regulatory-detail.model";

@Injectable({
    providedIn: 'root',
})
export class ApiClientService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getAllClients():Observable<Client[]>{
        return this.api.get(`${this.baseUrl}/webapi_Clientregistration_GetRegistrationDetails`);
    }

    getSelectedClient(ip:string, mac: string):Observable<Client>{
        return this.api.get(`${this.baseUrl}/webapi_Clientregistration_GetSelectedRegistrationDetails?Ip=${ip}&MacId=${mac}`);
    }
    //#endregion

    //#region Post
    createClient(client: Client): Observable<string> {
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`, client);
    }

    registerAccess(clientIp:string): Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_RegistrationAccess`, {ClientIP : clientIp});
    }
    //#endregion

    //#region Put
    updateClient(client: Client): Observable<string> {
        return this.api.put(`${this.baseUrl}/webapi_Clientregistration_UpdateRegistration`, client);
    }
    //#endregion

    //#region Delete
    deleteClient(ip:string, mac: string):Observable<string>{
        return this.api.delete(`${this.baseUrl}/webapi_Clientregistration_DeleteRegistration?Ip=${ip}&MacId=${mac}`);
    }
    //#endregion

    //#region Get
    getRegulatory():Observable<RegulatoryDetail[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetRegulatoryList`);
    }
     //#endregion
}