import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   {path: '', loadChildren : () => import('./componentes/home-page/home-page.module').then(m => m.HomePageModule) }
  ,{path : 'login', loadChildren : ()=>import('./features/login/login.module').then(m=>m.LoginModule)}
  ,{path : 'register', loadChildren : ()=>import('./componentes/register/register.module').then(m=>m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
