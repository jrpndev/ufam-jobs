import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdComponent } from './ad.component';

const routes: Routes = [
  {path:'', component:AdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule { }
