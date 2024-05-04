import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { Help } from "../models/entities/help/help.model";
import { AppConfigService } from "../../core/services/app-config.service";

@Injectable({
    providedIn: 'root',
})
export class ApiHelpService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    private _apiBaseURL = AppConfigService?.appSettings?.apiBaseUrl;
    get apiBaseURL() {
        return this._apiBaseURL;
    }

    //#region Get
    getHelpData():Observable<Help>{
        return this.api.get(`${this.baseUrl}/webapi_Help_GetUserManualPath`);
    }

    //#endregion

    //#region Post

    //#endregion

    //#region Put

    //#endregion

    //#region Delete

    //#endregion
}