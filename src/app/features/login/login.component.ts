import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/Auth.service';
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

  constructor(
    private route: Router,
    private tools: ToolsService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.tools.usersRequest().subscribe(res => {
      this.students = res;
    });

    this.tools.enterpriseRequest().subscribe(res => {
      this.enterprises = res;
    });

    // Verificar se o usuário já está autenticado com base na opção "Remember Me"
    const rememberMeStatus = localStorage.getItem('rememberMe');
    if (rememberMeStatus === 'true' && this.auth.isAuthenticatedUser()) {
      this.routeToLoggedInPage();
    }
  }

  login() {
    if (this.user.email === '' || this.user.password === '') {
      this.tools.showAlert('Preencha o e-mail e a senha', 'erro');
      return;
    }

    const student = this.students.find((a) => a.email === this.user.email && this.user.password === a.password);
    const enterprise = this.enterprises.find((b) => b.cnpj === this.user.email && this.user.password === b.password);
    
    if (student) {
      this.tools.showAlert('Login efetuado', 'sucesso');
      this.auth.login();
      this.route.navigate(['student', student.id]);

      // Armazenar no armazenamento local se o usuário foi autenticado e a opção "Remember Me" foi marcada
      if (this.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
    } else if (enterprise) {
      this.route.navigate(['enterprise', enterprise.id]);
      this.tools.showAlert('Login efetuado', 'sucesso');

      // Armazenar no armazenamento local se o usuário foi autenticado e a opção "Remember Me" foi marcada
      if (this.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }
    } else {
      this.tools.showAlert('Login incorreto', 'erro');
    }
  }

  register() {
    this.route.navigate(['register']);
  }

  companiesRegister() {
    this.route.navigate(['enterpriseregister']);
  }

  routeToLoggedInPage() {
    // Roteie para a página apropriada se o usuário já estiver autenticado
    this.route.navigate(['...']);
  }
}
