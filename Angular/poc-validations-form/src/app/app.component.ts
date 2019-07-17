import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
        ],
      email: ['', Validators.compose([Validators.email])],
      cpf: ['', Validators.compose([Validators.required])],
      nascimento: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required])],
      confirmarSenha: ['', Validators.compose([Validators.required])],
    });
  }

  enviarDados() {
    console.log(this.formularioDeUsuario.value);
  }
}
