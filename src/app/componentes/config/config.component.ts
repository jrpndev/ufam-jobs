import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { User } from 'src/app/models/user.model';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  configForm!: FormGroup;
  showChangePassword: boolean = false;

  constructor(private tools: ToolsService, private route : ActivatedRoute, private http : HttpClient) {}

  enterpriseUrl = 'http://localhost:3001/enterprises';
  userUrl = 'http://localhost:3001/users';

  ngOnInit(): void {
    this.configForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  }

  logout() {
    this.tools.loginpath();
  }

  openChangePassword() {
    this.showChangePassword = true;
  }

  cancelChangePassword() {
    this.showChangePassword = false;
    this.configForm.reset();
  }

  async changePassword() {
    if (this.configForm.valid) {
      const currentPassword = this.configForm.value.currentPassword;
      const newPassword = this.configForm.value.newPassword;
      const confirmPassword = this.configForm.value.confirmPassword;

      const userType = this.getByUserType();
      const id = this.getById();
      
      try {
        if (userType === 'enterprise') {
          const enterprise = await this.getEnterprise(id);
          if (enterprise) {
            enterprise.password = newPassword;
            await this.updateEnterprise(enterprise);
          }
        } else if (userType === 'user') {
          const user = await this.getUser(id);
          if (user) {
            user.password = newPassword;
            await this.updateUser(user);
          }
        }
        
        this.tools.showAlert('Senha alterada com sucesso!', 'sucesso');
        this.cancelChangePassword();
      } catch (error) {
        // Lidar com erros de requisição
        this.tools.showAlert('Ocorreu um erro ao alterar a senha. Por favor, tente novamente.', 'erro');
      }
    }
  }

  getByUserType(): string {
    let user = '';
    this.route.paramMap.subscribe((params) => {
      user = params.get('userType') || '';
    });
    return user;
  }

  getById(): number {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  async getEnterprise(id: number): Promise<any> {
    try {
      const res = await this.http.get<Enterprise>(`${this.enterpriseUrl}/${id}`).toPromise();
      return res;
      console.log(res?.password)
    } catch (error) {
      // Lidar com erros de requisição
      return null;
    }
  }

  async updateEnterprise(enterprise: Enterprise): Promise<void> {
    try {
      await this.http.put(`${this.enterpriseUrl}/${enterprise.id}`, enterprise).toPromise();
      
    } catch (error) {
      // Lidar com erros de requisição
    }
  }

  async getUser(id: number): Promise<any> {
    try {
      const res = await this.http.get<User>(`${this.userUrl}/${id}`).toPromise();
      
      return res;
    } catch (error) {
      // Lidar com erros de requisição
      return null;
    }
  }

  async updateUser(user: User): Promise<void> {
    try {
      await this.http.put(`${this.userUrl}/${user.id}`, user).toPromise();
    } catch (error) {
      // Lidar com erros de requisição
    }
  }
}
