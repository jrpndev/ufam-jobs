import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Enterprise } from 'src/app/models/enterprises.model';
import { User } from 'src/app/models/user.model';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {

  currentDescription : string = '';
  enterpriseUrl = 'http://localhost:3001/enterprises';
  userUrl = 'http://localhost:3001/users';

  selectedOption: string = 'Opção 1';
  linkedinLink: string = '';
  githubLink: string = '';

  user: User = {
    firstName: '',
    surname: '',
    mat: '',
    date: null,
    street: '',
    neigh: '',
    cep: '',
    number: '',
    course: '',
    description: '',
    phone: '',
    cpf: '',
    gender: '',
    email: '',
    password: ''
  };
  
  enterprise: Enterprise = {
    name: '',
    street: '',
    neigh: '',
    number: '',
    description: '',
    phone: '',
    cnpj: '',
    nacionality: '',
    email: '',
    password: ''
  };
  
  // Restante do código
  

  isEnterprise!: boolean;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient, 
    private tools : ToolsService
  ) {}

  getEnterprise(): Observable<Enterprise> {
    const id = this.getById();
    return this.http.get<Enterprise>(`${this.enterpriseUrl}/${id}`);
  }
  
  getUser(): Observable<User> {
    const id = this.getById();
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }
  
  async ngOnInit(): Promise<void> {
    this.isEnterprise = this.getByUserType() === 'enterprise';
    if (this.isEnterprise) {
      this.getEnterprise().subscribe(res => {
        this.enterprise = res;
        this.currentDescription = this.enterprise.description;
      });
    } else {
      this.getUser().subscribe(res => {
        this.user = res;
        this.currentDescription = this.user.description;
      });
    }
  }
  

  getByUserType(): string {
    let user = '';
    this.route.paramMap.subscribe(params => {
      user = params.get('userType') || '';
    });
    return user;
  }

  async updateDescription() {
    const id = this.getById();
  
    if (this.isEnterprise) {
      const updatedEnterprise = { description: this.currentDescription };
      try {
        await this.http.patch(`${this.enterpriseUrl}/${id}`, updatedEnterprise).toPromise();
        this.tools.showAlert('Descrição da empresa atualizada com sucesso!', 'sucesso');
      } catch (error) {
        this.tools.showAlert('Erro ao atualizar a descrição da empresa:', `${error}`);
      }
    } else {
      const updatedUser = { description: this.currentDescription };
      try {
        await this.http.patch(`${this.userUrl}/${id}`, updatedUser).toPromise();
        this.tools.showAlert('Descrição do usuário atualizada com sucesso!', 'sucesso');
      } catch (error) {
        this.tools.showAlert('Erro ao atualizar a descrição do usuário:', `${error}`);
      }
    }
  }
  
  

  getById(): number {
    let id = 0;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    return id;
  }

  async submitForm() {
    const id = this.getById();
  
    if (this.isEnterprise) {
      try {
        await this.http.put(`${this.enterpriseUrl}/${id}`, this.enterprise).toPromise();
        this
      } catch (error) {
        this.tools.showAlert('Erro ao atualizar dados da empresa:', `${error}`);
      }
    } else {
      try {
        await this.http.put(`${this.userUrl}/${id}`, this.user).toPromise();
        this.tools.showAlert('Dados do usuário atualizados com sucesso!', 'sucesso');
      } catch (error) {
        this.tools.showAlert('Erro ao atualizar dados do usuário:', `${error}`);
      }
    }
  }
  getDescription(): string {
    if (this.isEnterprise) {
      return this.enterprise.description;
    } else {
      return this.user.description;
    }
  }
  
  description = this.getDescription();
  selectOption(option: string) {
    this.selectedOption = option;
  }

  handleFileUpload(event: any) {
    const files: FileList = event.target.files;
    // Resto do código para lidar com os arquivos selecionados
  }

  saveLinks() {
    // Lógica para salvar os links do LinkedIn e do GitHub
  }
}
