import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { LoaderService } from "../../../../core/services/loader.service";
import { AlertService } from "../../../../core/services/alert.service";
import { SecurityPolicy } from "../../../../shared/models/entities/security-policy/security-policy.model";
import { ApiUserService } from "../../../../shared/apis/api-user.service";

@Injectable({
    providedIn: 'root',
})
export class SecurityPolicyService {

    apiUserService = inject(ApiUserService);
    loaderService = inject(LoaderService);
    alertService = inject(AlertService);

    updateSecurityPolicy(securitypolicy: SecurityPolicy): Observable<void> {
        this.loaderService.show();
        return this.apiUserService.updateSecurityPolicy(securitypolicy).pipe(
            map((response) => {
                this.alertService.success(response);
            }),
        );
    }

    getSecurityPolicy():Observable<SecurityPolicy>{
        this.loaderService.show();
        return this.apiUserService.getSecurityPolicy()
        .pipe(map((res) => { return res }));
    }
}