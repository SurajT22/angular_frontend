import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ListProductComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent extends BaseComponent {

}
