import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './componentes/auth-guard/auth-guard.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: ':userType/:id', loadChildren: () => import('./componentes/home-page/home-page.module').then(m => m.HomePageModule), canActivate: [AuthGuard] },
  { path: 'dashboard/:userType/:id', loadChildren: () => import('./componentes/companies/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'register', loadChildren: () => import('./componentes/register/register.module').then(m => m.RegisterModule) },
  { path: 'enterpriseregister', loadChildren: () => import('./componentes/companies/register/register.module').then(m => m.RegisterModule) },
  { path: 'ad/:userType/:id', loadChildren: () => import('./componentes/ads/ad/ad.module').then(m => m.AdModule) },
  { path: 'currentad/:userType/:id/:currentAdId', loadChildren: () => import('./componentes/ads/ads-description/ads-description.module').then(m => m.AdsDescriptionModule) },
  { path: 'vacancies/:userType/:id', loadChildren: () => import('./componentes/vacancies/vacancies.module').then(m => m.VacanciesModule) },
  { path: 'profile/:userType/:id', loadChildren: () => import('./componentes/meu-perfil/meu-perfil.module').then(m => m.MeuPerfilModule), canActivate: [AuthGuard] },
  { path: 'config/:userType/:id', loadChildren: () => import('./componentes/config/config.module').then(m => m.ConfigModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
