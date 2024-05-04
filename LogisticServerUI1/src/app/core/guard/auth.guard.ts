import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
    providedIn: 'root',
  })
export class AuthGuard {
    router = inject(Router);
    authService = inject(AuthService);

    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isAuthenticated())
            return true;
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
        return this.canActivate(route, state);
      }
}
