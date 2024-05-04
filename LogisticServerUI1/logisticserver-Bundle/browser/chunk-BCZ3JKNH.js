import{a as j}from"./chunk-LBMSMXO3.js";import"./chunk-EKYQSE3Q.js";import{a as q}from"./chunk-IL3CHBM2.js";import"./chunk-TF5BNQMD.js";import"./chunk-X4CEJGGW.js";import{a as P}from"./chunk-IKTMDLYG.js";import"./chunk-XWJPI5P5.js";import{a as w}from"./chunk-DD65RJ7C.js";import{a as L}from"./chunk-XX5VUOZJ.js";import{a as T}from"./chunk-TJBFEVGI.js";import{Aa as n,Ba as b,Bb as _,F as S,Ga as m,Hb as Y,J as k,N as d,Na as u,O as v,Sa as f,Ta as x,Wb as U,X as I,Xb as y,dc as C,ec as B,ga as p,gc as F,la as h,na as s,qc as D,r as g,rb as $,tc as H,vc as N,za as i}from"./chunk-BSMU7QB4.js";var R=class{};var V=(()=>{let e=class e{constructor(){this.api=d(N),this.baseUrl="KevinWebService"}getSystemSettings(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetSystemSettings`)}backupDatabase(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_BackupDatabase`)}restoreDatabase(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_RestoreDatabase`)}backupConfiguration(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_BackupConfiguration`)}restoreConfiguration(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_RestoreConfiguration`)}getAutoBackupSettings(){return this.api.get(`${this.baseUrl}/webapi_SystemSettings_GetAutoBackupSettings`)}updateSystemSettings(t){return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateSystemSettings`,t)}updateAutoBackupSettings(t){return this.api.put(`${this.baseUrl}/webapi_SystemSettings_UpdateAutoBackupSettings`,t)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();var A=(()=>{let e=class e{constructor(){this.loaderService=d(U),this.alertService=d(H),this.apiSystemSettingsService=d(V)}getSystemSetting(){return this.loaderService.show(),this.apiSystemSettingsService.getSystemSettings().pipe(g(t=>t))}updateSystemSetting(t){return this.loaderService.show(),this.apiSystemSettingsService.updateSystemSettings(t).pipe(g(o=>{this.alertService.success(o)}))}getAutoBackupSetting(){return this.loaderService.show(),this.apiSystemSettingsService.getAutoBackupSettings().pipe(g(t=>t))}updateAutoBackupSetting(t){return this.loaderService.show(),this.apiSystemSettingsService.updateAutoBackupSettings(t).pipe(g(o=>{this.alertService.success(o)}))}backupDatabase(){return this.loaderService.show(),this.apiSystemSettingsService.backupDatabase().pipe(g(t=>{this.alertService.success(t)}))}restorDatabase(){return this.loaderService.show(),this.apiSystemSettingsService.restoreDatabase().pipe(g(t=>{this.alertService.success(t)}))}backupConfiguration(){return this.loaderService.show(),this.apiSystemSettingsService.backupConfiguration().pipe(g(t=>{this.alertService.success(t)}))}restoreConfiguration(){return this.loaderService.show(),this.apiSystemSettingsService.restoreConfiguration().pipe(g(t=>{this.alertService.success(t)}))}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let a=e;return a})();var G=(()=>{let e=class e extends y{constructor(){super(),this.activatedRoute=d(_),this.systemSettingService=d(A),this.reportFormatList=["HTML","PDF","XML"],this.reportViewList=["Table","Tree"],this.dateFormatList=["YYYY-MM-DD HH:MM:SS","DD-MM-YYYY HH:MM:SS"],this.errorLogList=["Disable","Error","All"],this.systemsetting=new R,this.systemsetting.ErrorLog="Disable"}ngOnInit(){this.getSystemSetting()}getSystemSetting(){this.systemSettingService.getSystemSetting().pipe(S(this.destroy$)).subscribe(t=>{this.systemsetting=t})}onBtnClick(){this.updateSystemSetting()}updateSystemSetting(){this.systemSettingService.updateSystemSetting(this.systemsetting).pipe(S(this.destroy$)).subscribe(()=>{})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=v({type:e,selectors:[["app-form-system-setting"]],standalone:!0,features:[h,f],decls:38,vars:17,consts:[[1,"form-layout-input"],["systemsettingForm","ngForm"],[1,""],[1,"form-fieldset"],[1,"row"],[1,"col-12","col-md-6","col-lg-6","col-sm-6"],[1,"field"],[1,"text-danger","text-bold"],[1,"col-12",3,"items","required","value","clearable","valueChange"],[1,"col-12","col-md-4","col-lg-4","col-sm-4"],[1,"form-header","pb-0","mt-1","mb-0","border-bottom-0","border-top","border-color-gray"],[1,"form-header-inner",2,"justify-content","flex-end"],[1,"right"],[3,"btnLabel","btnClick"]],template:function(o,r){o&1&&(i(0,"div",0)(1,"form",null,1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"label"),u(9," Report Format "),i(10,"span",7),u(11," * "),n()(),i(12,"app-ng-select",8),m("valueChange",function(l){return r.systemsetting.ReportFormat=l}),n()()(),i(13,"div",5)(14,"div",6)(15,"label"),u(16," Report View "),i(17,"span",7),u(18," * "),n()(),i(19,"app-ng-select",8),m("valueChange",function(l){return r.systemsetting.ReportView=l}),n()()(),i(20,"div",5)(21,"div",6)(22,"label"),u(23," Date Format "),i(24,"span",7),u(25," * "),n()(),i(26,"app-ng-select",8),m("valueChange",function(l){return r.systemsetting.DateFormat=l}),n()()(),i(27,"div",9)(28,"div",6)(29,"label"),u(30," Report Format "),i(31,"span",7),u(32," * "),n()(),i(33,"app-ng-select",8),m("valueChange",function(l){return r.systemsetting.ErrorLog=l}),n()()(),i(34,"div",10)(35,"div",11)(36,"div",12)(37,"app-form-btn-pr",13),m("btnClick",function(){return r.onBtnClick()}),n()()()()()()()()()),o&2&&(p(12),s("items",r.reportFormatList)("required",!0)("value",r.systemsetting.ReportFormat)("clearable",!1),p(7),s("items",r.reportViewList)("required",!0)("value",r.systemsetting.ReportView)("clearable",!1),p(7),s("items",r.dateFormatList)("required",!0)("value",r.systemsetting.DateFormat)("clearable",!1),p(7),s("items",r.errorLogList)("required",!0)("value",r.systemsetting.ErrorLog)("clearable",!1),p(4),s("btnLabel","Save"))},dependencies:[Y,D,F,C,B,L,w]});let a=e;return a})();var W=()=>["backup&restore"],O=(()=>{let e=class e extends y{};e.\u0275fac=(()=>{let t;return function(r){return(t||(t=I(e)))(r||e)}})(),e.\u0275cmp=v({type:e,selectors:[["app-system-setting"]],standalone:!0,features:[h,f],decls:2,vars:5,consts:[[3,"headerLabel","btnLink","btnLabel","btnVisible"]],template:function(o,r){o&1&&b(0,"app-page-header",0)(1,"app-form-system-setting"),o&2&&s("headerLabel","System Settings")("btnLink",x(4,W))("btnLabel","Backup & Restore")("btnVisible",!0)},dependencies:[T,G]});let a=e;return a})();var M=class{};var z=(()=>{let e=class e extends y{constructor(){super(),this.activatedRoute=d(_),this.systemSettingService=d(A),this.datePipe=d($),this.durationList=["Daily","Monthly","Yearly"],this.autobackupsetting=new M}ngOnInit(){this.getAutoBackupSettings()}getAutoBackupSettings(){this.systemSettingService.getAutoBackupSetting().pipe(S(this.destroy$)).subscribe(t=>{this.autobackupsetting=t})}onBtnClick(){this.updateAutoBackupSetting()}updateAutoBackupSetting(){this.autobackupsetting.ScheduledTime=this.autobackupsetting.ScheduledTime instanceof Date?this.datePipe.transform(this.autobackupsetting.ScheduledTime,"HH:mm:ss.SSS dd-MM-yyyy"):this.autobackupsetting.ScheduledTime,this.systemSettingService.updateAutoBackupSetting(this.autobackupsetting).pipe(S(this.destroy$)).subscribe(()=>{})}onBackupDatabase(){this.systemSettingService.backupDatabase().pipe(S(this.destroy$)).subscribe(()=>{})}onRestoreDatabase(){this.systemSettingService.restorDatabase().pipe(S(this.destroy$)).subscribe(()=>{})}onBackupConfiguration(){this.systemSettingService.backupConfiguration().pipe(S(this.destroy$)).subscribe(()=>{})}onRestoreConfiguration(){this.systemSettingService.restoreConfiguration().pipe(S(this.destroy$)).subscribe(()=>{})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=v({type:e,selectors:[["app-backup-restore"]],standalone:!0,features:[h,f],decls:70,vars:19,consts:[[3,"headerLabel"],[1,"row","mt-2"],[1,"col-12","col-md-6","col-lg-6","col-sm-6"],[1,"form-layout-input"],["backuprestoreForm","ngForm"],[1,"form-outer"],[1,"form-fieldset"],[1,"row"],[1,"col-sm-6"],[1,"mb-2",2,"font-size","13px","color","#4A4A4A"],[1,"card","text-center"],[1,"card-body"],[1,"mdi","mdi-progress-download","mdi-48px"],[3,"btnLabel","btnClick"],[1,"mdi","mdi-database-import","mdi-48px"],[1,"mdi","mdi-file-restore","mdi-48px"],[1,"mdi","mdi-file-replace","mdi-48px"],[1,"col-12","col-md-6","col-lg-6","col-sm-6","mt-4"],[1,"field"],[3,"label","value","valueChange"],[1,"col-12",3,"required","clearable","items","value","valueChange"],[3,"required","withTimepicker","displayDateFormat","label","value","valueChange"]],template:function(o,r){o&1&&(b(0,"app-page-header",0),i(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",null,4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"h6",9),u(11,"Database"),n()()(),i(12,"div",7)(13,"div",2)(14,"div",10)(15,"div",11),b(16,"div",12),i(17,"app-btn-pr",13),m("btnClick",function(){return r.onRestoreDatabase()}),n()()()(),i(18,"div",2)(19,"div",10)(20,"div",11),b(21,"div",14),i(22,"app-btn-pr",13),m("btnClick",function(){return r.onBackupDatabase()}),n()()()()()()()()()(),i(23,"div",2)(24,"div",3)(25,"form",null,4)(27,"div",5)(28,"div",6)(29,"div",7)(30,"div",8)(31,"h6",9),u(32,"Configuration"),n()()(),i(33,"div",7)(34,"div",2)(35,"div",10)(36,"div",11),b(37,"div",15),i(38,"app-btn-pr",13),m("btnClick",function(){return r.onRestoreConfiguration()}),n()()()(),i(39,"div",2)(40,"div",10)(41,"div",11),b(42,"div",16),i(43,"app-btn-pr",13),m("btnClick",function(){return r.onBackupConfiguration()}),n()()()()()()()()()(),i(44,"div",17)(45,"div",3)(46,"form",null,4)(48,"div",5)(49,"div",6)(50,"div",7)(51,"div",8)(52,"h6",9),u(53,"Atuo Backup"),n()()(),i(54,"div",7)(55,"div",2)(56,"div",18)(57,"app-checkbox",19),m("valueChange",function(l){return r.autobackupsetting.AutoBackup=l}),n()()(),i(58,"div",2)(59,"div",18)(60,"app-checkbox",19),m("valueChange",function(l){return r.autobackupsetting.IncrementalBackup=l}),n()()()(),i(61,"div",7)(62,"div",2)(63,"div",18)(64,"label"),u(65," Duration of Backup "),n(),i(66,"app-ng-select",20),m("valueChange",function(l){return r.autobackupsetting.DurationOfBackup=l}),n()()(),i(67,"div",2)(68,"app-date",21),m("valueChange",function(l){return r.autobackupsetting.ScheduledTime=l}),n()()(),i(69,"app-form-btn-pr",13),m("btnClick",function(){return r.onBtnClick()}),n()()()()()()()),o&2&&(s("headerLabel","SYSTEM SETTING"),p(17),s("btnLabel","Data Restore"),p(5),s("btnLabel","Data Backup"),p(16),s("btnLabel","File Restore"),p(5),s("btnLabel","File Backup"),p(14),s("label","Auto Backup")("value",r.autobackupsetting.AutoBackup),p(3),s("label","Incremental Backup")("value",r.autobackupsetting.IncrementalBackup),p(6),s("required",!0)("clearable",!1)("items",r.durationList)("value",r.autobackupsetting.DurationOfBackup),p(2),s("required",!0)("withTimepicker",!0)("displayDateFormat","HH:mm:ss.SSS DD-MM-YYYY")("label","Scheduled Time")("value",r.autobackupsetting.ScheduledTime),p(1),s("btnLabel","Save"))},dependencies:[D,F,C,B,w,T,j,L,P,q]});let a=e;return a})();var Qe=[{path:"",component:O},{path:"backup&restore",component:z}];export{Qe as SYSSETTINGS_ROUTES};