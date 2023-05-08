import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsDescriptionComponent } from './ads-description.component';
import { AdsDescriptionRoutingModule } from './ads-description-routing.module'


@NgModule({
  declarations: [
    AdsDescriptionComponent,
  ],
  imports: [
    CommonModule,
    AdsDescriptionRoutingModule
  ]
})
export class AdsDescriptionModule { }
