import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ToolsService } from 'src/app/services/tools.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  baseUrl = "http://localhost:3001/users"

  user: User = {
    firstName: "",
    surname: "",
    mat: "",
    street: "",
    neigh: "",
    cep: "",
    number: "",
    course: "",
    description: "",
    phone: "",
    cpf: "",
    gender: "",
    email: "",
    date: null,
    password: ''
  }
  constructor(private route: Router, private http: HttpClient, private tools: ToolsService) { }
  goBack() {
    this.route.navigate(['login'])
  }
  goHome() {
    this.route.navigate(['/']);
  }
  onDateInput(event: MatDatepickerInputEvent<Date>) {
    this.user.date = event.value;
  }
  createUser(): void {
    
      this.http.post<User>(this.baseUrl, this.user).subscribe((res) => {
        this.tools.showAlert('Usuário cadastrado com sucesso', 'Sucesso!');
        this.goBack();
      }, err=>{
        this.tools.showAlert('Erro ao cadastrar', 'Erro!');

      });
    
  }
}
