import { Routes } from "@angular/router";
import { BatchDetailsComponent } from "./batch-details.component";
import { BatchInwardComponent } from "./batch-inward/batch-inward.component";
import { AddBatchComponent } from "./add-batch/add-batch.component";
import { EditBatchComponent } from "./edit-batch/edit-batch.component";

export const BATCHDETAIL_ROUTES : Routes = [
    {
        path: '',
        component : BatchDetailsComponent
    },
    {
        path:'inward',
        component: BatchInwardComponent
    },
    {
        path : 'addbatch',
        component:AddBatchComponent
    },
    {
        path : 'edit/:batch/:gtin/:level',
        component:EditBatchComponent
    }
]