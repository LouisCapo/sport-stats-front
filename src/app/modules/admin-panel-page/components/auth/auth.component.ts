import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  get loginErrorMessage(): string {
    if (this.loginControl.errors) {
      return this.loginControl.hasError('required') ? 'Пожалуйста введите логин.' : 'Длина логина должна быть минимум 5 символов.';
    }
    return null;
  }

  get passwordErrorMessage(): string {
    if (this.passwordControl.errors) {
      return this.passwordControl.hasError('required') ? 'Пожалуйста введите пароль.' : 'Длина пароля должна быть минимум 5 символов.';
    }
    return null;
  }

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  signIn(): void {
    if (this.loginControl.errors || this.passwordControl.errors) {
      this._snackBar.open('Заполните все поля!', 'Ок', {
        duration: 3000
      });
      return;
    }
  }

}
