import { Injectable, inject } from "@angular/core";
import { ApiServerSettingService } from "../../../../../shared/apis/api-server-settings.service";
import { LoaderService } from "../../../../../core/services/loader.service";
import { AlertService } from "../../../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { ProductList } from "../../../../../shared/models/entities/server-settings/product-list.model";

@Injectable({
    providedIn: 'root',
})
export class ProductListService {
    apiServerSettingService = inject(ApiServerSettingService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    createProductList(productList: ProductList): Observable<ProductList> {
        this.loaderService.show();
        return this.apiServerSettingService.createProductList(productList).pipe(
            map((response) => {
                this.alertService.success('Sscc successfully created');
                return response;
            }),
        );
    }
}