import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { ILogin } from '../model/auth-interface'

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient,
    @Inject(ENV_TOKEN) private _environments,
  ) {}

  login(login: string, password: string): Observable<ILogin | IErrorRequest> {
    const data = {
      login: login,
      password: password
    }
    return this._http.post<ILogin | IErrorRequest>(`${this._environments.apiUrl}/api/auth/login`, data);
  }

}
