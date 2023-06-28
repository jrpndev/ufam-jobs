import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdComponent } from './ad.component';
import { AuthGuard } from '../../auth-guard/auth-guard.module';

const routes: Routes = [
  {path:'', component:AdComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule { }
