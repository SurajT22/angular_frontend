import { Component, OnInit, inject } from '@angular/core';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { DateComponent } from '../../../../../../shared/components/elements/date/date.component';
import { takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SystemSettingService } from '../../system-setting.service';
import { AutoBackupSetting } from '../../../../../../shared/models/entities/system-setting/auto-backup-settings';
import { FormBtnPrComponent } from "../../../../../../shared/components/form/form-btn-pr/form-btn-pr.component";
import { CheckboxComponent } from "../../../../../../shared/components/elements/checkbox/checkbox.component";
import { BtnPrComponent } from '../../../../../../shared/components/elements/button/btn-pr/btn-pr.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-backup-restore',
    standalone: true,
    templateUrl: './backup-restore.component.html',
    styleUrl: './backup-restore.component.scss',
    imports: [
        FormsModule,
        TextComponent,
        FormFooterComponent,
        NgSelectComponent,
        PageHeaderComponent,
        DateComponent,
        FormBtnPrComponent,
        CheckboxComponent,
        BtnPrComponent
    ]
})
export class BackupRestoreComponent extends BaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  systemSettingService = inject(SystemSettingService);
  datePipe = inject(DatePipe);
  
  autobackupsetting: AutoBackupSetting;
  
  durationList = [
    'Daily',
    'Monthly',
    'Yearly'
  ]

  constructor() {
    super();
    this.autobackupsetting = new AutoBackupSetting();
  }

  ngOnInit(): void { 
    this.getAutoBackupSettings();
  }

  getAutoBackupSettings(){
    this.systemSettingService.getAutoBackupSetting()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response)=>{
      this.autobackupsetting = response;
    });
  }
  
  onBtnClick() {
    this.updateAutoBackupSetting();
  }

  updateAutoBackupSetting(){

    this.autobackupsetting.ScheduledTime = ((this.autobackupsetting.ScheduledTime as any instanceof Date)? this.datePipe.transform(this.autobackupsetting.ScheduledTime,"HH:mm:ss.SSS dd-MM-yyyy") : this.autobackupsetting.ScheduledTime) as string;

    this.systemSettingService.updateAutoBackupSetting(this.autobackupsetting)
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{

    });
  }

  onBackupDatabase(){
    this.systemSettingService.backupDatabase()
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{

    });
  }

  onRestoreDatabase(){
    this.systemSettingService.restorDatabase()
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      
    });
  }

  onBackupConfiguration(){
    this.systemSettingService.backupConfiguration()
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      
    });
  }

  onRestoreConfiguration(){
    this.systemSettingService.restoreConfiguration()
    .pipe(takeUntil(this.destroy$))
    .subscribe(()=>{
      
    });
  }

}
