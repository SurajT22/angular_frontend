import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { ApiUserService } from "../../../../shared/apis/api-user.service";
import { Observable, map, pipe } from "rxjs";
import { UserClientPermission, UserClientRightsReq } from "../../../../shared/models/entities/user/user-client-permission.model";
import { User } from "../../../../shared/models/entities/user/user.model";

@Injectable({
    providedIn: 'root',
})
export class UserClientRightsService {
    apiUserService = inject(ApiUserService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getClientRights(userName: string):Observable<UserClientPermission>{
        this.loaderService.show();
        return this.apiUserService.getUserClientRights(userName)
        .pipe(map((response) => { 
            return response.UserRights
        }));
    }

    updateClientRights(userName: string, rights: UserClientPermission):Observable<void>{
        this.loaderService.show();
        return this.apiUserService.updateUserClientRights({UserRights:rights, UserName: userName})
        .pipe(map((response)=>{
            this.alertService.success(response);
        }))
    }
}