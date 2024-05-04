import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { EditProductListComponent } from "./edit-product/edit-product.component";
import { AddProductListComponent } from "./add-product/add-product.component";

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
        path: 'edit/:prod/:gtin',
        component:EditProductListComponent
    }
]