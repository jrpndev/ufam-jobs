import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  id : number = 0;

  userType : any

  constructor(private http : HttpClient, private router : Router, private solve : SolvesService, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.getAds();

    this.id = this.getById();
    this.userType = this.getByUserType();
  }

  searchContentData(){
    this.filteredAd = this.solve.filterByString(this.text , this.ads);
  }
  getByUserType(): string {
    let user = '';
    this.route.paramMap.subscribe(params => {
      user = params.get('userType') || '';
    });
    return user;
  }

  getById(): number {
    let id = 0;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    return id;
  }

  currentAd(id ?: number){
    this.router.navigate([`currentad/${this.userType}/${this.id}/${id}`])
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
