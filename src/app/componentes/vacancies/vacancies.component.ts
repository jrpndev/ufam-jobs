import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
    this.http.get<any[]>(applicationsUrl).subscribe(res => {
      this.applications = res.filter(app => app.studentId == this.studentId);
      console.log('Array de Applications:', this.applications); 
    });
  }
  readById(): any {
    let id;
    this.router.paramMap.subscribe(params => {
      id = params.get('id');
    });
    return id;
  }
}
