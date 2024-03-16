import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from "../../../../../../shared/components/page/page-header/page-header.component";
import { ListProductFormComponent } from "../components/list-product-form/list-product-form.component";
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ProductListService } from '../product-list.service';
import { ProductList } from '../../../../../../shared/models/entities/server-settings/product-list.model';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'app-add-product-list',
    standalone: true,
    templateUrl: './add-product-list.component.html',
    styleUrl: './add-product-list.component.scss',
    imports: [PageHeaderComponent, ListProductFormComponent]
})
export class AddProductListComponent extends BaseComponent {
    router = inject(Router);
    productListService = inject(ProductListService);
    productList:ProductList
    constructor() {
        super();
        this.productList = new ProductList();
      }
      addProductList(){
        this.productListService
        .createProductList(this.productList)
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: ProductList) => {
          void this.router.navigateByUrl('ProductList');
        });
      }
    
}
