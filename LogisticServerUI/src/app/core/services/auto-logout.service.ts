import { Injectable, ChangeDetectorRef, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ApiAuthService } from '../../shared/apis/api-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLogoutService {
  authService = inject(AuthService);
  apiAuthService = inject(ApiAuthService);
  
  public hideModalOnLogout: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  logoutTimer : any;
  private _logoutTime = 0;
  eventListener : any;

  constructor() {

  }

  startListener() {
    this._logoutTime = 0;
    this.startLogoutTimer(this.getScreenTimeOut());
    $("body").on("click",this,()=>{this.startLogoutTimer(this.getScreenTimeOut());});
  }

  endListener(){
    this.resetScreenTimeOut();
    this.clearLogoutTimer();
    $("body").off("click");
  }

  autoLogout() {
    $("body").off("click");
    this.clearLogoutTimer();
    this.resetScreenTimeOut();
    // Check if it is already logout
    if(!this.authService.getToken()){
      return;
    }
    this.hideModalOnLogout.next(true);
    // this.apiAuthService.logOut().pipe(take(1)).subscribe(response =>{

    // });
    this.authService.logout();
  }

  startLogoutTimer(milisec: number) {
    this.clearLogoutTimer();
    this.logoutTimer = setTimeout(() => {      
       this.autoLogout(); 
      }, milisec);
  }

  getScreenTimeOut(){    
    if(this._logoutTime > 0) return this._logoutTime;
    const screenTimeOut = parseInt(this.authService.getScreenTimeOut()?.toString() as string);
    this._logoutTime = screenTimeOut > 0 ? screenTimeOut * 1000 : 60000;  
    return this._logoutTime;
  };

  clearLogoutTimer(){
    clearTimeout(this.logoutTimer);
  }

  resetScreenTimeOut(){
    this._logoutTime = 0;    
  }

}
