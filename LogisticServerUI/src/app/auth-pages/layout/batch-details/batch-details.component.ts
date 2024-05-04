import { Component } from '@angular/core';
import { ListBatchDetailComponent } from "./components/list-batch-detail/list-batch-detail.component";
import { BaseComponent } from '../../../shared/components/base/base.component';

@Component({
    selector: 'app-batch-details',
    standalone: true,
    templateUrl: './batch-details.component.html',
    styleUrl: './batch-details.component.scss',
    imports: [ListBatchDetailComponent]
})
export class BatchDetailsComponent extends BaseComponent{

}
