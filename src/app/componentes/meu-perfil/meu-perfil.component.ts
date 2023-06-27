import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent {
  userForm: FormGroup;
  selectedOption: string = 'Opção 1';
  linkedinLink: string = '';
  githubLink: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      mat: ['', Validators.required],
      date: [null],
      street: ['', Validators.required],
      neigh: ['', Validators.required],
      cep: ['', Validators.required],
      number: ['', Validators.required],
      course: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.userForm.invalid) {
      return;
    }

    // Lógica para enviar o formulário
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  handleFileUpload(event: any) {
    const files: FileList = event.target.files;
    // Resto do código para lidar com os arquivos selecionados
  }

  saveLinks() {
    // Lógica para salvar os links do LinkedIn e do GitHub
    console.log('LinkedIn:', this.linkedinLink);
    console.log('GitHub:', this.githubLink);
  }

  openLink(link: string) {
    // Lógica para abrir o link em uma nova guia
  }
}
