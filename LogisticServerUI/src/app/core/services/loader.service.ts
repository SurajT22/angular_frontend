import { Injectable, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  spinner = inject(NgxSpinnerService);
  timerCount: number | undefined;

  // this name should be same as used in app.component.html file
  readonly spinnerName = 'app-spinner';

  show(name?: string) {
    window.clearTimeout(this.timerCount);
    this.timerCount = window.setTimeout(() => {
      void this.spinner.show(name || this.spinnerName).catch(() => {
        this.hide();
      });
    }, 500);
  }

  hide(name?: string) {
    window.clearTimeout(this.timerCount);
    void this.spinner.hide(name || this.spinnerName);
  }
}
