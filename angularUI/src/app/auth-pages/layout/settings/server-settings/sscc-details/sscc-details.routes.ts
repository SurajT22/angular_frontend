import { Routes } from "@angular/router";
import { SsccDetailsComponent } from "./sscc-details.component";
import { AddSsccDetailsComponent } from "./add-sscc-details/add-sscc-details.component";
import { EditSsccDetailsComponent } from "./edit-sscc-details/edit-sscc-details.component";

export const SSCCDETAILS_ROUTES: Routes = [
    {
        path: '',
        component:SsccDetailsComponent
    },
    {
        path: 'add',
        component:AddSsccDetailsComponent
    },
    {
        path: 'edit/:ID',
        component:EditSsccDetailsComponent
    },
]