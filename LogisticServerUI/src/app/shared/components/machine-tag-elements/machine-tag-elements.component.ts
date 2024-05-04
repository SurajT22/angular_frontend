import { Component, Input } from '@angular/core';
import { NgSelectComponent } from '../elements/ng-select/ng-select.component';
import { CheckboxComponent } from '../elements/checkbox/checkbox.component';
import { FormFooterComponent } from '../form/form-footer/form-footer.component';
import { MachineTag } from '../../models/entities/machine/machine-tag.model';
import { NumberComponent } from '../elements/number/number.component';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-machine-tag-elements',
  standalone: true,
  templateUrl: './machine-tag-elements.component.html',
  styleUrl: './machine-tag-elements.component.scss',
  imports: [
    NgSelectComponent,
    CheckboxComponent,
    FormFooterComponent,
    NumberComponent,
  ],
})
export class MachineTagElementsComponent extends BaseComponent {
  private _machineTag!: MachineTag;
  get machineTag(): MachineTag {
    return this._machineTag;
  }

  @Input()
  set machineTag(value: MachineTag) {
    this._machineTag = value;
  }

  @Input() tags: string[] = [];
}
