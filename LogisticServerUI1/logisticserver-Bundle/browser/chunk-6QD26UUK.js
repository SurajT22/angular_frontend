import{J as i,N as n,vb as a,vc as p}from"./chunk-BSMU7QB4.js";var m=(()=>{let r=class r{constructor(){this.api=n(p),this.baseUrl="KevinWebService"}getAllUsers(){return this.api.get(`${this.baseUrl}/webapi_UserManagement_GetAllUsersDetails`)}getUserDetail(e){return this.api.get(`${this.baseUrl}/webapi_UserManagement_GetUserDetails?UserName=${e}`)}getUserClientRights(e){return this.api.get(`${this.baseUrl}/webapi_Usermanagment_GetClientUserRights?SelectedUser=${e}`)}getUserServerRights(e){return this.api.get(`${this.baseUrl}/webapi_Usermanagment_GetServerUserRights?SelectedUser=${e}`)}getSecurityPolicy(){return this.api.get(`${this.baseUrl}/webapi_Usermanagement_GetSecurityPolicy`)}createUser(e){return this.api.post(`${this.baseUrl}/webapi_UserManagement_AddUser`,e)}generateOtp(e,t=""){var U={UserName:e};return this.api.post(`${this.baseUrl}/webapi_Usermanagement_OTP_Generation_Update`,U,t?{headers:new a({Authorization:"Bearer "+t})}:{})}updateUser(e){return this.api.put(`${this.baseUrl}/webapi_UserManagement_EditUser`,e)}resetPassword(e,t=""){return this.api.put(`${this.baseUrl}/webapi_Usermanagement_ResetPassword_Update`,e,t?{headers:new a({Authorization:"Bearer "+t})}:{})}verifyOtp(e,t=""){return this.api.put(`${this.baseUrl}/webapi_Usermanagement_ForgotPassword_Update`,e,t?{headers:new a({Authorization:"Bearer "+t})}:{})}updateUserClientRights(e){return this.api.put(`${this.baseUrl}/webapi_Usermanagment_UpdateClientUserRights`,e)}updateUserServerRights(e){return this.api.put(`${this.baseUrl}/webapi_Usermanagment_UpdateServerUserRights`,e)}updateSecurityPolicy(e){return this.api.put(`${this.baseUrl}/webapi_Usermanagement_UpdateSecurityPolicy`,e)}};r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{m as a};