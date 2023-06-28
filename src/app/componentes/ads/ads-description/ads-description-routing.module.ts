import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsDescriptionComponent } from './ads-description.component';
import { AuthGuard } from '../../auth-guard/auth-guard.module';


const routes: Routes = [
  {path:'', component:AdsDescriptionComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsDescriptionRoutingModule{ }
