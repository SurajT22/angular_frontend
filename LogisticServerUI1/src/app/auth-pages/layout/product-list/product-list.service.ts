import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoaderService } from "../../../core/services/loader.service";
import { AlertService } from "../../../core/services/alert.service";
import { ApiProductService } from "../../../shared/apis/api-product.service";
import { Product } from "../../../shared/models/entities/product/product.model";
import { AddProductDetail } from "../../../shared/models/entities/product/add-product.model";
import { ApiServerSettingService } from "../../../shared/apis/api-server-settings.service";

@Injectable({
    providedIn: 'root',
})
export class ProductListService {
    apiProductService = inject(ApiProductService);
    apiServerSettingService = inject(ApiServerSettingService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getAllProducts(): Observable<Product[]> {
        this.loaderService.show()
        return this.apiProductService.getAllProducts()
            .pipe(map((response) => {
                return response;
            }));
    }

    getAllProductNames(): Observable<string[]> {
        this.loaderService.show()
        return this.apiProductService.getAllProductNames()
            .pipe(map((response) => {
                return response;
            }));
    }

    getProduct(productName: string, gtin: string): Observable<Product> {
        this.loaderService.show();
        return this.apiProductService.getProduct(productName, gtin)
            .pipe(map((response) => {
                return response;
            }));
    }

    getAllGtin(productName: string): Observable<string[]> {
        this.loaderService.show()
        return this.apiProductService.getProductGtin(productName)
            .pipe(map((response) => {
                return response;
            }));
    }

    getCompanyPrefix(): Observable<string[]> {
        this.loaderService.show()
        return this.apiServerSettingService.getAllPrefix()
            .pipe(map((response) => {
                return response.map(x => x.CompanyPrefix);
            }));
    }

    createProduct(product: AddProductDetail):Observable<void>{
        this.loaderService.show();
        return this.apiProductService.createProduct(product)
        .pipe(map((response) => {
            this.alertService.success(response);
        }));
    }

    updateProduct(product: Product):Observable<void>{
        this.loaderService.show();
        return this.apiProductService.updateProduct(product)
        .pipe(map((response) => {
            this.alertService.success(response);
        }));
    }
}