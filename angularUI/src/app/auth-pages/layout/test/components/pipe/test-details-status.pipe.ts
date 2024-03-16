import { Pipe, PipeTransform, inject } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { RegistrationStatusEnum } from "../../../../../shared/models/entities/client-registration/enums/registration-status.enum";
import { TestStatusEnum } from "../../../../../shared/models/entities/test-client-registration/enums/test-status.enum";

@Pipe({
    name:"testStatusHtml",
    standalone: true,
})
export class TestStatusHtmlPipe implements PipeTransform{
    sanitized = inject(DomSanitizer);
    transform(statusEnum: TestStatusEnum, returnAsString = false): SafeHtml | string {
        //status colour change for register and not register
        let color = '#aeaeae';
        switch (statusEnum) {
          case TestStatusEnum.Registered:
            color = '#05d69e';
            break;
          case TestStatusEnum.NotRegistered:
            color = '#e66969';
            break;
        }
    
        const html = `<span class="registration-status-tag" style='background-color:${color}'>${statusEnum}</span>`;
        if (returnAsString) return html;
        return this.sanitized.bypassSecurityTrustHtml(html);  
    }

}