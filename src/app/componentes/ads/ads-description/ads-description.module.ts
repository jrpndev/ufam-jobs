import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsDescriptionComponent } from './ads-description.component';
import { AdsDescriptionRoutingModule } from './ads-description-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NavBarModule } from '../../nav-bar/nav-bar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AdsDescriptionComponent,
  ],
  imports: [
    CommonModule,
    AdsDescriptionRoutingModule,
    MatIconModule,
    MatTabsModule,
    NavBarModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AdsDescriptionModule { }
