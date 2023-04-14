import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  private errorUrl = "https://httpstat.us/500"
  constructor(private http : HttpClient){}

  data = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };
  error = () =>  {
    return this.http.get(this.errorUrl).subscribe(err=>console.log(err))
  }
  writeErr(){
    return this.http.post<any>("http://localhost:4200/logs/logData.json",this.data).subscribe(err=>console.log(err))
  }
}
