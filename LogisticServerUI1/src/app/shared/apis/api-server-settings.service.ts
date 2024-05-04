import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { PrefixDetail } from "../models/entities/server-settings/prefix.model";
import { Sscc } from "../models/entities/server-settings/sscc.model";
import { AddSsccReq } from "../models/entities/server-settings/add-sscc-req.model";
import { EditSsccReq } from "../models/entities/server-settings/edit-sscc-req.model";
import { AvailableUidLength } from "../models/entities/server-settings/available-uid-length.model";
import { UidDetails } from "../models/entities/server-settings/uid-details.model";
import { GenerateUidReq } from "../models/entities/server-settings/generate-uid-req.model";
import { RegulatoryDetail } from "../models/entities/server-settings/regulatory-detail.model";

@Injectable({
    providedIn: 'root',
})
export class ApiServerSettingService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getAvailableUidLength():Observable<AvailableUidLength>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetAvailableUidLength`);
    }

    getUidDetails(uidDigits: string, uidType: string):Observable<UidDetails>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetUIDDetails?UidDigit=${uidDigits}&UidType=${uidType}`);
    }

    getAllSscc():Observable<Sscc[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetSSCCRangeDetails`);
    }

    getSelectedSscc(ID:string):Observable<Sscc>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetSelectedSSCCRangeDetails?ID=${ID}`);
    }

    getAllPrefix():Observable<PrefixDetail[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetPrefixDetails`);
    }
    //#endregion

    //#region Post
    createPrefix(prefix:PrefixDetail): Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_ServerSettings_AddPrefix`, prefix);
    }

    createSscc(sscc: AddSsccReq): Observable<string> {
        return this.api.post(`${this.baseUrl}/webapi_ServerSettings_AddSSCCRange`, sscc);
    }

    generateUID(generateReq: GenerateUidReq):Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_ServerSettings_GenerateUIDs`, generateReq);
    }
    //#endregion

    //#region Put
    updateSscc(sscc:EditSsccReq):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_ServerSettings_UpdateSSCCStatus`, sscc);
    }

    updatePrefix(prefix:PrefixDetail):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_ServerSettings_UpdatePrefix`, prefix);
    }
    //#endregion

    //#region Delete
    deletePrefix(pref:string,cust:string):Observable<string>{
        return this.api.delete(`${this.baseUrl}/webapi_ServerSettings_DeletePrefix?CompanyPrefix=${pref}&CustomerName=${cust}`);
    }
    //#endregion

    //#region Get
    getRegulatory():Observable<RegulatoryDetail[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetRegulatoryList`);
    }
    //#endregion
}