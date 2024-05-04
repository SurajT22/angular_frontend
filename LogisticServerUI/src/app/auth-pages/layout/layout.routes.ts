import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: 'registrationaccess',
    loadChildren: () =>
      import('./client-registration/registration-access/registration-access.routes').then((c) => c.REGISTRATIONACCESS_ROUTES),
  },
  {
    path: 'registrationdetails',
    loadChildren: () =>
      import('./client-registration/registration-details/registration-details.routes').then((c) => c.REGISTRATIONDETAILS_ROUTES),
  },
  {
    path: 'useraccount',
    loadChildren: () =>
      import('./user-management/user-account/user-account.routes').then((c) => c.USERACCOUNT_ROUTES),
  },
  {
    path: 'userclientrights',
    loadChildren: () =>
      import('./user-management/user-client-rights/user-client-rights.routes').then((c) => c.USERCLIENTRIGHTS_ROUTES),
  },
  {
    path: 'userserverrights',
    loadChildren: () =>
      import('./user-management/user-server-rights/user-server-rights.routes').then((c) => c.USERSERVERRIGHTS_ROUTES),
  },
  {
    path: 'securitypolicy',
    loadChildren: () =>
      import('./user-management/security-policy/security-policy.routes').then((c) => c.SECURITYPOLICY_ROUTES),
  },
  {
    path: 'productdetials',
    loadChildren: () =>
      import('./product-list/product-list.routes').then((c) => c.PRODUCTLIST_ROUTES),
  },
  {
    path: 'batchdetails',
    loadChildren: () =>
      import('./batch-details/batch-details.routes').then((c) => c.BATCHDETAIL_ROUTES),
  },
  {
    path: 'systemsettings',
    loadChildren: () =>
      import('./settings/system-setting/system-setting.routes').then((c) => c.SYSSETTINGS_ROUTES),
  },
  {
    path: 'moresettings',
    loadChildren: () =>
      import('./settings/more-settings/more-settings.routes').then((c) => c.MORESETTINGS_ROUTES),
  },
  {
    path: 'serversettings',
    loadChildren: () =>
      import('./settings/server-settings/server-settings.routes').then((c) => c.SERVERSETTINGS_ROUTES),
  },
  {
    path: 'auditreport',
    loadChildren: () =>
      import('./report/audit-report/audit-report.routes').then((c) => c.AuditReport_ROUTES),
  },
  {
    path: 'production',
    loadChildren: () =>
      import('./report/production-report/production-report.routes').then((c) => c.ProductionReportComponent_ROUTES),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.routes').then((c) => c.HelpComponent_ROUTES),
  },
  {
    path:'',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((c) => c.DashboardComponent_ROUTES),
  },
  {
    path:'second-dashboard',
    loadChildren: () =>
      import('./dashboard-second/dashboard-second.routes').then((c) => c.DashboardSecondComponent_ROUTES),
  }
];