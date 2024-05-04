import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AppConfigService } from './core/services/app-config.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { httpInterceptor } from './core/Interceptors/http.interceptor';

export function initializeApp(appConfigService: AppConfigService) {
  return async () => {
    await appConfigService.load();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor])),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: initializeApp,
    },
    provideAnimations(),
    provideRouter(routes),
    provideToastr(),
  ],
};
