import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';

@Component({
  selector: 'app-ads-description',
  templateUrl: './ads-description.component.html',
  styleUrls: ['./ads-description.component.css']
})
export class AdsDescriptionComponent implements OnInit {

  baseUrl = 'http://localhost:3001/ads/';
  currentAd: Ads = {
    name: '',
    date: null,
    wage: 0,
    description: '',
    number: 0,
    shift: '',
    enterpriseId: 0,
    editMode: false
  };

  constructor(private router: ActivatedRoute, private http: HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.currentAd.enterpriseId = this.getById();
  }

  getById() {
    let id  = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  readById(): number {
    let id;
    this.router.paramMap.subscribe(params => {
      id = params.get('id')?.split(':')[1];
    });
    return id ?? 0;
  }

  getAdInformation() {
    const url = this.baseUrl + this.readById();
    this.http.get<Ads>(url).subscribe(res => {
      this.currentAd = res;
    });
  }
  createApplication(){
    
  }
}
