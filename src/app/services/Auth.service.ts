import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    
    this.isAuthenticated = true; 
    return true;

  }

  logout(): void {
    this.isAuthenticated = false; // Limpe o estado de autenticação
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
