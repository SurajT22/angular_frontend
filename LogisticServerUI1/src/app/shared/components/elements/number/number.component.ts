/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [FormsModule, TooltipModule],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class NumberComponent {
  @Input() label = '';
  @Input() value: string | unknown = '';
  @Input() required = false;
  @Input() info: string | null = null; 
  @Input() min: string | number | null = 0;
  @Input() max: string | number | null = null;
  @Output() valueChange = new EventEmitter();
  uniqueId = 'id' + Math.random().toString(36).substring(5);
}
