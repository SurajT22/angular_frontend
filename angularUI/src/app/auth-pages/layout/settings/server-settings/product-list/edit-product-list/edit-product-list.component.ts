import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ProductList } from '../../../../../../shared/models/entities/server-settings/product-list.model';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { ListProductFormComponent } from "../components/list-product-form/list-product-form.component";

@Component({
    selector: 'app-edit-product-list',
    standalone: true,
    templateUrl: './edit-product-list.component.html',
    styleUrl: './edit-product-list.component.scss',
    imports: [
        PageHeaderComponent,
        ListProductFormComponent
    ]
})
export class EditProductListComponent extends BaseComponent {
  productList:ProductList;
  constructor() {
    super()
    this.productList = new ProductList();
  }
  editClient(productList: ProductList | null) {
    this.productList = productList as unknown as ProductList;
  }
}
