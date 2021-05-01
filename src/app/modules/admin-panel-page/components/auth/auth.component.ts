import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILogin } from '../../model/auth-interface';
import { AuthService } from '../../services/auth.service'
import { StorageService } from '../../../../shared/services/storage.service'
import { Router } from '@angular/router';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {

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
      return this.loginControl.hasError('required')
        ? 'Пожалуйста введите логин.'
        : 'Длина логина должна быть минимум 5 символов.';
    }
    return null;
  }

  get passwordErrorMessage(): string {
    if (this.passwordControl.errors) {
      return this.passwordControl.hasError('required')
        ? 'Пожалуйста введите пароль.'
        : 'Длина пароля должна быть минимум 5 символов.';
    }
    return null;
  }

  private _subscriptions = new Subscription();

  constructor(
    private _snackBar: MatSnackBar,
    private _authService: AuthService,
    private _storageService: StorageService,
    private _router: Router,
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    if (this._storageService.userToken) {
      this._router.navigate(['/admin-panel/edit'])
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  signIn(): void {
    if (this.loginControl.errors || this.passwordControl.errors) {
      this._snackBar.open('Заполните все поля!', 'Ок', {
        duration: 3000,
      });
      return;
    }
    this._subscriptions.add(this._authService
      .login(this.loginControl.value, this.passwordControl.value)
      .subscribe((res) => {
        if ((res as ILogin).token) {
          this._storageService.userToken = (res as ILogin).token;
          this._router.navigate(['/admin-panel/edit']);
          return;
        }
        this.loginControl.setValue('');
        this.passwordControl.setValue('');
        this._storageService.logout();
        this._snackBar.open((res as IErrorRequest).error.msg, 'Ок', {
          duration: 3000,
        })
      }));
  }
}
