import { Pipe, PipeTransform, inject } from "@angular/core";
import { RegistrationStatusEnum } from "../../../../../shared/models/entities/client-registration/enums/registration-status.enum";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name:"registrationStatusHtml",
    standalone: true,
})
export class RegistrationStatusHtmlPipe implements PipeTransform{
    sanitized = inject(DomSanitizer);
    transform(statusEnum: RegistrationStatusEnum, returnAsString = false): SafeHtml | string {
        let color = '#aeaeae';
        switch (statusEnum) {
          case RegistrationStatusEnum.Registered:
            color = '#05d69e';
            break;
          case RegistrationStatusEnum.NotRegistered:
            color = '#e66969';
            break;
        }
    
        const html = `<span class="status-tag" style='background-color:${color}'>${statusEnum}</span>`;
        if (returnAsString) return html;
        return this.sanitized.bypassSecurityTrustHtml(html);  
    }

}