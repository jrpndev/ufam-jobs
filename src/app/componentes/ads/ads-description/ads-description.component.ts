import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';
import { Enterprise } from 'src/app/models/enterprises.model';
import { ToolsService } from 'src/app/services/tools.service';

interface User {
  firstName: any;
  id: number;
  name: string;
}

@Component({
  selector: 'app-ads-description',
  templateUrl: './ads-description.component.html',
  styleUrls: ['./ads-description.component.css']
})
export class AdsDescriptionComponent implements OnInit {

  id: number = 0;
  adId: number = 0;

  baseUrl = 'http://localhost:3001/ads/';
  enterpriseUrl = 'http://localhost:3001/enterprises/';
  userUrl = 'http://localhost:3001/users';
  appUrl = 'http://localhost:3001/applications/';

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

  currentEnterprise: Enterprise = {
    id: 0,
    name: '',
    description: '',
    street: '',
    neigh: '',
    number: '',
    phone: '',
    cnpj: '',
    nacionality: '',
    email: '',
    password: ''
  };

  constructor(private router: ActivatedRoute, private http: HttpClient, private tools: ToolsService) { }

  ngOnInit(): void {
    this.id = this.readById();
    this.adId = this.readByAdId();
    this.getAdInformation();
    this.getEnterpriseById();
  }

  readById(): any {
    let id;
    this.router.paramMap.subscribe(params => {
      id = params.get('id');
    });
    return id;
  }

  readByAdId(): any {
    let id;
    this.router.paramMap.subscribe(params => {
      id = params.get('currentAdId');
    });
    return id;
  }

  getAdInformation() {
    const url = this.baseUrl + this.adId;
    this.http.get<Ads>(url).subscribe(res => {
      this.currentAd = res;
      // Verifica se o enterpriseId é diferente de 0 antes de chamar getEnterpriseById()
      if (this.currentAd.enterpriseId !== 0) {
        this.getEnterpriseById();
      }
    });
  }

  async getEnterpriseById() {
    if (this.currentAd.enterpriseId !== 0) {
      const url = this.enterpriseUrl + this.currentAd.enterpriseId.toString();
      await new Promise<void>(resolve => {
        this.http.get<Enterprise>(url).subscribe(res => {
          this.currentEnterprise = res;
          resolve();
        });
      });
    }
  }

  createApplication() {
    // Obtém o ID do usuário e faz uma solicitação GET para obter os dados do usuário
    const userId = this.id
    const userUrl = `${this.userUrl}/${userId}`;

    this.http.get<User>(userUrl).subscribe(user => {
      // Cria um objeto com os dados da inscrição
      const applicationData = {
        studentId: user.id,
        studentName: user.firstName,
        adId: this.currentAd.id,
        adName: this.currentAd.name,
        enterpriseId: this.currentEnterprise.id
      };

      // Faz uma solicitação POST para criar a inscrição
      this.http.post(this.appUrl, applicationData).subscribe(
        res => {
          // Inscrição criada com sucesso
          this.tools.showAlert('Candidatura enviada', 'Sucesso')
        },
        error => {
          // Ocorreu um erro ao criar a inscrição
          this.tools.showAlert('Erro ao criar inscrição:', error);
        }
      );
    });
  }
}
