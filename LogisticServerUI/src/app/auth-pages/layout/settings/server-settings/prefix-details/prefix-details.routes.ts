import { Routes } from "@angular/router";
import { PrefixDetailsComponent } from "./prefix-details.component";
import { AddPrefixDetailsComponent } from "./add-prefix-details/add-prefix-details.component";
import { EditPrefixDetailsComponent } from "./edit-prefix-details/edit-prefix-details.component";




export const PREFIXDETAILS_ROUTES: Routes = [
    {
        path: '',
        component: PrefixDetailsComponent
    },
    {
        path: 'add',
        component: AddPrefixDetailsComponent
    },
    {
        path: 'edit/:pref/:cust',
        component: EditPrefixDetailsComponent,
    }
]