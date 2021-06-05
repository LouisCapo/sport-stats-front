import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor(private _router: Router) { }

  get userToken() {
    return localStorage.getItem('token');
  }

  get theme() {
    return localStorage.getItem('theme');
  }

  set userToken(token) {
    localStorage.setItem('token', token);
  }

  set theme(theme: string) {
    localStorage.setItem('theme', theme);
  }

  logout() {
    this.clearToken();
    this._router.navigate(['/admin-panel/auth'])
  }

  clearToken() {
    localStorage.removeItem('token');
  }

}
