import { Routes } from "@angular/router";
import { SystemSettingComponent } from "./system-setting.component";
import { BackupRestoreComponent } from "./components/backup-restore/backup-restore.component";



export const SYSSETTINGS_ROUTES: Routes = [
    {
        path:'',
        component:SystemSettingComponent
    },
    {
        path:'backup&restore',
        component: BackupRestoreComponent
    },
    
]