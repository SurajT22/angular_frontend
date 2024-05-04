import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { BatchDetails } from "../models/entities/batch-detail/batch-detail.model";
import { InwardPageData } from "../models/entities/batch-detail/inward-page-data.model";
import { InwardFileListReq } from "../models/entities/batch-detail/inward-file-list-req.model";
import { InwardDownloadFileReq } from "../models/entities/batch-detail/inward-download-file-req.model";
import { InwardDownloadFileRes } from "../models/entities/batch-detail/inward-download-file-res.model";
import { InwardVerifyFileReq } from "../models/entities/batch-detail/inward-verify-file-req.model";
import { InwardVerifyFileRes } from "../models/entities/batch-detail/inward-verify-file-res.model";
import { ScanDataReq } from "../models/entities/batch-detail/scan-data-req.model";
import { ScanDataRes } from "../models/entities/batch-detail/scan-data-res.model";
import { Product } from "../models/entities/product/product.model";
import { InwardBatchReq } from "../models/entities/batch-detail/inward-batch-req.model";
import { EditBatchDetail } from "../models/entities/batch-detail/edit-batch-detail.model";
import { EditBatchReq } from "../models/entities/batch-detail/edit-batch-req.model";
import { AddPageData } from "../models/entities/batch-detail/add-page-data.model";
import { AddPageDataReq } from "../models/entities/batch-detail/add-page-data-req.model";
import { AddBatchReq } from "../models/entities/batch-detail/add-batch-req.model";
import { RegulatoryDetail } from "../models/entities/server-settings/regulatory-detail.model";

@Injectable({
    providedIn: 'root',
})
export class ApiBatchDetailService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    //#region Get
    getBatchByFilter(batchName: string, packagingType: string):Observable<BatchDetails[]>{
        return this.api.get(`${this.baseUrl}/webapi_Batchdetails_BatchDetails?PackagingType=${packagingType}&BatchName=${batchName}`);
    }
    
    getSelectedBatchDetails(batchName: string, gtin: string, packagingLevel: string): Observable<EditBatchDetail>{  
        return this.api.get(`${this.baseUrl}/webapi_Batchdetails_SelectedBatchDetails?BatchName=${batchName}&GTIN=${gtin}&PackagingLevel=${packagingLevel}`);
    }

    getInwardPageData(serverType: string):Observable<InwardPageData>{
        return this.api.get(`${this.baseUrl}/webapi_Batchdetails_GetInwardPageDetails?ServerType=${serverType}`);
    }
    
    getInwardPoList():Observable<string[]>{
        return this.api.get(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_GetPOList`);
    }

    getProductDetail(productName: string, station: string):Observable<Product>{
        return this.api.get(`${this.baseUrl}/webapi_Batchdetails_GetProductDetails?ProductName=${productName}&Station=${station}`);
    }
    //#endregion

    //#region Post

    getAddPageData(reqData: AddPageDataReq):Observable<AddPageData>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_AddBatch_Details`, reqData);
    }
    
    addBatch(reqData: AddBatchReq):Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_AddBatch_Add`, reqData);
    }

    getScannedData(reqData: ScanDataReq):Observable<ScanDataRes>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_GetScannedData`, reqData);
    }

    fetchInwardFileList(reqData: InwardFileListReq):Observable<string[]>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_FetchFileList`, reqData);
    }

    downloadInwardFile(reqData: InwardDownloadFileReq):Observable<InwardDownloadFileRes[]>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_DownloadFile`, reqData);
    }

    verifyInwardFile(reqData: InwardVerifyFileReq):Observable<InwardVerifyFileRes>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_ValidateBatchData`, reqData);
    }
    
    inwardBatch(reqData: InwardBatchReq):Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_Import`, reqData);
    }

    //#region Put
    updateBatch(reqData: EditBatchReq):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_Batchdetails_UpdateBatch`, reqData);
    }
    //#endregion

    //#region Get
    getRegulatory():Observable<RegulatoryDetail[]>{
        return this.api.get(`${this.baseUrl}/webapi_ServerSettings_GetRegulatoryList`);
    }
     //#endregion


    //#region Delete
    //#endregion
}