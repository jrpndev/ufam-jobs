import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;

  constructor() { }

  login() {
    this.isAuthenticated = true;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('rememberMe'); 
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
