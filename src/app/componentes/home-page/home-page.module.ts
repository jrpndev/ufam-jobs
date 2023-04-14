import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    NavBarModule,
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
