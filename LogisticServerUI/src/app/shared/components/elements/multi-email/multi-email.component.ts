import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-email',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multi-email.component.html',
  styleUrl: './multi-email.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class MultiEmailComponent {
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  // uniqueId = 'id' + Math.random().toString(36).substring(5);
  @Input() label = '';
  @Input() value: any[] = [];
  @Input() required = false;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string[]>();
  @Input() inputValue: string = '';
  @Input() invalidEmails: string[] = [];
  @Input() email: any[] = [];
  @Output() emailValue = new EventEmitter<any[]>();

  
 emails: any[] = [];

  addEmail(emailInput: HTMLInputElement) {
    const emailValue = emailInput.value.trim();
    if (emailValue && this.isValidEmail(emailValue) && !this.emails.includes(emailValue)) {
      this.emails.push(emailValue);
      this.updateValue();
      emailInput.value = ''; // Clear input
    }
  }

  removeEmail(index: number) {
    this.emails.splice(index, 1);
  }
  private updateValue() {
    this.value = [...this.emails]; // Update the value property
    this.valueChange.emit(this.value); // Emit the updated value to parent component
  }

  private isValidEmail(email: string): boolean {
    // Email validation regex
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  }

  
  
}
