/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';
import { ThirdPartyEnum } from '../models/common/enums/third-party.enum';

@Pipe({
    name: 'thirdPartyTypeEnum',
    standalone: true,
})
export class ThirdPartyEnumPipe implements PipeTransform {
    transform(value: ThirdPartyEnum): string {
        let msg = '';
        switch (value) {
            case ThirdPartyEnum.KEV_SECURE:
                msg = 'KevSecure';
                break;
            case ThirdPartyEnum.KEV_SECURE_WEB_SERVER_L3:
                msg = 'KevSecureWebServer-L3';
                break;
            case ThirdPartyEnum.TRACELINK:
                msg = 'Tracelink';
                break;
            case ThirdPartyEnum.SAP_ICH:
                msg = 'SAP-ICH';
                break;
            case ThirdPartyEnum.ARVATO:
                msg = 'Arvato';
                break;
            case ThirdPartyEnum.TRACEKEY:
                msg = 'Tracekey';
                break;
            case ThirdPartyEnum.RFXCEL:
                msg = 'RFXCEL';
                break;
            case ThirdPartyEnum.VERIFYBRAND:
                msg = 'VerifyBrand';
                break;
            case ThirdPartyEnum.CARDINAL_HEALTH:
                msg = 'CardinalHealth';
                break;
            case ThirdPartyEnum.KEV_SECURE_WEB_SERVER_L4:
                msg = 'KevSecureWebServer-L4';
                break;
            case ThirdPartyEnum.PHARMA_SECURE:
                msg = 'PharmaSecure';
                break;
            case ThirdPartyEnum.ANTARES_VISION:
                msg = 'AntaresVision';
                break;
            case ThirdPartyEnum.TATMEEN:
                msg = 'Tatmeen';
                break;
            case ThirdPartyEnum.CRPT:
                msg = 'CRPT';
                break;
            case ThirdPartyEnum.BPOM:
                msg = 'BPOM';
                break;
            case ThirdPartyEnum.NHRA:
                msg = 'NHRA';
                break;
            case ThirdPartyEnum.SAP_ATTP:
                msg = 'SAP-ATTP';
                break;
            case ThirdPartyEnum.CRPT_Turon:
                msg = 'CRPT-Turon';
                break;
            case ThirdPartyEnum.ONE_C:
                msg = '1C';
                break;
            case ThirdPartyEnum.LS_PEDIA:
                msg = 'LSPedia';
                break;
            case ThirdPartyEnum.NATIVE_TRACE:
                msg = 'NativeTrace';
                break;
        }
        return msg;
    }
}
