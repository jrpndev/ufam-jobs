import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdComponent } from './ad.component';
import { AdRoutingModule } from './ad-routing.module';
import { NavBarModule } from '../../nav-bar/nav-bar.module';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NavBarModule,
    CommonModule,
    AdRoutingModule,
    FormsModule
  ]
})
export class AdModule { }
