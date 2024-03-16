import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://192.168.1.198:8057';
  private authToken = 'QWRtaW58MjUtMDItMjUgMTM6NDk6MTkNCg==';
  // http://192.168.1.198:8057/TestService/webapi_UserManagement_GetUserDetails_Test
  // /KevinWebService/webapi_UserManagement_GetUserDetails

  constructor(private http: HttpClient) {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    new HttpHeaders({ 'Content-Type': 'text/plain' })

  }
  // getProfileList():Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_UserManagement_GetUserDetails_Test');
  // }
  getProfileList(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });

    return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_UserManagement_GetUserDetails_Test', { headers });
  }


  addUsersProfile(val: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post(this.APIUrl + '/TestService/webapi_UserManagement_AddUser_Test', val, { headers });
  }

  updateUsersProfile(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    // console.log('data of updateprofile',val)
    return this.http.put(this.APIUrl + '/TestService/webapi_UserManagement_EditUser_Test/', val, { headers });
  }

  getGroupList(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_UserManagement_GetGroupConfig_Test', { headers });
  }

  // deleteProfile(val: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.authToken}`
  //   });
  //   return this.http.delete(this.APIUrl + '/TestService/webapi_UserManagement_DeleteUser_Test?' + val,{ headers });
  // }
  deleteProfile(userId: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    const deleteUrl = `${this.APIUrl}/TestService/webapi_UserManagement_DeleteUser_Test?UserID=${userId}`;
    return this.http.delete(deleteUrl, { headers });
  }

  getSecurityPolicyList(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any[]>(this.APIUrl + '/TestService/webapi_Usermanagement_GetSecurityPolicy_Test', { headers });
  }

  updateSecurityPolicyList(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    // console.log('data of updateprofile',val)
    return this.http.put(this.APIUrl + '/TestService/webapi_Usermanagement_UpdateSecurityPolicy_Test/', val, { headers });
  }

  
  getUserRights(selectedUser: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
  
    const params = new HttpParams().set('selecteduser', selectedUser);
  
    return this.http.get<any[]>('http://192.168.1.179:8090/TestWebServices/webapi_Usermanagment_UserRights_Test', { headers, params });
  }

  updateUserRights(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put('http://192.168.1.179:8090/TestWebServices/webapi_Usermanagment_UserRights_UpdateUserRights_Test',val, { headers });
  }
  
  addRegistrationAccess(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post('http://192.168.1.180:8088/TestServices/webapi_Clientregistration_RegistrationAccess_Test',val, { headers });
  }

  getRegistrationDetails(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any[]>('http://192.168.1.180:8088/TestServices/webapi_Clientregistration_GetRegistrationDetails_Test', { headers });
  }
  addRegisterationDetails(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.post('http://192.168.1.180:8088/TestServices/webapi_Clientregistration_AddRegistration_Test',val, { headers });
  }
  updateRegistrationDetails(val: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.put('http://192.168.1.180:8088/TestServices/webapi_Clientregistration_UpdateRegistration_Test',val, { headers });
  }
  deleteRegistrationDetails(mac_id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    const deleteUrl = `${this.APIUrl}/TestService/webapi_UserManagement_DeleteUser_Test?ip=${mac_id}`;
    return this.http.delete(deleteUrl, { headers });
  }

  getServerSettings(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authToken}`
    });
    return this.http.get<any[]>('',{headers});
  }


}
