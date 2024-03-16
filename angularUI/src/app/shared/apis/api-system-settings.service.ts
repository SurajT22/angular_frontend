import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";

@Injectable({
    providedIn: 'root',
})
export class ApiSystemSettingsService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    //#endregion

    //#region Post
    //#endregion

    //#region Put
    //#endregion

    //#region Delete
    //#endregion
}