import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';
import { SolvesService } from 'src/app/services/solves.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  private baseUrl = "http://localhost:3001/ads"

  ads : Ads[] = [];

  filteredAd : Ads[] = [];

  text : string = "";

  constructor(private http : HttpClient, private router : Router, private solve : SolvesService){}

  ngOnInit(): void {
    this.getAds();
  }

  searchContentData(){
    this.filteredAd = this.solve.filterByString(this.text , this.ads);
  }


  currentAd(id ?: number){
    this.router.navigate([`currentad/:${id}`])
  }

  getAds(){
    return this.http.get<Ads[]>(this.baseUrl).subscribe(result=>{
      this.ads = result;
      this.filteredAd = result;
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
