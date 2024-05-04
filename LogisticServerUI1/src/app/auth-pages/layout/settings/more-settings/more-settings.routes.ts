import { Routes } from "@angular/router";
import { MasterSettingsComponent } from "./master-settings/master-settings.component";
import { EmailConfigurationComponent } from "./email-configuration/email-configuration.component";
import { ComposeEmailComponent } from "./compose-email/compose-email.component";

export const MORESETTINGS_ROUTES: Routes = [
    {
        path:'mastersettings',
        component:MasterSettingsComponent
    },
    {
        path:'emailconfiguration',
        component:EmailConfigurationComponent
    },
    {
        path:'composeemail',
        component:ComposeEmailComponent
    }
]