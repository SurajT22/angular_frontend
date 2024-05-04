import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../../core/services/loader.service";
import { AlertService } from "../../../../../core/services/alert.service";
import { PrefixDetail } from "../../../../../shared/models/entities/server-settings/prefix.model";
import { Observable, map } from "rxjs";
import { ApiServerSettingService } from "../../../../../shared/apis/api-server-settings.service";

@Injectable({
    providedIn: 'root',
})
export class PrefixDetailsService{
    apiServerSettingService = inject(ApiServerSettingService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getAllPrefix(): Observable<PrefixDetail[]>{
        this.loaderService.show();
        return this.apiServerSettingService.getAllPrefix().pipe(
            map((response) => {
                return response;
            }),
        );
    }
    

    updatePrefix(prefix:PrefixDetail):Observable<void>{
        this.loaderService.show();
        return this.apiServerSettingService.updatePrefix(prefix).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );

    }

    createPrefix(prefix: PrefixDetail): Observable<void> {
        this.loaderService.show();
        return this.apiServerSettingService.createPrefix(prefix).pipe(
            map((response) => {
                this.alertService.success(response);
               
            }),
        );
    }
    deletePrefix(pref:string,cust:string): Observable<void>{
        this.loaderService.show();
        return this.apiServerSettingService.deletePrefix(pref,cust).pipe(
            map((response)=>{
                this.alertService.success(response);
            })
        )
    } 
}