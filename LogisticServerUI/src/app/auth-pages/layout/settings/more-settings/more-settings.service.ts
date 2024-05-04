import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { ApiSystemSettingsService } from "../../../../shared/apis/api-system-settings.service";
import { MasterSettings } from "../../../../shared/models/entities/system-setting/master-settings.model";
import { EmailConfiguration } from "../../../../shared/models/entities/system-setting/email-configuration.model";
import { ComposeEmail } from "../../../../shared/models/entities/system-setting/compose-email.model";

@Injectable({
    providedIn: 'root',
})
export class MoreSettingService {

    apiSystemSettingsService = inject(ApiSystemSettingsService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    updateMasterSettings(mastersettings: MasterSettings): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.updateMasterSettings(mastersettings).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    getMasterSettings():Observable<MasterSettings>{
        this.loaderService.show();
        return this.apiSystemSettingsService.getMasterSettings()
        .pipe(map((res) => { return res }));
    }

    updateEmailConfiguration(emailconfiguration:EmailConfiguration): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.updateEmailConfiguration(emailconfiguration).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    getEmailConfiguration():Observable<EmailConfiguration>{
        this.loaderService.show();
        return this.apiSystemSettingsService.getEmailConfiguration()
        .pipe(map((res) => { return res }));
    }

  

    createComposeEmail(composeEmail:ComposeEmail):Observable<void>{
        this.loaderService.show();
        return this.apiSystemSettingsService.createComposeEmail(composeEmail)
        .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }
}