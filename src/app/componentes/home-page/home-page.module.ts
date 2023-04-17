import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { HomePageRoutingModule } from './home-page-routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    NavBarModule,
    HomePageRoutingModule,
    MatInputModule,
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomePageModule { }
