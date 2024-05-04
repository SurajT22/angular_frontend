import { Injectable, inject } from "@angular/core";
import { ApiHttpService } from "../../core/services/api-http.service";
import { Observable } from "rxjs";
import { SecurityPolicy } from "../models/entities/security-policy/security-policy.model";
import { User } from "../models/entities/user/user.model";
import { UserClientRightsReq } from "../models/entities/user/user-client-permission.model";
import { UserServerRightsReq } from "../models/entities/user/user-server-permission.model";
import { ResetPasswordReq } from "../models/entities/user/reset-password-req.model";
import { VerifyOtpReq } from "../models/entities/user/verify-otp-req.model";
import { HttpHeaders } from "@angular/common/http";
import { AppConfigService } from "../../core/services/app-config.service";

@Injectable({
    providedIn: 'root',
})
export class ApiUserService{
    api = inject(ApiHttpService);
    private readonly baseUrl = 'KevinWebService';

    

    //#region Get

    getAllUsers():Observable<User[]>{
        return this.api.get(`${this.baseUrl}/webapi_UserManagement_GetAllUsersDetails`);
    }

    getUserDetail(userName: string):Observable<User>{
        return this.api.get(`${this.baseUrl}/webapi_UserManagement_GetUserDetails?UserName=${userName}`);
    }
    
    getUserClientRights(userName: string):Observable<UserClientRightsReq>{
        return this.api.get(`${this.baseUrl}/webapi_Usermanagment_GetClientUserRights?SelectedUser=${userName}`);
    }

    getUserServerRights(userName: string):Observable<UserServerRightsReq>{
        return this.api.get(`${this.baseUrl}/webapi_Usermanagment_GetServerUserRights?SelectedUser=${userName}`);
    }

    getSecurityPolicy():Observable<SecurityPolicy>{
        return this.api.get(`${this.baseUrl}/webapi_Usermanagement_GetSecurityPolicy`);
    }
    //#endregion

    //#region Post
    createUser(user: User):Observable<string>{
        return this.api.post(`${this.baseUrl}/webapi_UserManagement_AddUser`, user);
    }

    generateOtp(userName: string, token = ''):Observable<string>{
        const username = AppConfigService?.appSettings?.basicAuthUsername;
        const password = AppConfigService?.appSettings?.basicAuthPass;
        var reqData = {
            UserName: userName
        }
        return this.api.post(
            `${this.baseUrl}/webapi_Usermanagement_OTP_Generation_Update`,
            reqData,
            { headers: new HttpHeaders({Authorization: 'Basic  ' + btoa(username + ':' + password) }) } 
            );
    }
    //#endregion

    //#region Put
    updateUser(user: User):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_UserManagement_EditUser`, user);
    }

    resetPassword(resetPassReq: ResetPasswordReq, token = ''):Observable<string>{
        return this.api.put(
            `${this.baseUrl}/webapi_Usermanagement_ResetPassword_Update`,
            resetPassReq,
            token ? { headers: new HttpHeaders({ Authorization: 'Bearer ' + token }) } : {}
            );
    }
    
    verifyOtp(verifyOtpReq: VerifyOtpReq, token = ''):Observable<string>{
        const username = AppConfigService?.appSettings?.basicAuthUsername;
        const password = AppConfigService?.appSettings?.basicAuthPass;
        return this.api.put(
            `${this.baseUrl}/webapi_Usermanagement_ForgotPassword_Update`,
            verifyOtpReq,
            { headers: new HttpHeaders({Authorization: 'Basic  ' + btoa(username + ':' + password) }) } 
            );
    }
    
    updateUserClientRights(userRightsReq: UserClientRightsReq):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_Usermanagment_UpdateClientUserRights`, userRightsReq);
    }

    updateUserServerRights(userRightsReq: UserServerRightsReq):Observable<string>{
        return this.api.put(`${this.baseUrl}/webapi_Usermanagment_UpdateServerUserRights`, userRightsReq);
    }

    updateSecurityPolicy(securitypolicy:SecurityPolicy):Observable<string> {
        return this.api.put(`${this.baseUrl}/webapi_Usermanagement_UpdateSecurityPolicy`,securitypolicy);
    }
    //#endregion

    //#region Delete
    //#endregion
}