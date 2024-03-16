import { Injectable, inject } from "@angular/core";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { UserServerPermission } from "../../../../shared/models/entities/user/user-server-permission.model";
import { Observable, map } from "rxjs";
import { ApiUserService } from "../../../../shared/apis/api-user.service";

@Injectable({
    providedIn: 'root',
})
export class UserServerRightsService {
    apiUserService = inject(ApiUserService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    getServerRights(userName: string):Observable<UserServerPermission>{
        this.loaderService.show();
        return this.apiUserService.getUserServerRights(userName)
        .pipe(map((response) => { 
            return response.User_Rights
        }));
    }

    updateServerRights(userName: string, rights: UserServerPermission):Observable<void>{
        this.loaderService.show();
        return this.apiUserService.updateUserServerRights({User_Rights:rights, UserName: userName})
        .pipe(map((response)=>{
            this.alertService.success(response);
        }))
    }

}