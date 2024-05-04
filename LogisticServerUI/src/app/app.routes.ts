import { Routes, mapToCanActivate, mapToCanActivateChild } from '@angular/router';
import { NoAccessPageComponent } from './open-pages/no-access-page/no-access-page.component';
import { PageNotFoundComponent } from './open-pages/page-not-found/page-not-found.component';
import { LoginComponent } from './open-pages/login/login.component';
import { layoutRoutes } from './auth-pages/layout/layout.routes';
import { LoginGuard } from './core/guard/login.guard';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./auth-pages/layout/layout.component').then(
        (c) => c.LayoutComponent,
      ),
    children: layoutRoutes,
    canActivate: mapToCanActivate([AuthGuard]),
    canActivateChild: mapToCanActivateChild([AuthGuard])
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: mapToCanActivate([LoginGuard])
  },
  { 
    path: '401',
    component: NoAccessPageComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  },
];
