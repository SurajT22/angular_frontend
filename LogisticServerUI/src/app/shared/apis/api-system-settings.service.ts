import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { SystemSetting } from "../models/entities/system-setting/system-setting.model";
import { AutoBackupSetting } from "../models/entities/system-setting/auto-backup-settings";
import { MasterSettings } from "../models/entities/system-setting/master-settings.model";
import { EmailConfiguration } from "../models/entities/system-setting/email-configuration.model";
import { ComposeEmail } from "../models/entities/system-setting/compose-email.model";

@Injectable({
    providedIn: 'root',
})
export class ApiSystemSettingsService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getSystemSettings():Observable<SystemSetting>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetSystemSettings`);
    }

    backupDatabase():Observable<string>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_BackupDatabase`);
    }

    restoreDatabase():Observable<string>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_RestoreDatabase`);
    }

    backupConfiguration():Observable<string>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_BackupConfiguration`);
    }

    restoreConfiguration():Observable<string>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_RestoreConfiguration`);
    }

    getAutoBackupSettings():Observable<AutoBackupSetting>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetAutoBackupSettings`);
    }
    //#endregion

    //#region Post
    //#endregion

    //#region Put
    updateSystemSettings(reqData: SystemSetting):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateSystemSettings`, reqData);
    }

    updateAutoBackupSettings(reqData:AutoBackupSetting):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateAutoBackupSettings`, reqData);
    }
    //#endregion

    //#region Get
    getMasterSettings():Observable<MasterSettings>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetMasterSettings`);
    }

    updateMasterSettings(mastersettings:MasterSettings):Observable<string> {
        return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateMasterSettings`,mastersettings);
    }
    //#endregion

    //#region Get
    getEmailConfiguration():Observable<EmailConfiguration>{
        return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetEmailConfiguration`);
    }

    updateEmailConfiguration(emailconfiguration:EmailConfiguration):Observable<string> {
        return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateEmailConfiguration`,emailconfiguration);
    }
    //#endregion

    //#region Post
    createComposeEmail(composeEmail: ComposeEmail): Observable<string> {
        return this.api.post(`${this.baseUrl}/webapi_SystemSettings_ComposeEmail`, composeEmail);
    }
    //#endregion

    //#region Delete
    //#endregion
}