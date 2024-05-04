import { Pipe, PipeTransform, inject } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { StatusEnum } from "../models/common/enums/status.enum";

@Pipe({
    name:"statusEnumHtml",
    standalone: true,
})
export class StatusEnumHtmlPipe implements PipeTransform{
    sanitized = inject(DomSanitizer);
    transform(statusEnum: StatusEnum, returnAsString = false): SafeHtml | string {
        let color = '#aeaeae';
        let text = 'N/A'
        switch (statusEnum) {
          case StatusEnum.ACTIVE:
            color = '#05d69e';
            text = 'Active'
            break;
          case StatusEnum.INACTIVE:
            color = '#e66969';
            text = 'Not Active'
            break;
        }
    
        const html = `<span class="status-tag" style='background-color:${color}'>${text}</span>`;
        if (returnAsString) return html;
        return this.sanitized.bypassSecurityTrustHtml(html);  
    }

}