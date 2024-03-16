import { Injectable, inject } from '@angular/core';
import { AppSettings } from '../models/app-settings.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  public static appSettings: AppSettings;
  httpClient = inject(HttpClient);

  load(): Promise<unknown> {
    const jsonFile = '../assets/appsettings.json';
    return new Promise((resolve, reject) => {
      this.httpClient
        .get(jsonFile)
        .pipe(map((response) => <AppSettings>response))
        .subscribe({
          next: (data: AppSettings) => {
            AppConfigService.appSettings = data;
            resolve(data);
          },
          error: (err) => reject(err),
        });
    });
  }
}
