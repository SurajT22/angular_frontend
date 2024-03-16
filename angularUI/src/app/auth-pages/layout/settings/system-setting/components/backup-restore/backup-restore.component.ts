import { Component, OnInit, inject } from '@angular/core';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';
import { FormFooterComponent } from '../../../../../../shared/components/form/form-footer/form-footer.component';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent } from '../../../../../../shared/components/elements/ng-select/ng-select.component';
import { PageHeaderComponent } from '../../../../../../shared/components/page/page-header/page-header.component';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { DateRangeComponent } from '../../../../../../shared/components/elements/date-range/date-range.component';
import { DateComponent } from '../../../../../../shared/components/elements/date/date.component';
import { BackupRestorePathDilogService } from '../../../../../../shared/components/dialogs/backup-restor-path-dialog/backup-restor-path-dialog.service';



@Component({
  selector: 'app-backup-restore',
  standalone: true,
  imports: [
    FormsModule,
    TextComponent,
    FormFooterComponent,
    NgSelectComponent,
    PageHeaderComponent,
    DateComponent,

  ],
  templateUrl: './backup-restore.component.html',
  styleUrl: './backup-restore.component.scss'
})
export class BackupRestoreComponent extends BaseComponent implements OnInit {
  backupRestorePathDilogService = inject(BackupRestorePathDilogService);
  durationList = [
    'Daily',
    'Monthly',
    'Yearly'
  ]

  ngOnInit(): void { }

  pathDialog(): void {
    this.backupRestorePathDilogService.show(() => {

    });
  }

}
