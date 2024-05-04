import { Component, OnDestroy, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  template: ``,
})
export class BaseComponent implements OnDestroy {
  loaderService = inject(LoaderService);
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.loaderService.hide();
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.complete();
  }
}
