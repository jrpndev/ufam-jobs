import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  private baseUrl = "http://localhost:3001/ads"

  constructor(private http : HttpClient, private router : Router){}
  ngOnInit(): void {
    this.getAds();
  }

  ads : Ads[] = [];
  
  
  getAds(){
    return this.http.get<Ads[]>(this.baseUrl).subscribe(result=>{
      this.ads = result;
      console.log(this.ads)
    })
  }
  writeErr(){
    return this.http.post<any>("http://localhost:4200/logs/logData.json",this.ads).subscribe(err=>console.log(err))
  }
  searchContent(){
  }
  adPath(){
    this.router.navigate(['ad'])
  }
}
