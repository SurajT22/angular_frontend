import{Aa as r,Ga as f,Ha as v,J as _,Ka as B,Ma as m,N as g,Na as c,O as w,Pa as C,Ra as I,Sa as $,_b as y,bc as D,cc as M,ec as S,fc as U,ga as s,ja as u,mc as x,na as b,qc as F,ta as d,ua as p,vc as q,za as o}from"./chunk-BSMU7QB4.js";function T(a,t){a&1&&(o(0,"span",6),c(1," * "),r())}function k(a,t){a&1&&(o(0,"span"),c(1,"This field is required."),r())}function E(a,t){if(a&1&&(o(0,"div",7),d(1,k,2,0,"span"),r()),a&2){v();let L=m(6);s(1),p(1,L.hasError("required")?1:-1)}}var H=(()=>{let t=class t{constructor(){this.uniqueId="id"+Math.random().toString(36).substring(5),this.label="",this.value="",this.disabled=!1,this.rows=3,this.valueChange=new u,this.keyDown=new u}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=w({type:t,selectors:[["app-multi-line"]],inputs:{label:"label",value:"value",required:"required",disabled:"disabled",rows:"rows"},outputs:{valueChange:"valueChange",keyDown:"keyDown"},standalone:!0,features:[I([],[{provide:D,useExisting:S}]),$],decls:8,vars:8,consts:[[1,"field"],["class","text-danger text-bold"],[1,"input-control"],[1,"form-control",3,"ngModel","required","name","disabled","rows","ngModelChange","keydown"],["textarea","ngModel"],["class","error-msg-text"],[1,"text-danger","text-bold"],[1,"error-msg-text"]],template:function(n,i){if(n&1&&(o(0,"div",0)(1,"label"),c(2),d(3,T,2,0,"span",1),r(),o(4,"div",2)(5,"textarea",3,4),f("ngModelChange",function(h){return i.value=h})("keydown",function(h){return i.keyDown.emit(h)})("ngModelChange",function(){return i.valueChange.emit(i.value)}),r(),d(7,E,2,1,"div",5),r()()),n&2){let l=m(6);s(2),C("",i.label," "),s(1),p(3,i.required?3:-1),s(2),B("name",i.uniqueId),b("ngModel",i.value)("required",i.required)("disabled",i.disabled)("rows",i.rows),s(2),p(7,l.invalid&&(l.dirty||l.touched)?7:-1)}},dependencies:[F,y,M,x,U]});let a=t;return a})();var J=(()=>{let t=class t{constructor(){this.api=g(q),this.baseUrl="KevinWebService"}getBatchByFilter(e,n){return this.api.get(`${this.baseUrl}/webapi_Batchdetails_BatchDetails?PackagingType=${n}&BatchName=${e}`)}getSelectedBatchDetails(e,n,i){return this.api.get(`${this.baseUrl}/webapi_Batchdetails_SelectedBatchDetails?BatchName=${e}&GTIN=${n}&PackagingLevel=${i}`)}getInwardPageData(e){return this.api.get(`${this.baseUrl}/webapi_Batchdetails_GetInwardPageDetails?ServerType=${e}`)}getInwardPoList(){return this.api.get(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_GetPOList`)}getProductDetail(e,n){return this.api.get(`${this.baseUrl}/webapi_Batchdetails_GetProductDetails?ProductName=${e}&Station=${n}`)}getAddPageData(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_AddBatch_Details`,e)}addBatch(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_AddBatch_Add`,e)}getScannedData(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_GetScannedData`,e)}fetchInwardFileList(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_FetchFileList`,e)}downloadInwardFile(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_DownloadFile`,e)}verifyInwardFile(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_ValidateBatchData`,e)}inwardBatch(e){return this.api.post(`${this.baseUrl}/webapi_Batchdetails_InwardBatch_Import`,e)}updateBatch(e){return this.api.put(`${this.baseUrl}/webapi_Batchdetails_UpdateBatch`,e)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=_({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{J as a,H as b};