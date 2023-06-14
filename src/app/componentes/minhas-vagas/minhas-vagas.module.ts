import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhasVagasComponent } from './minhas-vagas.component';
import { MinhasVagasRoutingModule } from './minhas-vagas-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MinhasVagasComponent
  ],
  imports: [
    CommonModule,
    MinhasVagasRoutingModule,
    NavBarModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
  ]
})
export class MinhasVagasModule { }
