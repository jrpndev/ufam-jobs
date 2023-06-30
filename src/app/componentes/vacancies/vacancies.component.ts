import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface Application {
  studentId: number;
  adId: number;
  status: string;
}

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  studentId: number = 0;
  applications: any[] = [];

  constructor(private http: HttpClient, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.studentId = this.readById();
    this.getApplications();
  }

  getApplications() {
    const applicationsUrl = 'http://localhost:3001/applications';
    const filterUrl = `${applicationsUrl}?studentId=${this.studentId}`;

    this.http.get<Application[]>(filterUrl).subscribe(res => {
      this.applications = res;
      console.log('Array de Applications:', this.applications); // Verifique o array filtrado
    });
  }

  calculateProgress(status: string): number {
    // Implemente a lógica para calcular o valor da barra de progresso com base no status
    // Retorne o valor correto da barra de progresso

    // Exemplo de lógica simples:
    if (status === 'em andamento') {
      return 50; // 50% de progresso
    } else if (status === 'concluido') {
      return 100; // 100% de progresso
    } else {
      return 0; // 0% de progresso
    }
  }

  readById(): any {
    let id;
    this.router.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    return id;
  }
}
