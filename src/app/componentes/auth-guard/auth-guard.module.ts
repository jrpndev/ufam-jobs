import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth-guard.component';

@NgModule({
  providers: [AuthGuard],
  imports: [CommonModule]
})
export class AuthGuardModule { }
export { AuthGuard };

