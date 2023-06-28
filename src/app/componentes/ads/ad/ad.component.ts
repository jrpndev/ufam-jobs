import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css'],
  providers: [DatePipe]
})
export class AdComponent implements OnInit {
  baseUrl = 'http://localhost:3001/ads';

  currentDate: Date = new Date();
  enterpriseId: any;

  constructor(
    private http: HttpClient,
    private tools: ToolsService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.enterpriseId = this.getById();
  }

  formattedDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');

  getById() {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  getByUserType() {
    let user;
    this.route.paramMap.subscribe((params) => {
      user = params.get('userType');
    });
    return user;
  }

  ad: Ads = {
    name: '',
    date: this.formattedDate,
    wage: 0,
    description: '',
    number: 0,
    shift: '',
    enterpriseId: 0,
    editMode: false
  };

  createAd(): void {
    this.ad.enterpriseId = this.enterpriseId;

    if (this.tools.validateInputs(this.ad)) {
      this.http.post<Ads>(this.baseUrl, this.ad).subscribe(() => {
        this.tools.showAlert('Anúncio cadastrado com sucesso', 'Sucesso!');
        this.router.navigate([`dashboard/enterprise/${this.enterpriseId}`]);
      });
    } else {
      this.tools.showAlert('Há campos a serem preenchidos', 'Erro!');
      console.log(this.ad)
    }
  }

  back() {
    this.router.navigate([`dashboard/enterprise/${this.enterpriseId}`]);
  }
}
