import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../shared/components/base/base.component';
import { FormSystemSettingComponent } from "./components/form-system-setting/form-system-setting.component";

@Component({
    selector: 'app-system-setting',
    standalone: true,
    templateUrl: './system-setting.component.html',
    styleUrl: './system-setting.component.scss',
    imports: [
        PageHeaderComponent,
        FormSystemSettingComponent
    ]
})
export class SystemSettingComponent extends BaseComponent{

}
