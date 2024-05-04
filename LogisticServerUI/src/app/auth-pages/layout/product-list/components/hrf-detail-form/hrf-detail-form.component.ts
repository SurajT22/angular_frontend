import { Component, Input } from '@angular/core';
import { TextComponent } from '../../../../../shared/components/elements/text/text.component';
import { NgSelectComponent } from '../../../../../shared/components/elements/ng-select/ng-select.component';
import { BaseComponent } from '../../../../../shared/components/base/base.component';
import { HrfDetails } from '../../../../../shared/models/view/product-list/hrf-details.model';
import { HRF_IDENTIFIERS } from '../../../../../shared/models/common/const/hrf-identifiers.const';


@Component({
    selector: 'app-hrf-detail-form',
    standalone: true,
    templateUrl: './hrf-detail-form.component.html',
    styleUrl: './hrf-detail-form.component.scss',
    imports: [
        NgSelectComponent, 
        TextComponent
    ]
})
export class HrfDetailFormComponent extends BaseComponent {
    
    @Input() hrfDetail !: HrfDetails;
    @Input() readonly : boolean = false;
    
    hrfDetailslist = HRF_IDENTIFIERS;
    constructor() {
        super();
    }

}
