import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  private baseUrl = "https://localhost:3001/ads"

  constructor(private http : HttpClient, private router : Router){}

  ads : Ads[] = [];
  
  itemsPerPage : number = 10;

  data : Ads[] = [];

  updateData(event: any) {
    const indiceInicial = event.pageIndex * event.pageSize;
    const indiceFinal = indiceInicial + event.pageSize;
    this.data = this.ads.slice(indiceInicial, indiceFinal);
  }
  
  getAds = () =>  {
    return this.http.get<Ads[]>(this.baseUrl).subscribe(result=>{
      this.ads = result;
      
    })
  }
  writeErr(){
    return this.http.post<any>("http://localhost:4200/logs/logData.json",this.data).subscribe(err=>console.log(err))
  }
  searchContent(){
  }
  adPath(){
    this.router.navigate(['ad'])
  }
}
