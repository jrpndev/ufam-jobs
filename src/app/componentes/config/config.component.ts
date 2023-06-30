import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enterprise } from 'src/app/models/enterprises.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/Auth.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  id = this.getById();
  configForm!: FormGroup;
  showChangePassword: boolean = false;
  userType: any;

  constructor(
    private tools: ToolsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router
  ) { }

  enterpriseUrl = 'http://localhost:3001/enterprises';
  userUrl = 'http://localhost:3001/users';

  async updatePassword(id: number, newPassword: string): Promise<void> {
    const url = `${this.getUserApiUrl(id)}/password`;

    try {
      await this.http.patch(url, { password: newPassword }).toPromise();
    } catch (error) {
      // Lidar com erros de requisição
    }
  }

  async ngOnInit(): Promise<void> {
    this.configForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });
  
    try {
      const userType = this.getByUserType();
      const password = await this.getPassword(this.id, userType);
  
      if (password !== null) {
        this.configForm.patchValue({
          currentPassword: password
        });
      } else {
        this.configForm.patchValue({
          currentPassword: '' // Defina um valor padrão para a senha atual quando não estiver disponível
        });
      }
    } catch (error) {
      // Lidar com erros de requisição
    }
  
    this.userType = this.getByUserType();
  }
  
  logout() {
    this.auth.logout();
    this.router.navigate(['']);
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
          if (enterprise !== null) {
            enterprise.password = newPassword;
            await this.updateEnterprise(enterprise);
            await this.updatePassword(id, newPassword);
          }
        } else if (userType === 'user') {
          const user = await this.getUser(id);
          if (user !== null) {
            user.password = newPassword;
            await this.updateUser(user);
            await this.updatePassword(id, newPassword);
          }
        }
        this.tools.showAlert('Senha alterada com sucesso!', 'sucesso');
        location.reload();
      } catch (error) {
        // Lidar com erros de requisição
        this.tools.showAlert(
          'Ocorreu um erro ao alterar a senha. Por favor, tente novamente.',
          'erro'
        );
      }
    }
  }

  getByUserType(): any {
    const userType = this.route.snapshot.paramMap.get('userType');
    return userType;
  }
  getById(): number {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  async getEnterprise(id: number): Promise<Enterprise | null> {
    try {
      const res = await this.http
        .get<Enterprise>(`${this.enterpriseUrl}/${id}`)
        .toPromise();
      return res || null;
    } catch (error) {
      return null;
    }
  }

  async updateEnterprise(enterprise: Enterprise): Promise<void> {
    try {
      await this.http
        .put(`${this.enterpriseUrl}/${enterprise.id}`, enterprise)
        .toPromise();
    } catch (error) {
      // Lidar com erros de requisição
    }
  }

  async getUser(id: number): Promise<User | null> {
    try {
      const res = await this.http
        .get<User>(`${this.userUrl}/${id}`)
        .toPromise();
      return res || null;
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

  getUserApiUrl(id: number): string {
    const userType = this.getByUserType();
    return userType === 'enterprise'
      ? `${this.enterpriseUrl}/${id}`
      : `${this.userUrl}/${id}`;
  }

  async getPassword(id: number, userType: string): Promise<string | null> {
    try {
      if (userType === 'enterprise') {
        const enterprise = await this.getEnterprise(id);
        return enterprise?.password || null;
      } else if (userType === 'student') {
        const user = await this.getUser(id);
        return user?.password || null;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }
}

