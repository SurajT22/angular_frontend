import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  toastr = inject(ToastrService);

  toastrOptions = {
    positionClass: 'toast-bottom-right',
    newestOnTop: false,
  };

  success(message: string, title = '') {
    this.toastr.success(message, title, {
      ...this.toastrOptions,
    });
  }

  error(message: string, title = '') {
    this.toastr.error(message, title, {
      ...this.toastrOptions,
      timeOut: 8000,
    });
  }

  info(message: string, title = '') {
    this.toastr.info(message, title, {
      ...this.toastrOptions,
    });
  }

  warning(message: string, title = '') {
    this.toastr.warning(message, title, {
      ...this.toastrOptions,
    });
  }

  clear() {
    this.toastr.clear();
  }
}
