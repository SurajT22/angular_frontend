/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, inject } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { HttpClient } from '@angular/common/http';
import { AlertService } from './alert.service';
import { LoaderService } from './loader.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  httpClient = inject(HttpClient);
  alertService = inject(AlertService);
  loaderService = inject(LoaderService);

  private _apiBaseUrl = '';
  private get apiBaseUrl() {
    return this._apiBaseUrl || this.setApiBaseUrl();
  }
  private setApiBaseUrl(): string {
    this._apiBaseUrl = AppConfigService?.appSettings?.apiBaseUrl;
    return this._apiBaseUrl;
  }

  public get(url: string, options?: any): Observable<any> {
    return this.httpClient
      .get(this.apiBaseUrl + url, options)
      .pipe(map((response) => this.getResponse(response)));
  }

  public post(url: string, data: any, options?: any): Observable<any> {
    return this.httpClient
      .post(this.apiBaseUrl + url, data, options)
      .pipe(map((response) => this.getResponse(response)));
  }

  public put(url: string, data: any, options?: any) {
    return this.httpClient
      .put(this.apiBaseUrl + url, data, options)
      .pipe(map((response) => this.getResponse(response)));
  }

  public patch(url: string, data: any, options?: any) {
    return this.httpClient
      .patch(this.apiBaseUrl + url, data, options)
      .pipe(map((response) => this.getResponse(response)));
  }

  public delete(url: string, options?: any): Observable<any> {
    return this.httpClient
      .delete(this.apiBaseUrl + url, options)
      .pipe(map((response) => this.getResponse(response)));
  }

  private getResponse(response: any): any {
    this.loaderService.hide();
    if (response?.hasOwnProperty('IsSuccess')) {
      if (response.IsSuccess) {
        //this.readMoreTextService.render();
        return response.Data == null ? response.StatusMessage : response.Data;
      }
      this.alertService.error(response.StatusMessage);
      throw Error(response.StatusMessage);
    }
    return response;
  }
}
