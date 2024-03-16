/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-ng-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './ng-select.component.html',
  styleUrl: './ng-select.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class NgSelectComponent {
  uniqueId = 'id' + Math.random().toString(36).substring(5);
  @Input() value: any;
  @Input() multiple: boolean = false;
  @Input() required: boolean = false;
  @Input() clearable: boolean = false;
  @Input() disabled: boolean = false;
  @Input() items: any[] = [];
  @Input() bindLabel!: string;
  @Input() bindValue!: string;
  @Input() placeholder!: string;
  @Output() selectonChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter();

  onSelectOnChange() {
    this.selectonChange.emit(this.value);
  }
}
