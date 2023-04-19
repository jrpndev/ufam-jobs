import { Component } from '@angular/core';
import { MatDateRangePicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user : User = {
    firstName: "",
    surname: "",
    mat: "",
    street: "",
    neigh: "",
    number: "",
    course: "",
    description: "",
    phone: "",
    cpf: "",
    gender: "",
    email: "",
    date: null
  }
  constructor(private route : Router){}
  goBack(){
    this.route.navigate(['login'])
  }
  goHome(){
    this.route.navigate(['/']);
  }
  onDateInput(event : MatDatepickerInputEvent<Date>){
    this.user.date = event.value;
  }
}
