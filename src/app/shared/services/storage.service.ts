import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor() { }

  get userToken() {
    return localStorage.getItem('token');
  }

  set userToken(token) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.clear();
  }

}
