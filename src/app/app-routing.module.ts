import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: ':userType/:id', loadChildren : () => import('./componentes/home-page/home-page.module').then(m => m.HomePageModule) }
  ,{path: 'dashboard/:userType/:id', loadChildren : () => import('./componentes/companies/dashboard/dashboard.module').then(m => m.DashboardModule) }
  ,{path : 'login', loadChildren : ()=>import('./features/login/login.module').then(m=>m.LoginModule)}
  ,{path : 'register', loadChildren : ()=>import('./componentes/register/register.module').then(m=>m.RegisterModule)}
  ,{path: 'enterpriseregister', loadChildren:()=>import('./componentes/companies/register/register.module').then(m=>m.RegisterModule)}
  ,{path: 'ad/:userType/:id', loadChildren:()=>import('./componentes/ads/ad/ad.module').then(m=>m.AdModule)}
  ,{path:'currentad/:userType/:id/:currentAdId', loadChildren:()=>import('./componentes/ads/ads-description/ads-description.module').then(m=>m.AdsDescriptionModule)}
  ,{path:'vacancies/:userType/:id', loadChildren:()=>import('./componentes/vacancies/vacancies.module').then(m=>m.VacanciesModule)}
  ,{path:'profile/:userType/:id', loadChildren:()=>import('./componentes/meu-perfil/meu-perfil.module').then(m=>m.MeuPerfilModule)}
  ,{path:'config/:userType/:id', loadChildren:()=>import('./componentes/config/config.module').then(m=>m.ConfigModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
