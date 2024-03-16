import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { ListTestDetailsComponent } from './components/list-test-details/list-test-details.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ListTestDetailsComponent,
  ]
})
export class TestComponent extends BaseComponent{

}
