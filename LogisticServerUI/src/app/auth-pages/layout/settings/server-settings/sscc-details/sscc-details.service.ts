import { Injectable, inject } from "@angular/core";
import { Sscc } from "../../../../../shared/models/entities/server-settings/sscc.model";
import { LoaderService } from "../../../../../core/services/loader.service";
import { Observable, map } from "rxjs";
import { AlertService } from "../../../../../core/services/alert.service";
import { AddSsccReq } from "../../../../../shared/models/entities/server-settings/add-sscc-req.model";
import { EditSsccReq } from "../../../../../shared/models/entities/server-settings/edit-sscc-req.model";
import { ApiServerSettingService } from "../../../../../shared/apis/api-server-settings.service";
import { RegulatoryDetail } from "../../../../../shared/models/entities/server-settings/regulatory-detail.model";

@Injectable({
    providedIn: 'root',
})
export class SsccDetailsService {
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiServerSettingService = inject(ApiServerSettingService);
    

    getAllSscc():Observable<Sscc[]>{
        this.loaderService.show();
        return this.apiServerSettingService.getAllSscc().pipe(
            map((response) => {
                return response;
            }),
        );
    }

    getSscc(ID:string):Observable<Sscc>{
        this.loaderService.show();
        return this.apiServerSettingService.getSelectedSscc(ID).pipe(
            map((response)=>{
                return response;
            })
        )
    }

    createSscc(sscc:AddSsccReq): Observable<void> {
        this.loaderService.show();
        return this.apiServerSettingService.createSscc(sscc).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    getCompanyPrefix(): Observable<string[]> {
        this.loaderService.show()
        return this.apiServerSettingService.getAllPrefix()
            .pipe(map((response) => {
                return response.map(x => x.CompanyPrefix);
            }));
    }

    updateSscc(sscc:EditSsccReq):Observable<void>{
        this.loaderService.show();
        return this.apiServerSettingService.updateSscc(sscc).pipe(
            map((response)=>{
                this.alertService.success(response);
            }),
        );
    }

    getAllRegulatory():Observable<RegulatoryDetail[]>{
        this.loaderService.show();
        return this.apiServerSettingService.getRegulatory().pipe(
            map((response) => {
                return response;
            }),
        );
    }
}