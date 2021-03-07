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

  set userToken(token) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['/admin-panel/auth'])
  }

}
