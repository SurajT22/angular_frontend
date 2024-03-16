import { Component, OnInit, inject } from '@angular/core';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-filter-form',
    standalone: true,
    templateUrl: './product-filter-form.component.html',
    styleUrl: './product-filter-form.component.scss',
    imports: [NgSelectComponent, TextComponent]
})
export class ProductFilterFormComponent extends BaseComponent implements OnInit {
    activatedRoute = inject(ActivatedRoute);
    ProductList = [
        'Test Product',
        'RELOX 40MG_5 ML'
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
