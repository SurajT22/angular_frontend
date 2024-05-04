import { Pipe, PipeTransform, inject } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { SsccStatusEnum } from "../../../../../../shared/models/entities/server-settings/enums/sscc-status.enum";

@Pipe({
    name: 'ssccStatusHtml',
    standalone: true,
})
export class SsccStatusHtmlPipe implements PipeTransform {
    sanitized = inject(DomSanitizer);
    transform(statusEnum: SsccStatusEnum, returnAsString = false): SafeHtml | string {
        let color = '#aeaeae';
        switch (statusEnum) {
            case SsccStatusEnum.Open:
                color = '#05d69e';
                break;
            case SsccStatusEnum.Close:
                color = '#e66969';
                break;
        }
        const html = `<span class="sscc-status-tag rounded-pill p-1" style='background-color:${color}'>${statusEnum}</span>`;
        if (returnAsString) return html;
        return this.sanitized.bypassSecurityTrustHtml(html);
    }
}