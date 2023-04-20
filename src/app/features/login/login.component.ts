import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email : '',
    password : ''
  }

  constructor(private route: Router , private tools : ToolsService) {
  }
  ngOnInit(): void {
  }
  login() {
    this.tools.checkLogin(this.user.email,this.user.password);
  }
  register(){
    this.route.navigate(['register'])
  }
  companiesRegister =()=>{
    this.route.navigate(['enterpriseregister'])
  }
}
