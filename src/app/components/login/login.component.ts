import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { CrudService } from 'src/app/services/crud.service';
import { Login } from './../../shared/login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private crud: CrudService) { }

  ngOnInit(): void {
    this.montaForm();
  }

  formLogin: FormGroup = null;
  dadosLogin: Login = null;

  montaForm() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.min(3), Validators.max(30), Validators.email]],
      senha: ['', [Validators.required, Validators.min(6), Validators.max(25)]]
    });
  }

  login() {
    this.dadosLogin = this.formLogin.value;
    
    this.crud.addData('/login/registra.php', this.dadosLogin).subscribe((res) => {
      console.log('Usuario encontrado', res);
    }, err => {
      console.error(err);
    })
  }
}
