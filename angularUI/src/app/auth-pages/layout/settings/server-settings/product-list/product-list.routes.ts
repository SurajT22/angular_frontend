import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { EditProductListComponent } from "./edit-product-list/edit-product-list.component";
import { AddProductListComponent } from "./add-product-list/add-product-list.component";

export const PRODUCTLIST_ROUTES:Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'add',
        component:AddProductListComponent
    },
    {
        path: 'edit',
        component:EditProductListComponent
    }
]