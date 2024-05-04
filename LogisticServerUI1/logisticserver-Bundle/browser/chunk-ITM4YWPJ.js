import{a as te}from"./chunk-TF5BNQMD.js";import{a as ne}from"./chunk-O7NWUDNC.js";import{a as ee}from"./chunk-W2LNWO7A.js";import{a as Z}from"./chunk-XWJPI5P5.js";import{a as ie}from"./chunk-DD65RJ7C.js";import"./chunk-XX5VUOZJ.js";import{a as I}from"./chunk-TJBFEVGI.js";import{Aa as s,Ab as j,Ba as C,Bb as Q,Db as R,Eb as Y,F as A,Ga as u,Hb as $,J as L,N as l,Na as o,O as v,Oa as b,R as N,Sa as g,Ta as M,Ua as B,Va as O,Wb as K,X as F,Xb as D,Ya as G,Za as q,aa as k,dc as V,ec as z,ga as c,gc as X,ja as w,la as h,na as p,qc as J,r as x,tc as W,xa as P,ya as H,za as r}from"./chunk-BSMU7QB4.js";var T=function(t){return t.Open="Open",t.Close="Close",t}(T||{});var re=(()=>{let e=class e{constructor(){this.sanitized=l(j)}transform(i,n=!1){let a="#aeaeae";switch(i){case T.Open:a="#05d69e";break;case T.Close:a="#e66969";break}let f=`<span class="sscc-status-tag rounded-pill p-1" style='background-color:${a}'>${i}</span>`;return n?f:this.sanitized.bypassSecurityTrustHtml(f)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=N({name:"ssccStatusHtml",type:e,pure:!0,standalone:!0});let t=e;return t})();var E=(()=>{let e=class e{constructor(){this.loaderService=l(K),this.alertService=l(W),this.apiServerSettingService=l(ne)}getAllSscc(){return this.loaderService.show(),this.apiServerSettingService.getAllSscc().pipe(x(i=>i))}getSscc(i){return this.loaderService.show(),this.apiServerSettingService.getSelectedSscc(i).pipe(x(n=>n))}createSscc(i){return this.loaderService.show(),this.apiServerSettingService.createSscc(i).pipe(x(n=>{this.alertService.success(n)}))}getCompanyPrefix(){return this.loaderService.show(),this.apiServerSettingService.getAllPrefix().pipe(x(i=>i.map(n=>n.CompanyPrefix)))}updateSscc(i){return this.loaderService.show(),this.apiServerSettingService.updateSscc(i).pipe(x(n=>{this.alertService.success(n)}))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var le=(t,e)=>e.ID,pe=t=>["edit",t];function me(t,e){if(t&1&&(r(0,"tr")(1,"td",9),o(2),s(),r(3,"td",10),o(4),s(),r(5,"td",11),o(6),s(),r(7,"td",11),o(8),s(),r(9,"td",10),o(10),s(),r(11,"td",12),C(12,"span",13),G(13,"ssccStatusHtml"),s(),r(14,"td",14),o(15),s(),r(16,"td",11),o(17),s(),r(18,"td",15),o(19),s(),r(20,"td",14),o(21),s(),r(22,"td",16)(23,"a",17),C(24,"i",18),s()()()),t&2){let S=e.$implicit;c(2),b(S.ID),c(2),b(S.StartRange),c(2),b(S.EndRange),c(2),b(S.UsedLimit),c(2),b(S.ExtentionDigit),c(2),p("innerHTML",q(13,11,S.Status),k),c(3),b(S.DateTime),c(2),b(S.Regulatory),c(2),b(S.RemainingQty),c(2),b(S.CompanyPrefix),c(2),p("routerLink",B(13,pe,S.ID))}}var de=()=>["add"],ae=(()=>{let e=class e extends D{constructor(){super(...arguments),this.confirmDialogService=l(ee),this.ssccDetailsService=l(E)}ngOnInit(){this.getAllSscc()}getAllSscc(){this.ssccDetailsService.getAllSscc().pipe(A(this.destroy$)).subscribe(i=>{this.ssccList=i})}};e.\u0275fac=(()=>{let i;return function(a){return(i||(i=F(e)))(a||e)}})(),e.\u0275cmp=v({type:e,selectors:[["app-list-sscc-details"]],standalone:!0,features:[h,g],decls:30,vars:5,consts:[[3,"headerLabel","btnLink","btnLabel","btnVisible"],[1,"table-responsive"],[1,"table","oee-custom-table","table-responsive","text-center"],["width","30",1,"text-center"],["width","80",1,"text-center"],["width","100",1,"text-center"],["width","150",1,"text-center"],["width","200",1,"text-center"],["width","120",1,"text-center"],["width","30"],["width","80"],["width","100"],["width","100",2,"color","aliceblue"],[3,"innerHTML"],["width","150"],["width","200"],["width","120"],["href","javascript:;","tooltip","Edit SSCC","placement","top",1,"me-3",3,"routerLink"],[1,"lni","lni-pencil","text-primary"]],template:function(n,a){n&1&&(C(0,"app-page-header",0),r(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th",3),o(6,"ID"),s(),r(7,"th",4),o(8,"START"),s(),r(9,"th",5),o(10,"END"),s(),r(11,"th",5),o(12,"USED LIMIT"),s(),r(13,"th",4),o(14,"EX DIGIT"),s(),r(15,"th",5),o(16,"STATUS"),s(),r(17,"th",6),o(18,"DATE&TIME"),s(),r(19,"th",5),o(20,"STATE"),s(),r(21,"th",7),o(22,"REMAINING QUANTITIES"),s(),r(23,"th",6),o(24,"COMPANY PREFIX"),s(),r(25,"th",8),o(26,"Action"),s()()(),r(27,"tbody"),P(28,me,25,15,"tr",null,le),s()()()),n&2&&(p("headerLabel","SSCC Details")("btnLink",M(4,de))("btnLabel","Add SSCC")("btnVisible",!0),c(28),H(a.ssccList))},dependencies:[$,Y,I,re]});let t=e;return t})();var se=(()=>{let e=class e extends D{};e.\u0275fac=(()=>{let i;return function(a){return(i||(i=F(e)))(a||e)}})(),e.\u0275cmp=v({type:e,selectors:[["app-sscc-details"]],standalone:!0,features:[h,g],decls:1,vars:0,template:function(n,a){n&1&&C(0,"app-list-sscc-details")},dependencies:[ae]});let t=e;return t})();var y=class{};var m=function(t){return t.DGFT="DGFT",t.HDMA="HDMA",t.SFDA="SFDA",t.EU="EU",t.RUSSIAN="RUSSIAN",t.CFDA="CFDA",t.SOUTH_KORIA="SOUTH KORIA",t.TURKEY="TURKEY",t.ANVISA="ANVISA",t.ARGENTINA="ARGENTINA",t.EGYPT="EGYPT",t.BAHRAIN="BAHRAIN",t.DHA="DHA",t.UAE="UAE",t}(m||{});var ue=(t,e)=>[t,e],U=(()=>{let e=class e extends D{constructor(){super(),this.btnLabel="",this.isUpdate=!1,this.btnClick=new w,this.activatedRoute=l(Q),this.ssccDetailService=l(E),this.companyPrefixList=[],this.ssccStatusEnum=T,this.RegulatoryList=[{label:"DGFT",value:m.DGFT},{label:"HDMA",value:m.HDMA},{label:"SFDA",value:m.SFDA},{label:"EU",value:m.EU},{label:"RUSSIAN",value:m.RUSSIAN},{label:"CFDA",value:m.CFDA},{label:"SOUTH_KORIA",value:m.SOUTH_KORIA},{label:"TURKEY",value:m.TURKEY},{label:"ANVISA",value:m.ANVISA},{label:"ARGENTINA",value:m.ARGENTINA},{label:"EGYPT",value:m.EGYPT},{label:"BAHRAIN",value:m.BAHRAIN},{label:"DHA",value:m.DHA},{label:"UAE",value:m.UAE}],this.sscc=new y}ngOnInit(){if(this.isUpdate){let i=this.activatedRoute.snapshot.paramMap.get("id")||"";this.sscc.Regulatory=m.BAHRAIN,this.sscc.Status=this.ssccStatusEnum.Open,this.getSscc(i)}else this.sscc.Regulatory=m.BAHRAIN,this.getCompanyPrefixList(),this.sscc.Status=this.ssccStatusEnum.Open}getSscc(i){this.ssccDetailService.getSscc(i).pipe(A(this.destroy$)).subscribe(n=>{this.sscc=n,this.sscc.Quantity=n.RemainingQty})}getCompanyPrefixList(){this.ssccDetailService.getCompanyPrefix().pipe(A(this.destroy$)).subscribe(i=>{this.companyPrefixList=i})}onBtnClick(){this.btnClick.emit(this.sscc)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-sscc-form"]],inputs:{sscc:"sscc",btnLabel:"btnLabel",isUpdate:"isUpdate"},outputs:{btnClick:"btnClick"},standalone:!0,features:[h,g],decls:34,vars:30,consts:[[1,"form-layout-input"],["ssccForm","ngForm"],[1,"form-outer"],[1,"form-fieldset"],[1,"row"],[1,"col-12","col-md-6","col-lg-6","col-sm-6"],[1,"field"],[1,"text-danger","text-bold"],[1,"col-12",3,"items","required","value","clearable","disabled","valueChange"],[3,"label","value","required","disabled","valueChange"],[1,"col-12",3,"items","required","value","clearable","valueChange"],[3,"btnLabel","btnClick"]],template:function(n,a){n&1&&(r(0,"div",0)(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label"),o(9," CompanyPrefix "),r(10,"span",7),o(11," * "),s()(),r(12,"app-ng-select",8),u("valueChange",function(d){return a.sscc.CompanyPrefix=d}),s()()(),r(13,"div",5)(14,"app-text",9),u("valueChange",function(d){return a.sscc.StartRange=d}),s()(),r(15,"div",5)(16,"app-text",9),u("valueChange",function(d){return a.sscc.Quantity=d}),s()(),r(17,"div",5)(18,"app-text",9),u("valueChange",function(d){return a.sscc.ExtentionDigit=d}),s()(),r(19,"div",5)(20,"div",6)(21,"label"),o(22," Status "),r(23,"span",7),o(24," * "),s()(),r(25,"app-ng-select",10),u("valueChange",function(d){return a.sscc.Status=d}),s()()(),r(26,"div",5)(27,"div",6)(28,"label"),o(29," Regulatory "),r(30,"span",7),o(31," * "),s()(),r(32,"app-ng-select",8),u("valueChange",function(d){return a.sscc.Regulatory=d}),s()()(),r(33,"app-form-footer",11),u("btnClick",function(){return a.onBtnClick()}),s()()()()()()),n&2&&(c(12),p("items",a.companyPrefixList)("required",!0)("value",a.sscc.CompanyPrefix)("clearable",!1)("disabled",a.isUpdate),c(2),p("label","Start Range")("value",a.sscc.StartRange)("required",!0)("disabled",a.isUpdate),c(2),p("label","Quantity")("value",a.sscc.Quantity)("required",!a.isUpdate)("disabled",a.isUpdate),c(2),p("label","Extention Digit")("value",a.sscc.ExtentionDigit)("required",!0)("disabled",a.isUpdate),c(7),p("items",O(27,ue,a.ssccStatusEnum.Open,a.ssccStatusEnum.Close))("required",!0)("value",a.sscc.Status)("clearable",!1),c(7),p("items",a.RegulatoryList)("required",!0)("value",a.sscc.Regulatory)("clearable",!1)("disabled",!0),c(1),p("btnLabel",a.btnLabel))},dependencies:[J,X,V,z,Z,te,ie]});let t=e;return t})();var oe=(()=>{let e=class e extends D{constructor(){super(),this.router=l(R),this.ssccDetailsService=l(E),this.sscc=new y}addSscc(i){var n={Quantity:i?.Quantity,CompanyPrefix:i?.CompanyPrefix,StartRange:i?.StartRange,ExtentionDigit:i?.ExtentionDigit,Regulatory:i?.Regulatory};this.ssccDetailsService.createSscc(n).pipe(A(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("serversettings/ssccdetails")})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-add-sscc-details"]],standalone:!0,features:[h,g],decls:2,vars:3,consts:[[3,"headerLabel"],[3,"sscc","btnLabel","btnClick"]],template:function(n,a){n&1&&(C(0,"app-page-header",0),r(1,"app-sscc-form",1),u("btnClick",function(d){return a.addSscc(d)}),s()),n&2&&(p("headerLabel","Add SSCC"),c(1),p("sscc",a.sscc)("btnLabel","Add"))},dependencies:[I,U]});let t=e;return t})();var ce=(()=>{let e=class e extends D{constructor(){super(),this.ssccDetailsService=l(E),this.router=l(R),this.sscc=new y}editSscc(i){var n={ID:i?.ID,CompanyPrefix:i?.CompanyPrefix,ExtentionDigit:i?.ExtentionDigit,Regulatory:i?.Regulatory,Status:i?.Status};this.ssccDetailsService.updateSscc(n).pipe(A(this.destroy$)).subscribe(()=>{this.router.navigateByUrl("serversettings/ssccdetails")})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-edit-sscc-details"]],standalone:!0,features:[h,g],decls:2,vars:4,consts:[[3,"headerLabel"],[3,"sscc","isUpdate","btnLabel","btnClick"]],template:function(n,a){n&1&&(C(0,"app-page-header",0),r(1,"app-sscc-form",1),u("btnClick",function(d){return a.editSscc(d)}),s()),n&2&&(p("headerLabel","Edit SSCC"),c(1),p("sscc",a.sscc)("isUpdate",!0)("btnLabel","Edit"))},dependencies:[I,U]});let t=e;return t})();var Ut=[{path:"",component:se},{path:"add",component:oe},{path:"edit/:id",component:ce}];export{Ut as SSCCDETAILS_ROUTES};
