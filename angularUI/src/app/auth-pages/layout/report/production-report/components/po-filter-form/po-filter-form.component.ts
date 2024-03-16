import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-po-filter-form',
    standalone: true,
    templateUrl: './po-filter-form.component.html',
    styleUrl: './po-filter-form.component.scss',
    imports: [NgSelectComponent]
})
export class PoFilterFormComponent  extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
poDeliverList= [
  'Get PO List'
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
