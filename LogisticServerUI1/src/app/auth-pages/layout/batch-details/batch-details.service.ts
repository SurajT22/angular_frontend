import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../core/services/loader.service";
import { AlertService } from "../../../core/services/alert.service";
import { ApiBatchDetailService } from "../../../shared/apis/api-batch-detail.service";
import { Observable, map } from "rxjs";
import { InwardPageData } from "../../../shared/models/entities/batch-detail/inward-page-data.model";
import { InwardFileListReq } from "../../../shared/models/entities/batch-detail/inward-file-list-req.model";
import { Product } from "../../../shared/models/entities/product/product.model";
import { ScanDataReq } from "../../../shared/models/entities/batch-detail/scan-data-req.model";
import { ScanDataRes } from "../../../shared/models/entities/batch-detail/scan-data-res.model";
import { InwardDownloadFileReq } from "../../../shared/models/entities/batch-detail/inward-download-file-req.model";
import { InwardDownloadFileRes } from "../../../shared/models/entities/batch-detail/inward-download-file-res.model";
import { InwardVerifyFileReq } from "../../../shared/models/entities/batch-detail/inward-verify-file-req.model";
import { InwardVerifyFileRes } from "../../../shared/models/entities/batch-detail/inward-verify-file-res.model";
import { InwardBatchReq } from "../../../shared/models/entities/batch-detail/inward-batch-req.model";
import { EditBatchDetail } from "../../../shared/models/entities/batch-detail/edit-batch-detail.model";
import { EditBatchReq } from "../../../shared/models/entities/batch-detail/edit-batch-req.model";
import { AddPageDataReq } from "../../../shared/models/entities/batch-detail/add-page-data-req.model";
import { AddPageData } from "../../../shared/models/entities/batch-detail/add-page-data.model";
import { AddBatchReq } from "../../../shared/models/entities/batch-detail/add-batch-req.model";
import { RegulatoryDetail } from "../../../shared/models/entities/server-settings/regulatory-detail.model";

@Injectable({
    providedIn: 'root',
})
export class BatchDetailsService {
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);
    apiBatchDetailService = inject(ApiBatchDetailService);

    getBatchByFilter(batchName: string, packagingType: string) {
        this.loaderService.show();
        return this.apiBatchDetailService.getBatchByFilter(batchName, packagingType)
            .pipe(map((response) => {
                return response;
            }));
    }

    getSelectedBatchDetail(batchName: string, gtin: string, packagingLevel: string): Observable<EditBatchDetail> {
        this.loaderService.show();
        return this.apiBatchDetailService.getSelectedBatchDetails(batchName, gtin, packagingLevel)
            .pipe(map((response) => {
                return response;
            }));
    }

    getInwardPageData(serverType: string): Observable<InwardPageData> {
        this.loaderService.show();
        return this.apiBatchDetailService.getInwardPageData(serverType)
            .pipe(map((response) => {
                return response;
            }));
    }

    getProductDetail(productName: string, station: string): Observable<Product> {
        this.loaderService.show();
        return this.apiBatchDetailService.getProductDetail(productName, station)
            .pipe(map((response) => {
                return response;
            }));
    }

    getAddPageData(reqData: AddPageDataReq): Observable<AddPageData> {
        this.loaderService.show();
        return this.apiBatchDetailService.getAddPageData(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    addBatch(reqData: AddBatchReq): Observable<void> {
        this.loaderService.show();
        return this.apiBatchDetailService.addBatch(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    getScannedData(reqData: ScanDataReq): Observable<ScanDataRes> {
        this.loaderService.show();
        return this.apiBatchDetailService.getScannedData(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    fetchInwardFileList(reqData: InwardFileListReq): Observable<string[]> {
        this.loaderService.show();
        return this.apiBatchDetailService.fetchInwardFileList(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    downloadInwardFile(reqData: InwardDownloadFileReq): Observable<InwardDownloadFileRes[]> {
        this.loaderService.show();
        return this.apiBatchDetailService.downloadInwardFile(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    verifyInwardFile(reqData: InwardVerifyFileReq): Observable<InwardVerifyFileRes> {
        this.loaderService.show();
        return this.apiBatchDetailService.verifyInwardFile(reqData)
            .pipe(map((response) => {
                return response;
            }));
    }

    inwardBatch(reqData: InwardBatchReq): Observable<void> {
        this.loaderService.show();
        return this.apiBatchDetailService.inwardBatch(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    updateBatch(reqData: EditBatchReq): Observable<void> {
        this.loaderService.show();
        return this.apiBatchDetailService.updateBatch(reqData)
            .pipe(map((response) => {
                this.alertService.success(response);
            }));
    }

    getAllRegulatory():Observable<RegulatoryDetail[]>{
        this.loaderService.show();
        return this.apiBatchDetailService.getRegulatory().pipe(
            map((response) => {
                return response;
            }),
        );
    }
}