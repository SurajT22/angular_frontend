import { Routes } from '@angular/router';
import { NoAccessPageComponent } from './open-pages/no-access-page/no-access-page.component';
import { PageNotFoundComponent } from './open-pages/page-not-found/page-not-found.component';
import { LoginComponent } from './open-pages/login/login.component';
import { layoutRoutes } from './auth-pages/layout/layout.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth-pages/layout/layout.component').then(
        (c) => c.LayoutComponent,
      ),
    children: layoutRoutes,
  },
  { path: 'login', component: LoginComponent },
  { path: '401', component: NoAccessPageComponent },
  { path: '**', component: PageNotFoundComponent },
];
