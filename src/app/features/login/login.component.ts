import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { User } from 'src/app/models/user.model';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  rememberMe!: boolean;

  students: User[] = [];
  enterprises: Enterprise[] = [];

  constructor(private route: Router, private tools: ToolsService) {}

  ngOnInit(): void {
    this.tools.usersRequest().subscribe(res => {
      this.students = res;
    });

    this.tools.enterpriseRequest().subscribe(res => {
      this.enterprises = res;
    });
  }

  login() {
    const student = this.students.find((a) => a.email === this.user.email && this.user.password == a.password);
    const enterprise = this.enterprises.find((b) => b.cnpj === this.user.email && b.password == this.user.password);
    
    if (student) {
      this.tools.showAlert('Login efetuado', 'sucesso')
      this.route.navigate(['student', student.id]);
    } else if (enterprise) {
      this.route.navigate(['enterprise', enterprise.id]);
      this.tools.showAlert('Login efetuado', 'sucesso')

    } else {
      console.log('Email inválido ou não encontrado');
    }
  }

  register() {
    this.route.navigate(['register']);
  }

  companiesRegister() {
    this.route.navigate(['enterpriseregister']);
  }
}
