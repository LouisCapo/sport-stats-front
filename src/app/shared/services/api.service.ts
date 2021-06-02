import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV_TOKEN } from 'src/environments/environment';
import { IErrorRequest, ISearchResult } from '../model/api-inteface';

@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient,
    @Inject(ENV_TOKEN) private _environments,
  ) {}

  public searchCoincidence(value: string): Observable<ISearchResult | IErrorRequest> {
    const params = new HttpParams().set('value', value);
    return this._http.get<ISearchResult | IErrorRequest>(`${this._environments.apiUrl}/api/search/get-coincidence`, { params });
  }

}
