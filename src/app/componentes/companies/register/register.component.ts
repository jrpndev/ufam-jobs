import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { EmailService } from 'src/app/services/send-email.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  enterprise : Enterprise = {
    name: '',
    street: '',
    neigh: '',
    number: '',
    description: '',
    phone: '',
    cnpj: '',
    nacionality: '',
    email: '',
    password: ''
  }
  constructor(private route: Router, private service : EmailService) { }

  authcode = this.service.generateCode();

  goBack() {
    this.route.navigate(['login'])
  }
  goHome() {
    this.route.navigate(['/']);
  }
  sendEmail(){
    this.service.sendEmail("jrui797@gmail.com", "jrui797@gmail.com","UFAM-JOBS", this.enterprise.name, this.service.generateCode());
  }
}
