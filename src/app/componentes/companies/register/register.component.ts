import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { EmailService } from 'src/app/services/send-email.service';
import { ToolsService } from 'src/app/services/tools.service';

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
  constructor(private route: Router, private service : EmailService, private tools : ToolsService) { }

  authcode = this.service.generateCode();

  goBack() {
    this.route.navigate(['login'])
  }
  goHome() {
    this.route.navigate(['/']);
  }
  enterpriseRegister(){
    this.tools.createEnterprise(this.enterprise).subscribe(res=>{
      console.log(res)
    })
  }
}
