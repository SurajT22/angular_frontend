import{Aa as c,Ca as Y,Da as K,Fa as A,Ga as P,Ha as p,J as V,K as z,Ma as m,N as O,Na as d,O as D,Oa as v,P as H,Pa as I,Q as G,Qa as X,R as E,S as j,Sa as J,T as x,U as b,Ya as B,_a as M,ga as s,ha as T,ia as q,ja as _,lb as Q,ma as W,mb as Z,na as u,pa as k,sb as ee,ta as C,tb as te,uc as ne,vc as ie,za as l}from"./chunk-BSMU7QB4.js";function le(i,n){if(i&1){let e=A();l(0,"a",12),P("keyup.enter",function(){x(e),p(3);let a=m(1);return b(a.previous())})("click",function(){x(e),p(3);let a=m(1);return b(a.previous())}),d(1),l(2,"span",13),d(3),c()()}if(i&2){let e=p(3);s(1),I(" ",e.previousLabel," "),s(2),v(e.screenReaderPageLabel)}}function pe(i,n){if(i&1&&(l(0,"span",14),d(1),l(2,"span",13),d(3),c()()),i&2){let e=p(3);s(1),I(" ",e.previousLabel," "),s(2),v(e.screenReaderPageLabel)}}function ge(i,n){if(i&1&&(l(0,"li",9),C(1,le,4,2,"a",10)(2,pe,4,2,"span",11),c()),i&2){p(2);let e=m(1);k("disabled",e.isFirstPage()),s(1),u("ngIf",1<e.getCurrent()),s(1),u("ngIf",e.isFirstPage())}}function ce(i,n){if(i&1){let e=A();l(0,"a",12),P("keyup.enter",function(){x(e);let a=p().$implicit;p(2);let r=m(1);return b(r.setCurrent(a.value))})("click",function(){x(e);let a=p().$implicit;p(2);let r=m(1);return b(r.setCurrent(a.value))}),l(1,"span",13),d(2),c(),l(3,"span"),d(4),B(5,"number"),c()()}if(i&2){let e=p().$implicit,t=p(2);s(2),I("",t.screenReaderPageLabel," "),s(2),v(e.label==="..."?e.label:M(5,2,e.label,""))}}function ue(i,n){if(i&1&&(Y(0),l(1,"span",16)(2,"span",13),d(3),c(),l(4,"span"),d(5),B(6,"number"),c()(),K()),i&2){let e=p().$implicit,t=p(2);s(3),I("",t.screenReaderCurrentLabel," "),s(2),v(e.label==="..."?e.label:M(6,2,e.label,""))}}function de(i,n){if(i&1&&(l(0,"li"),C(1,ce,6,5,"a",10)(2,ue,7,5,"ng-container",15),c()),i&2){let e=n.$implicit;p(2);let t=m(1);k("current",t.getCurrent()===e.value)("ellipsis",e.label==="..."),s(1),u("ngIf",t.getCurrent()!==e.value),s(1),u("ngIf",t.getCurrent()===e.value)}}function me(i,n){if(i&1){let e=A();l(0,"a",12),P("keyup.enter",function(){x(e),p(3);let a=m(1);return b(a.next())})("click",function(){x(e),p(3);let a=m(1);return b(a.next())}),d(1),l(2,"span",13),d(3),c()()}if(i&2){let e=p(3);s(1),I(" ",e.nextLabel," "),s(2),v(e.screenReaderPageLabel)}}function he(i,n){if(i&1&&(l(0,"span",14),d(1),l(2,"span",13),d(3),c()()),i&2){let e=p(3);s(1),I(" ",e.nextLabel," "),s(2),v(e.screenReaderPageLabel)}}function fe(i,n){if(i&1&&(l(0,"li",17),C(1,me,4,2,"a",10)(2,he,4,2,"span",11),c()),i&2){p(2);let e=m(1);k("disabled",e.isLastPage()),s(1),u("ngIf",!e.isLastPage()),s(1),u("ngIf",e.isLastPage())}}function _e(i,n){if(i&1&&(l(0,"ul",4),C(1,ge,3,4,"li",5),l(2,"li",6),d(3),c(),C(4,de,3,6,"li",7)(5,fe,3,4,"li",8),c()),i&2){let e=p(),t=m(1);k("responsive",e.responsive),s(1),u("ngIf",e.directionLinks),s(2),X(" ",t.getCurrent()," / ",t.getLastPage()," "),s(1),u("ngForOf",t.pages)("ngForTrackBy",e.trackByIndex),s(1),u("ngIf",e.directionLinks)}}var w=class{constructor(){this.change=new _,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(n){return n.id==null&&(n.id=this.DEFAULT_ID),this.instances[n.id]?this.updateInstance(n):(this.instances[n.id]=n,!0)}updateInstance(n){let e=!1;for(let t in this.instances[n.id])n[t]!==this.instances[n.id][t]&&(this.instances[n.id][t]=n[t],e=!0);return e}getCurrentPage(n){return this.instances[n]?this.instances[n].currentPage:1}setCurrentPage(n,e){if(this.instances[n]){let t=this.instances[n],a=Math.ceil(t.totalItems/t.itemsPerPage);e<=a&&1<=e&&(this.instances[n].currentPage=e,this.change.emit(n))}}setTotalItems(n,e){this.instances[n]&&0<=e&&(this.instances[n].totalItems=e,this.change.emit(n))}setItemsPerPage(n,e){this.instances[n]&&(this.instances[n].itemsPerPage=e,this.change.emit(n))}getInstance(n=this.DEFAULT_ID){return this.instances[n]?this.clone(this.instances[n]):{}}clone(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}},xe=Number.MAX_SAFE_INTEGER,Te=(()=>{class i{constructor(e){this.service=e,this.state={}}transform(e,t){if(!(e instanceof Array)){let L=t.id||this.service.defaultId();return this.state[L]?this.state[L].slice:e}let a=t.totalItems&&t.totalItems!==e.length,r=this.createInstance(e,t),o=r.id,g,h,f=r.itemsPerPage,S=this.service.register(r);if(!a&&e instanceof Array){if(f=+f||xe,g=(r.currentPage-1)*f,h=g+f,this.stateIsIdentical(o,e,g,h))return this.state[o].slice;{let R=e.slice(g,h);return this.saveState(o,e,R,g,h),this.service.change.emit(o),R}}else return S&&this.service.change.emit(o),this.saveState(o,e,e,g,h),e}createInstance(e,t){return this.checkConfig(t),{id:t.id!=null?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}}checkConfig(e){let a=["itemsPerPage","currentPage"].filter(r=>!(r in e));if(0<a.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${a.join(", ")}`)}saveState(e,t,a,r,o){this.state[e]={collection:t,size:t.length,slice:a,start:r,end:o}}stateIsIdentical(e,t,a,r){let o=this.state[e];return!o||!(o.size===t.length&&o.start===a&&o.end===r)?!1:o.slice.every((h,f)=>h===t[a+f])}}return i.\u0275fac=function(e){return new(e||i)(T(w,16))},i.\u0275pipe=E({name:"paginate",type:i,pure:!1}),i})();var be=(()=>{class i{constructor(e,t){this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new _,this.pageBoundsCorrection=new _,this.pages=[],this.changeSub=this.service.change.subscribe(a=>{this.id===a&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(e){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(e){this.pageChange.emit(e)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let e=this.service.getInstance(this.id),t=this.outOfBoundCorrection(e);t!==e.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(t),this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}):this.pages=this.createPageArray(e.currentPage,e.itemsPerPage,e.totalItems,this.maxSize)}outOfBoundCorrection(e){let t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage}createPageArray(e,t,a,r){r=+r;let o=[],g=Math.max(Math.ceil(a/t),1),h=Math.ceil(r/2),f=e<=h,S=g-h<e,L=!f&&!S,R=r<g,y=1;for(;y<=g&&y<=r;){let F,U=this.calculatePageNumber(y,e,r,g),se=y===2&&(L||S),oe=y===r-1&&(L||f);R&&(se||oe)?F="...":F=U,o.push({label:F,value:U}),y++}return o}calculatePageNumber(e,t,a,r){let o=Math.ceil(a/2);return e===a?r:e===1?e:a<r?r-o<t?r-a+e:o<t?t-o+e:e:e}}return i.\u0275fac=function(e){return new(e||i)(T(w),T(q))},i.\u0275dir=G({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[j]}),i})();function $(i){return!!i&&i!=="false"}var ae=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new _,this.pageBoundsCorrection=new _,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(e){this._directionLinks=$(e)}get autoHide(){return this._autoHide}set autoHide(e){this._autoHide=$(e)}get responsive(){return this._responsive}set responsive(e){this._responsive=$(e)}trackByIndex(e){return e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=D({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(e,t){if(e&1&&(l(0,"pagination-template",0,1),P("pageChange",function(r){return t.pageChange.emit(r)})("pageBoundsCorrection",function(r){return t.pageBoundsCorrection.emit(r)}),l(2,"nav",2),C(3,_e,6,8,"ul",3),c()()),e&2){let a=m(1);u("id",t.id)("maxSize",t.maxSize),s(2),W("aria-label",t.screenReaderPaginationLabel),s(1),u("ngIf",!(t.autoHide&&a.pages.length<=1))}},dependencies:[be,Z,Q,ee],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),i})(),re=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=H({type:i}),i.\u0275inj=z({providers:[w],imports:[[te]]}),i})();var $e=(()=>{let n=class n{constructor(){this.pageChange=new _}onPageChange(t){this.pageChange.emit(t)}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=D({type:n,selectors:[["app-pagination"]],outputs:{pageChange:"pageChange"},standalone:!0,features:[J],decls:2,vars:5,consts:[[1,"text-end","mb-0"],[3,"directionLinks","autoHide","responsive","previousLabel","nextLabel","pageChange"]],template:function(a,r){a&1&&(l(0,"div",0)(1,"pagination-controls",1),P("pageChange",function(g){return r.onPageChange(g)}),c()()),a&2&&(s(1),u("directionLinks",!0)("autoHide",!0)("responsive",!0)("previousLabel","")("nextLabel",""))},dependencies:[re,ae]});let i=n;return i})();var Ue=(()=>{let n=class n{transform(t,a,r){let o=(t-1)*a+1,g=t*a;return g=g>r?r:g,`${o} - ${g} of ${r}`}};n.\u0275fac=function(a){return new(a||n)},n.\u0275pipe=E({name:"paginationCount",type:n,pure:!0,standalone:!0});let i=n;return i})();var je=(()=>{let n=class n{constructor(){this.api=O(ie),this.baseUrl="KevinWebService"}get exportPath(){return ne?.appSettings?.exportPath}getAuditReportPageData(){return this.api.get(`${this.baseUrl}/webapi_AuditReport_GetAuditReportPage`)}getProductionReportPageData(){return this.api.get(`${this.baseUrl}/webapi_ProductionReport_PageDetails`)}getBatchListFromLine(t){return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetBatchListFromLine?LineNumber=${t}`)}getProductwiseBatchList(t){return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetProductwiseBatchList?ProductName=${t}`)}getPOwiseBatchList(t){return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetPOwiseBatchList?PONumber=${t}`)}getReportSettings(){return this.api.get(`${this.baseUrl}/webapi_ProductionReport_GetReportSettings`)}viewAuditReport(t){return this.api.post(`${this.baseUrl}/webapi_AuditReport_AuditReportData`,t)}exportAuditReport(t){return this.api.post(`${this.baseUrl}/webapi_AuditReport_AuditReportExport`,t)}viewProductionReport(t){return this.api.post(`${this.baseUrl}/webapi_ProductionReport_ProductionReportData`,t)}exportProductionReport(t){return this.api.post(`${this.baseUrl}/webapi_ProductionReport_ExportReport`,t)}updateReportSetting(t){return this.api.put(`${this.baseUrl}/webapi_ProductionReport_SaveReportSettings`,t)}};n.\u0275fac=function(a){return new(a||n)},n.\u0275prov=V({token:n,factory:n.\u0275fac,providedIn:"root"});let i=n;return i})();export{Te as a,re as b,$e as c,Ue as d,je as e};