import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsDescriptionComponent } from './ads-description.component';


const routes: Routes = [
  {path:'', component:AdsDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsDescriptionRoutingModule{ }
