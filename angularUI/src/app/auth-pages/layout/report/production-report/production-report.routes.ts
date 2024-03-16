import { Routes } from "@angular/router";
import { ProductionReportComponent } from "./production-report.component";
import { ReportSettingsComponent } from "./report-settings/report-settings.component";
import { BatchInfoComponent } from "./batch-info/batch-info.component";
import { ReconcilationComponent } from "./reconcilation/reconcilation.component";

export const ProductionReportComponent_ROUTES: Routes = [
    {
        path: '',
        component: ProductionReportComponent
    },
    {
        path: 'reportsettings',
        component: ReportSettingsComponent
    },
    {
        path: 'batchinfo',
        component: BatchInfoComponent
    },
    {
        path: 'reconcilation',
        component: ReconcilationComponent
    }
]