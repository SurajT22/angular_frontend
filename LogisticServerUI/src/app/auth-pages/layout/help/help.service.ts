import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../core/services/alert.service";
import { LoaderService } from "../../../core/services/loader.service";
import { Observable, map } from "rxjs";
import { ApiHelpService } from "../../../shared/apis/api-help.service";

@Injectable({
    providedIn: 'root',
})
export class HelpService{
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiHelpService = inject(ApiHelpService);

    getUserManualPath():Observable<string>{
        this.loaderService.show();
        return this.apiHelpService.getHelpData()
        .pipe(map((response)=>{
            return `${this.apiHelpService.apiBaseURL}${response.Path}`;
        }));
    }
}