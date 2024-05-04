import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  authService = inject(AuthService);
  router = inject(Router);
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    if (!this.authService.isAuthenticated())
      return true;
    
    void this.router.navigate(['']);
    return false;
  }
}
