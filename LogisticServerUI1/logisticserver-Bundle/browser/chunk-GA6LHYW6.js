import{a as ie}from"./chunk-ZDROOD52.js";import{a as re}from"./chunk-TF5BNQMD.js";import{a as ne}from"./chunk-W2LNWO7A.js";import{a as te}from"./chunk-XWJPI5P5.js";import{a as ae}from"./chunk-DD65RJ7C.js";import"./chunk-XX5VUOZJ.js";import{a as L}from"./chunk-TJBFEVGI.js";import{Aa as o,Ab as W,Ba as f,Bb as O,Db as I,Eb as z,F as S,Fa as j,Ga as c,Ha as $,Hb as G,J as w,N as m,Na as d,O as h,Oa as D,R as M,Sa as g,T as N,Ta as H,U as A,Va as R,Wb as J,X as k,Xb as b,Ya as K,Za as V,aa as P,dc as Q,ec as X,ga as l,gc as Y,ja as U,la as C,na as s,qc as Z,r as y,tc as ee,xa as q,ya as B,za as a}from"./chunk-BSMU7QB4.js";var F=function(r){return r.Registered="Register",r.NotRegistered="Not Register",r}(F||{});var oe=(()=>{let e=class e{constructor(){this.sanitized=m(W)}transform(n,i=!1){let t="#aeaeae";switch(n){case F.Registered:t="#05d69e";break;case F.NotRegistered:t="#e66969";break}let u=`<span class="status-tag" style='background-color:${t}'>${n}</span>`;return i?u:this.sanitized.bypassSecurityTrustHtml(u)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=M({name:"registrationStatusHtml",type:e,pure:!0,standalone:!0});let r=e;return r})();var _=(()=>{let e=class e{constructor(){this.apiKevinWebService=m(ie),this.loaderService=m(J),this.alertService=m(ee)}getAllClients(){return this.loaderService.show(),this.apiKevinWebService.getAllClients().pipe(y(n=>n))}getClient(n,i){return this.loaderService.show(),this.apiKevinWebService.getSelectedClient(n,i).pipe(y(t=>t))}createClient(n){return this.loaderService.show(),this.apiKevinWebService.createClient(n).pipe(y(i=>{this.alertService.success(i)}))}updateClient(n){return this.loaderService.show(),this.apiKevinWebService.updateClient(n).pipe(y(i=>{this.alertService.success(i)}))}deleteClient(n,i){return this.loaderService.show(),this.apiKevinWebService.deleteClient(n,i).pipe(y(t=>{this.alertService.success(t)}))}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var ce=(r,e)=>e.Ip,de=(r,e)=>["edit",r,e];function ue(r,e){if(r&1){let v=j();a(0,"tr")(1,"td",6),d(2),o(),a(3,"td",7),d(4),o(),a(5,"td",8),d(6),o(),a(7,"td",8),d(8),o(),a(9,"td",8),d(10),o(),a(11,"td",8),f(12,"span",9),K(13,"registrationStatusHtml"),o(),a(14,"td",6)(15,"a",10),f(16,"i",11),o(),a(17,"a",12),c("click",function(){let t=N(v).$implicit,u=$();return A(u.clickDeleteClient(t.Ip,t.MacId))}),f(18,"i",13),o()()()}if(r&2){let v=e.$implicit;l(2),D(v.Ip),l(2),D(v.MacId),l(2),D(v.LineNumber),l(2),D(v.PlantName),l(2),D(v.Location),l(2),s("innerHTML",V(13,7,v.Status),P),l(3),s("routerLink",R(9,de,v.Ip,v.MacId))}}var fe=()=>["add"],le=(()=>{let e=class e extends b{constructor(){super(...arguments),this.confirmDialogService=m(ne),this.registrationDetailService=m(_)}ngOnInit(){this.getAllClient()}getAllClient(){this.registrationDetailService.getAllClients().pipe(S(this.destroy$)).subscribe(n=>{this.clientList=n})}clickDeleteClient(n,i){this.confirmDialogService.confirm(t=>{t&&this.deleteClient(n,i)},"This Client will be deleted",void 0,"Delete")}deleteClient(n,i){this.registrationDetailService.deleteClient(n,i).pipe(S(this.destroy$)).subscribe(()=>{this.getAllClient()})}};e.\u0275fac=(()=>{let n;return function(t){return(n||(n=k(e)))(t||e)}})(),e.\u0275cmp=h({type:e,selectors:[["app-list-registration-details"]],standalone:!0,features:[C,g],decls:22,vars:5,consts:[[3,"headerLabel","btnLink","btnLabel","btnVisible"],[1,"table-responsive"],[1,"table","oee-custom-table","table-responsive","text-center"],["width","120",1,"text-center"],["width","180",1,"text-center"],["width","150",1,"text-center"],["width","120"],["width","180"],["width","150"],[3,"innerHTML"],["href","javascript:;","tooltip","Edit Client","placement","top",1,"me-2",3,"routerLink"],[1,"lni","lni-pencil","text-primary"],["href","javascript:;","tooltip","Delete Client","placement","top",1,"me-2",3,"click"],[1,"lni","lni-trash-can","text-primary"]],template:function(i,t){i&1&&(f(0,"app-page-header",0),a(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th",3),d(6,"IP Address"),o(),a(7,"th",4),d(8,"Mac Address"),o(),a(9,"th",5),d(10,"Line Number"),o(),a(11,"th",5),d(12,"Plant Name"),o(),a(13,"th",5),d(14,"Location"),o(),a(15,"th",5),d(16,"Status"),o(),a(17,"th",3),d(18,"Action"),o()()(),a(19,"tbody"),q(20,ue,19,12,"tr",null,ce),o()()()),i&2&&(s("headerLabel","Registration Details")("btnLink",H(4,fe))("btnLabel","Add Client")("btnVisible",!0),l(20),B(t.clientList))},dependencies:[G,z,L,oe]});let r=e;return r})();var se=(()=>{let e=class e extends b{};e.\u0275fac=(()=>{let n;return function(t){return(n||(n=k(e)))(t||e)}})(),e.\u0275cmp=h({type:e,selectors:[["app-registration-details"]],standalone:!0,features:[C,g],decls:1,vars:0,template:function(i,t){i&1&&f(0,"app-list-registration-details")},dependencies:[le]});let r=e;return r})();var x=class{};var ve=(r,e)=>[r,e],T=(()=>{let e=class e extends b{constructor(){super(),this.activatedRoute=m(O),this.registrationDetailService=m(_),this.btnLabel="",this.isUpdate=!1,this.btnClick=new U,this.registrationStatusEnum=F,this.packagingLevelList=["0","1","2","3","4","5","6","7","8","9"]}ngOnInit(){if(this.isUpdate){let n=this.activatedRoute.snapshot.paramMap.get("ip")||"",i=this.activatedRoute.snapshot.paramMap.get("mac")||"";this.getClient(n,i)}}getClient(n,i){this.registrationDetailService.getClient(n,i).pipe(S(this.destroy$)).subscribe(t=>{this.client=t})}onBtnClick(){this.btnClick.emit(this.client)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-client-form"]],inputs:{client:"client",btnLabel:"btnLabel",isUpdate:"isUpdate"},outputs:{btnClick:"btnClick"},standalone:!0,features:[C,g],decls:37,vars:36,consts:[[1,"form-layout-input"],["clientForm","ngForm"],[1,"form-outer"],[1,"form-fieldset"],[1,"row"],[1,"col-12","col-md-6","col-lg-6","col-sm-6"],[3,"label","value","required","valueChange"],[1,"field"],[1,"text-danger","text-bold"],[1,"col-12",3,"items","required","value","clearable","valueChange"],[3,"btnLabel","btnClick"]],template:function(i,t){i&1&&(a(0,"div",0)(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"app-text",6),c("valueChange",function(p){return t.client.Ip=p}),o()(),a(8,"div",5)(9,"app-text",6),c("valueChange",function(p){return t.client.MacId=p}),o()(),a(10,"div",5)(11,"app-text",6),c("valueChange",function(p){return t.client.LineNumber=p}),o()(),a(12,"div",5)(13,"app-text",6),c("valueChange",function(p){return t.client.PlantName=p}),o()(),a(14,"div",5)(15,"app-text",6),c("valueChange",function(p){return t.client.Location=p}),o()(),a(16,"div",5)(17,"div",7)(18,"label"),d(19," Status "),a(20,"span",8),d(21," * "),o()(),a(22,"app-ng-select",9),c("valueChange",function(p){return t.client.Status=p}),o()()(),a(23,"div",5)(24,"div",7)(25,"label"),d(26," Packaging Level "),a(27,"span",8),d(28," * "),o()(),a(29,"app-ng-select",9),c("valueChange",function(p){return t.client.PackagingLevel=p}),o()()(),a(30,"div",5)(31,"app-text",6),c("valueChange",function(p){return t.client.Regulatory=p}),o()(),a(32,"div",5)(33,"app-text",6),c("valueChange",function(p){return t.client.SystemName=p}),o()(),a(34,"div",5)(35,"app-text",6),c("valueChange",function(p){return t.client.SystemModel=p}),o()(),a(36,"app-form-footer",10),c("btnClick",function(){return t.onBtnClick()}),o()()()()()()),i&2&&(l(7),s("label","IP Address")("value",t.client.Ip)("required",!0),l(2),s("label","MAC Address")("value",t.client.MacId)("required",!0),l(2),s("label","Line Number")("value",t.client.LineNumber)("required",!0),l(2),s("label","Plant Name")("value",t.client.PlantName)("required",!0),l(2),s("label","Location")("value",t.client.Location)("required",!0),l(7),s("items",R(33,ve,t.registrationStatusEnum.Registered,t.registrationStatusEnum.NotRegistered))("required",!0)("value",t.client.Status)("clearable",!0),l(7),s("items",t.packagingLevelList)("required",!0)("value",t.client.PackagingLevel)("clearable",!0),l(2),s("label","Regulatory")("value",t.client.Regulatory)("required",!0),l(2),s("label","System Name")("value",t.client.SystemName)("required",!0),l(2),s("label","System Model")("value",t.client.SystemModel)("required",!0),l(1),s("btnLabel",t.btnLabel))},dependencies:[Z,Y,Q,X,te,re,ae]});let r=e;return r})();var pe=(()=>{let e=class e extends b{constructor(){super(),this.router=m(I),this.registrationDetailsService=m(_),this.client=new x}addClient(){this.client.DateTime=new Date,this.registrationDetailsService.createClient(this.client).pipe(S(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("registrationdetails")})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-add-registration-details"]],standalone:!0,features:[C,g],decls:2,vars:3,consts:[[3,"headerLabel"],[3,"client","btnLabel","btnClick"]],template:function(i,t){i&1&&(f(0,"app-page-header",0),a(1,"app-client-form",1),c("btnClick",function(){return t.addClient()}),o()),i&2&&(s("headerLabel","Add Client"),l(1),s("client",t.client)("btnLabel","Add"))},dependencies:[L,T]});let r=e;return r})();var me=(()=>{let e=class e extends b{constructor(){super(),this.registrationDetailsService=m(_),this.router=m(I),this.client=new x}editClient(n){this.client=n,this.client.DateTime=new Date,this.registrationDetailsService.updateClient(this.client).pipe(S(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("registrationdetails")})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=h({type:e,selectors:[["app-edit-registration-details"]],standalone:!0,features:[C,g],decls:2,vars:4,consts:[[3,"headerLabel"],[3,"client","isUpdate","btnLabel","btnClick"]],template:function(i,t){i&1&&(f(0,"app-page-header",0),a(1,"app-client-form",1),c("btnClick",function(p){return t.editClient(p)}),o()),i&2&&(s("headerLabel","Edit Client"),l(1),s("client",t.client)("isUpdate",!0)("btnLabel","Edit"))},dependencies:[L,T]});let r=e;return r})();var kt=[{path:"",component:se},{path:"add",component:pe},{path:"edit/:ip/:mac",component:me}];export{kt as REGISTRATIONDETAILS_ROUTES};
