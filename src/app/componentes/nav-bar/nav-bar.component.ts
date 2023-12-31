import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isEnterprise!: boolean;
  id: number = 0;
  userType: string = '';

  constructor(private tools: ToolsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userType = this.getByUserType();
    this.isEnterprise = this.userType === 'enterprise';

    this.id = this.getById();
  }

  homepage() {
    this.router.navigate([`${this.userType}/${this.id}`]);
  }

  logout() {
    this.tools.loginpath();
  }

  profile() {
    this.router.navigate([`profile/${this.userType}/${this.id}`]);
  }

  config() {
    this.router.navigate([`config/${this.userType}/${this.id}`]);
  }

  dashboard() {
    this.router.navigate([`dashboard/${this.userType}/${this.id}`]);
  }

  vacancies() {
    this.router.navigate([`vacancies/${this.userType}/${this.id}`]);
  }

  getById(): number {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  getByUserType(): any {
    let data;
    this.route.paramMap.subscribe((params) => {
      data = params.get('userType');
    });
    return data;
  }
}
