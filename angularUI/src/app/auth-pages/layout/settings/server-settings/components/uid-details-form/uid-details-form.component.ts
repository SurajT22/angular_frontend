import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/components/base/base.component';
import { UidDetails } from '../../../../../../shared/models/entities/server-settings/uid-details.model';
import { TextComponent } from '../../../../../../shared/components/elements/text/text.component';

@Component({
  selector: 'app-uid-details-form',
  standalone: true,
  imports: [
    TextComponent
  ],
  templateUrl: './uid-details-form.component.html',
  styleUrl: './uid-details-form.component.scss'
})
export class UidDetailsFormComponent extends BaseComponent {
  @Input() uidDetails!: UidDetails;
}
