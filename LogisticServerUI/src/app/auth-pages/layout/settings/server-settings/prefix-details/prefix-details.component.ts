import { Component } from '@angular/core';
import { ListPrefixDetailsComponent } from './components/list-prefix-details/list-prefix-details.component';

@Component({
  selector: 'app-prefix-details',
  standalone: true,
  imports: [
    ListPrefixDetailsComponent
  ],
  templateUrl: './prefix-details.component.html',
  styleUrl: './prefix-details.component.scss'
})
export class PrefixDetailsComponent {

}
