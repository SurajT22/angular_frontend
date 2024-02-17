import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessMessageSourceService {

  constructor() { }
  private successMessageSource = new Subject<string>();
  successMessage$ = this.successMessageSource.asObservable();

  emitSuccessMessage(message: string,duration: number = 5000): void  {
    this.successMessageSource.next(message);
    setTimeout(() => {
      this.clearSuccessMessage();
    }, duration);
  }

  clearSuccessMessage(): void {
    this.successMessageSource.next('');
  }

  
}
