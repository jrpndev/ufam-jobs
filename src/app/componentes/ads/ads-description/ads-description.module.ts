import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsDescriptionComponent } from './ads-description.component';
import { AdsDescriptionRoutingModule } from './ads-description-routing.module'
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdsDescriptionComponent,
  ],
  imports: [
    CommonModule,
    AdsDescriptionRoutingModule,
    MatIconModule 
  ]
})
export class AdsDescriptionModule { }
