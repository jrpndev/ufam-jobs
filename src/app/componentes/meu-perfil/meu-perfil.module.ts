import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPerfilComponent } from './meu-perfil.component';
import { MeuPerfilRoutingModule } from './meu-perfil-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    MeuPerfilComponent
  ],
  imports: [
    CommonModule,
    MeuPerfilRoutingModule,
    NavBarModule
  ]
})
export class MeuPerfilModule { }
