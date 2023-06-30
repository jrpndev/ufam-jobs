import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser() || this.isRememberedUser()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

  isRememberedUser(): boolean {
    const rememberMeStatus = localStorage.getItem('rememberMe');
    return rememberMeStatus === 'true';
  }
}
