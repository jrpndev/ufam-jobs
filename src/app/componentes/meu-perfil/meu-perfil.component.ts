import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent {
  userForm: FormGroup;
  selectedOption: string;

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

    this.selectedOption = '';
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
}
