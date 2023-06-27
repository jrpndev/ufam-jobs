import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importe o MatCheckboxModule aqui

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
