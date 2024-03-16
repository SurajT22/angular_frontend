import { Component, OnInit, inject } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { NgSelectComponent } from "../../../../../../shared/components/elements/ng-select/ng-select.component";
import { TextComponent } from "../../../../../../shared/components/elements/text/text.component";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pcr-filter-form',
    standalone: true,
    templateUrl: './pcr-filter-form.component.html',
    styleUrl: './pcr-filter-form.component.scss',
    imports: [NgSelectComponent, TextComponent]
})
export class PcrFilterFormComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  batchList = [
    '123455t45',
    'ABC1'
]
  constructor() {
    super()

  }
  ngOnInit(): void {

  }
}
