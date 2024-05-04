import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from '../../../../shared/components/elements/text/text.component';
import { FormBtnPrComponent } from '../../../../shared/components/form/form-btn-pr/form-btn-pr.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { RegistrationAccessService } from './registration-access.service';
import { takeUntil } from 'rxjs';
import { IpAddressComponent } from "../../../../shared/components/elements/ip-address/ip-address.component";
import { FormFooterComponent } from "../../../../shared/components/form/form-footer/form-footer.component";

@Component({
    selector: 'app-registration-access',
    standalone: true,
    templateUrl: './registration-access.component.html',
    styleUrl: './registration-access.component.scss',
    imports: [
        FormsModule,
        TextComponent,
        FormBtnPrComponent,
        PageHeaderComponent,
        IpAddressComponent,
        FormFooterComponent
    ]
})
export class RegistrationAccessComponent extends BaseComponent {

  registrationAccessService = inject(RegistrationAccessService);

  clientIp!: string;
  
  updateIpAddress(ipAddress: string): void {
    this.clientIp = ipAddress; // Update the IPv4 address in parent component
  }

  onAccessBtnClick(){
    console.log("client ip",this.clientIp);
    this.registrationAccessService
    .registrationAccess(this.clientIp)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
    });
  }

  
}
