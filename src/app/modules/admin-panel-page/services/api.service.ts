import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { ISportTypes } from '../model/edit-panel-interface'

@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient,
    @Inject(ENV_TOKEN) private _environments,
  ) {}

  getSportTypeList(): Observable<ISportTypes[] | IErrorRequest> {
    return this._http.get<ISportTypes[] | IErrorRequest>(`${this._environments.apiUrl}/api/sport/sport-list`);
  }

}
