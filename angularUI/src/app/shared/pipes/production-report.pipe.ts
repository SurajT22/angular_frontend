import { Pipe,PipeTransform } from "@angular/core";
import { ReportTypeEnum } from "../models/view/report/production-report/enums/report-type.enum";

@Pipe({
    name:'productionReportEnum',
    standalone: true,
})
export class productionReportEnumPipe implements PipeTransform{
    transform(productionReportEnum: ReportTypeEnum): string {
        let msg = '';
        switch (productionReportEnum) {
          case ReportTypeEnum.SERAILIZATION:
            msg = 'Serailization';
            break;
            case ReportTypeEnum.PARENTCHILD:
                msg = 'Parent Child';
                break;
        }
        return msg;
      }
    }