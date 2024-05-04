import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { Product } from "../models/entities/product/product.model";
import { AddProductDetail } from "../models/entities/product/add-product.model";

@Injectable({
    providedIn: 'root',
})
export class ApiProductService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getAllProducts():Observable<Product[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetAllProductsDetails`);
    }

    getAllProductNames():Observable<string[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetProductList`);
    }
    
    getProduct(productName: string, gtin: string): Observable<Product>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetProductDetails?ProductName=${productName}&GTIN=${gtin}`);
    }

    getProductGtin(productName: string): Observable<string[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetGTINList?ProductName=${productName}`);
    }
    //#endregion

    //#region Post
    createProduct(productData: AddProductDetail):Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_ServerSettings_AddProduct`, productData);
    }
    //#endregion

    //#region Put
    updateProduct(productData: Product):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_ServerSettings_UpdateProduct`, productData);
    }
    //#endregion

    //#region Delete
    //#endregion
}