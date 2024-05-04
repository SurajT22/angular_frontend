import { Injectable, inject } from "@angular/core";
import { AlertService } from "../../../../core/services/alert.service";
import { LoaderService } from "../../../../core/services/loader.service";
import { ApiSystemSettingsService } from "../../../../shared/apis/api-system-settings.service";
import { Observable, map } from "rxjs";
import { SystemSetting } from "../../../../shared/models/entities/system-setting/system-setting.model";
import { AutoBackupSetting } from "../../../../shared/models/entities/system-setting/auto-backup-settings";

@Injectable({
    providedIn: 'root',
})
export class SystemSettingService {
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiSystemSettingsService = inject(ApiSystemSettingsService);

    getSystemSetting(): Observable<SystemSetting> {
        this.loaderService.show();
        return this.apiSystemSettingsService.getSystemSettings()
            .pipe(map((response) => {
                return response;
            }));
    }

    updateSystemSetting(reqData: SystemSetting): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.updateSystemSettings(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    getAutoBackupSetting(): Observable<AutoBackupSetting> {
        this.loaderService.show();
        return this.apiSystemSettingsService.getAutoBackupSettings()
            .pipe(map((response) => {
                return response;
            }));
    }

    updateAutoBackupSetting(reqData: AutoBackupSetting): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.updateAutoBackupSettings(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    backupDatabase(): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.backupDatabase()
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    restorDatabase(): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.restoreDatabase()
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    backupConfiguration(): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.backupConfiguration()
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    restoreConfiguration(): Observable<void> {
        this.loaderService.show();
        return this.apiSystemSettingsService.restoreConfiguration()
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }
}