import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Ads } from 'src/app/models/ads.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ToolsService } from 'src/app/services/tools.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  baseUrl: string = 'http://localhost:3001/ads/';

  id: number = 0;
  userType: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private tools : ToolsService
  ) {}

  vacancies: any[] = [];

  ngOnInit(): void {
    this.id = this.getById();
    this.userType = this.getByUserType();
    this.getVacanciesById(this.id);
  }

  getVacanciesById(id: any) {
    this.http.get<Ads[]>(this.baseUrl).subscribe((res) => {
      res.map((a) => {
        if (a.enterpriseId == this.id) {
          a.editMode = false; // Adiciona a propriedade "editMode" com valor inicial "false"
          this.vacancies.push(a);
        }
      });
    });
  }

  items: any[] = [
    {
      name: "A",
      date: "24/04/2023",
      wage: 23233,
      description: "151515",
      number: 123,
      shift: "15",
      id: 1,
      editMode: false
    },
    // Adicione mais itens aqui, se necessário
  ];

  newItem: any = {
    name: '',
    wage: 0,
    description: ''
  };

  showCreateForm: boolean = false;

  toggleEditMode(item: any) {
    item.editMode = !item.editMode;
  }

  editItem(item : any){
    this.http.put(this.baseUrl + item.id, item).subscribe(res=>{
      this.tools.showAlert('Anuncio atualizado', 'sucess')
    }, err =>{
      this.tools.showAlert('Erro ao atualizar', err);
    })
  }

  confirmDeleteItem(item: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        message: 'Deseja realmente excluir o item?',
        item: item
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem(item);
        this.http.delete(this.baseUrl + item.id).subscribe(res=>{
          this.tools.showAlert("vaga deletada", "sucesso")
          
        }, err =>{
          this.tools.showAlert("erro ao deletar", err);
        })
      }
    });
  }

  deleteItem(item: any) {
    const index = this.vacancies.indexOf(item);
    if (index !== -1) {
      this.vacancies.splice(index, 1);
    }
  }

  getByUserType() {
    let user;
    this.route.paramMap.subscribe((params) => {
      user = params.get('userType');
    });
    return user;
  }

  getById() {
    let id = 0;
    this.route.paramMap.subscribe((params) => {
      id = Number(params.get('id'));
    });
    return id;
  }

  toggleCreateForm() {
    this.router.navigate([`ad/${this.userType}/${this.id}`]);
  }
}
