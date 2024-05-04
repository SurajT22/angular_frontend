/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Pipe, PipeTransform, inject } from '@angular/core';
import { NameFirstCharsPipe } from './name-first-chars.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { User } from '../models/entities/user/user.model';
import { AppConfigService } from '../../core/services/app-config.service';

@Pipe({
  name: 'profileOrName',
  standalone: true,
})
export class ProfileOrNamePipe implements PipeTransform {
  nameFirstCharsPipe = inject(NameFirstCharsPipe);
  sanitized = inject(DomSanitizer);
  private _apiBaseUrl = '';

  private get apiBaseUrl() {
    return this._apiBaseUrl || this.setApiBaseUrl();
  }
  private setApiBaseUrl(): string {
    this._apiBaseUrl = AppConfigService?.appSettings?.apiBaseUrl;
    return this._apiBaseUrl;
  }

  transform(value: User | any): SafeHtml {
    const fullUrl = this.apiBaseUrl + value.userImage?.replace('\\', '');
    if (!value) return '';
    const str: string = value.userImage
      ? `<img
      class="avatar-image"
      src="${fullUrl}"
    />`
      : `<div class="avatar-text">
      ${this.nameFirstCharsPipe.transform(value)}
    </div>`;

    return this.sanitized.bypassSecurityTrustHtml(str);
  }
}
