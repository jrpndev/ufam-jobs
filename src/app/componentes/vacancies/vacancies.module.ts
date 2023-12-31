import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacanciesComponent } from './vacancies.component';
import { MinhasVagasRoutingModule } from './vacancies-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Importe o módulo MatProgressBarModule

@NgModule({
  declarations: [
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    MinhasVagasRoutingModule,
    NavBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule // Adicione o módulo MatProgressBarModule aqui
  ]
})
export class VacanciesModule { }
