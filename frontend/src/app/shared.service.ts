import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://192.168.1.198:8057';
  // http://192.168.1.198:8057/TestService/webapi_UserManagement_GetUserDetails_Test
  // /KevinWebService/webapi_UserManagement_GetUserDetails

  constructor(private http:HttpClient) { }
  getProfileList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_UserManagement_GetUserDetails_Test');
  }

  addUserProfile(val:any): Observable<any>{
    return this.http.post(this.APIUrl + '/TestService/webapi_UserManagement_AddUser_Test',val);
  }

  updateUserProfile(val:any): Observable<any>{
    // console.log('data of updateprofile',val)
    return this.http.put(this.APIUrl + '/TestService/webapi_UserManagement_EditUser_Test/',val);
  }

  getGroupList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_UserManagement_GetGroupNames_Test');
  }


}
