/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpService } from '../../core/services/api-http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCommonService {
  api = inject(ApiHttpService);
  private readonly baseUrl = 'v1/common';


}
