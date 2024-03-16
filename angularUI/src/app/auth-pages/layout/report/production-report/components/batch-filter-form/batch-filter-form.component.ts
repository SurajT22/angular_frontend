import { Component, OnInit, inject } from '@angular/core';
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-batch-filter-form',
    standalone: true,
    templateUrl: './batch-filter-form.component.html',
    styleUrl: './batch-filter-form.component.scss',
    imports: [TextComponent, NgSelectComponent]
})
export class BatchFilterFormComponent extends BaseComponent implements OnInit {
    activatedRoute = inject(ActivatedRoute);
    lineList = [
        'All',
        'L1'
    ]
    batchList = [
        '123455t45',
        'ABC1'
    ]
    GtinList = [
        "08904231102545",
        '28904231102549',
        '48904231102543',
        '08904231102545',
        '28904231102549'
    ]
    statusList = [
        'All',
        'L1'
    ]
    constructor() {
        super()
    }
    ngOnInit(): void {

    }

}
