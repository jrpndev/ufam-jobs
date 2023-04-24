import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: '', loadChildren : () => import('./componentes/home-page/home-page.module').then(m => m.HomePageModule) }
  ,{path : 'login', loadChildren : ()=>import('./features/login/login.module').then(m=>m.LoginModule)}
  ,{path : 'register', loadChildren : ()=>import('./componentes/register/register.module').then(m=>m.RegisterModule)}
  ,{path: 'enterpriseregister', loadChildren:()=>import('./componentes/companies/register/register.module').then(m=>m.RegisterModule)}
  ,{path: 'ad', loadChildren:()=>import('./componentes/ads/ad/ad.module').then(m=>m.AdModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
