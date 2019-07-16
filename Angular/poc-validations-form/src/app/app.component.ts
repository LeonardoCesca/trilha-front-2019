import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
      nome: [''],
      email: [''],
      cpf: [''],
      nascimento: [''],
      senha: [''],
      confirmarSenha: [''],
    });
  }

  enviarDados() {
    console.log(this.formularioDeUsuario.value);
  }
}
