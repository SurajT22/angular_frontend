import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { Prefix } from "../models/entities/server-settings/prefix.model";
import { Sscc } from "../models/entities/server-settings/sscc.model";
import { ProductList } from "../models/entities/server-settings/product-list.model";

@Injectable({
    providedIn: 'root',
})
export class ApiServerSettingService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get

    //#endregion

    //#region Post
    createPrefixDetail(prefix:Prefix):Observable<Prefix>{
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`, prefix);
    }

    createSsccDetail(sscc:Sscc): Observable<Sscc>{
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`, sscc);
    }
    //#endregion
    createProductList(productList:ProductList):Observable<ProductList>{
        return this.api.post(`${this.baseUrl}/webapi_Clientregistration_AddRegistration`, productList);
    }

    //#region Put
    //#endregion

    //#region Delete
    //#endregion
}