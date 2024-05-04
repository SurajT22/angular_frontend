import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { Observable, map } from "rxjs";
import { ApiUserService } from "../../../../shared/apis/api-user.service";
import { User } from "../../../../shared/models/entities/user/user.model";
import { ResetPasswordReq } from "../../../../shared/models/entities/user/reset-password-req.model";
import { VerifyOtpReq } from "../../../../shared/models/entities/user/verify-otp-req.model";

@Injectable({
    providedIn: 'root',
})
export class UserAccountService {
    apiUserService = inject(ApiUserService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getAllUsers(): Observable<User[]> {
        this.loaderService.show();
        return this.apiUserService.getAllUsers().pipe(
            map((response) => {
                return response;
            }),
        );
    }

    getUser(userName: string): Observable<User> {
        this.loaderService.show();
        return this.apiUserService.getUserDetail(userName).pipe(
            map((response) => {
                return response
            })
        );
    }

    createUser(user: User): Observable<void> {
        this.loaderService.show();
        return this.apiUserService.createUser(user).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    updateUser(user: User): Observable<void> {
        this.loaderService.show();
        return this.apiUserService.updateUser(user).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    resetPassword(resetReq: ResetPasswordReq, token = ''){
        this.loaderService.show();
        return this.apiUserService.resetPassword(resetReq, token)
        .pipe(
            map((response)=>{
                this.alertService.success(response);
            })
        );
    }

    generateOTP(userName:string, token = ''): Observable<void>{
        this.loaderService.show();
        return this.apiUserService.generateOtp(userName, token)
        .pipe(
            map((response)=>{
                this.alertService.success(response);
            })
        );
    }

    verifyOTP(verifyOtpReq: VerifyOtpReq, token = ''){
        this.loaderService.show();
        return this.apiUserService.verifyOtp(verifyOtpReq, token)
        .pipe(
            map((response)=>{
                this.alertService.success(response);
            })
        );
    }
}