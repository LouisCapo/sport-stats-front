import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

constructor(private _storageService: StorageService, private _router: Router) { }

  canActivate(): boolean {
    if (this._storageService.userToken) {
      return true;
    }
    this._storageService.logout();
    this._router.navigate(['/admin-panel/auth']);
    return false;
  }

}
