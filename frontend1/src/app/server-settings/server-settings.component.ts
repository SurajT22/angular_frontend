import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-server-settings',
  templateUrl: './server-settings.component.html',
  styleUrls: ['./server-settings.component.css']
})
export class ServerSettingsComponent implements OnInit {
  availableNumericUidLength: any;
  securitypolicy: any;
  serverSettingsService: any;
  serverSettings: any;
  NumericUidFacility: boolean= false;
  selectedUidDigits: any;
  selectedUidType: any;

  constructor(private service: SharedService,) { }
  ngOnInit(): void {
    this.refreshServerSettings();
   }

  refreshServerSettings() {

    this.service.getServerSettings().subscribe((data: any) => {
      this.serverSettings = data;

    },
    (error) => {
      console.error("Error fetching security policy", error);

    }
    );
  }

  saveSettings(): void {
    // Make a request to your API with selected parameters
    const params = {
      UidDigits: this.selectedUidDigits,
      UidType: this.selectedUidType
    }

    // this.http.get<any>('/api/your-endpoint', { params }).subscribe(response => {
      this.service.getServerSettings().subscribe((data: any) => {
        this.serverSettings = data;
  
      
      // Handle the response, update your UI, etc.
      // console.log(response);
    });
  }

}
