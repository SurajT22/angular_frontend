import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ControlContainer, FormsModule,NgForm } from '@angular/forms';
@Component({
  selector: 'app-ip-address',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ip-address.component.html',
  styleUrl: './ip-address.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  
})
export class IpAddressComponent{
  isErrShow = false;
  private _required!: boolean;
  @Input() label: string = '';
  @Input() patternErrMsg!: string;
 
  @Input() ipAddress: string = '';
  @Output() ipAddressChange = new EventEmitter<string>();

  segment1: string = '';
  segment2: string = '';
  segment3: string = '';
  segment4: string = '';

  constructor() { }

  ngOnInit(): void {
    this.splitIpAddress();
  }

  onSegmentChange(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    
    switch (index) {
      case 0:
        this.segment1 = newValue;
        break;
      case 1:
        this.segment2 = newValue;
        break;
      case 2:
        this.segment3 = newValue;
        break;
      case 3:
        this.segment4 = newValue;
        break;
      default:
        break;
    }

    this.updateIpAddress();
  }

  private splitIpAddress(): void {
    const segments = this.ipAddress.split('.');
    if (segments.length === 4) {
      this.segment1 = segments[0];
      this.segment2 = segments[1];
      this.segment3 = segments[2];
      this.segment4 = segments[3];
    }
  }

  private updateIpAddress(): void {
    this.ipAddress = `${this.segment1}.${this.segment2}.${this.segment3}.${this.segment4}`;
    this.ipAddressChange.emit(this.ipAddress);
  }
  @Input() set required(segment1: boolean ) {
    this._required = segment1;
    this.isErrShow = true;
  }
  get required() {
    return this._required;
  }

}