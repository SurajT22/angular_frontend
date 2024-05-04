import { Routes } from "@angular/router";
import { ServerSettingsComponent } from "./server-settings.component";

export const SERVERSETTINGS_ROUTES: Routes = [
    {
        path: '',
        component: ServerSettingsComponent
    },
    {
        path: 'prefixdetails',
        loadChildren: () => import('./prefix-details/prefix-details.routes').then((c) => c.PREFIXDETAILS_ROUTES),

    },
    {
        path: 'ssccdetails',
        loadChildren: () => import('./sscc-details/sscc-details.routes').then((c) => c.SSCCDETAILS_ROUTES),
    }
]