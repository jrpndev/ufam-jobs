import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Ads } from 'src/app/models/ads.model';
import { ToolsService } from 'src/app/services/tools.service';
@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css'],
  providers: [DatePipe]
})
export class AdComponent {

  baseUrl = 'http://localhost:3001/ads'

  currentDate: Date = new Date();


  constructor(private http: HttpClient, private tools: ToolsService, private datePipe: DatePipe) {
  }
  formattedDate = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');

  ad: Ads = {
    name: '',
    date: this.formattedDate,
    wage: 0,
    description: '',
    number: 0,
    shift: ''
  }

  createAd(): void {
    if (this.tools.validateInputs(this.ad)) {
      this.http.post<Ads>(this.baseUrl, this.ad).subscribe(() => {
        this.tools.showAlert('Anuncio cadastrado com sucesso', 'Sucesso!');
      });
    } else {
      this.tools.showAlert('Há campos a serem preenchidos', 'Erro!');
    }
  }
}
