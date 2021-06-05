import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest, ISportTypes } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { ITeamListResponce } from '../model/api-interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(@Inject(ENV_TOKEN) private _environments,
              private _http: HttpClient,) {}

  getSportTypeList(): Observable<ISportTypes[] | IErrorRequest> {
    return this._http.get<ISportTypes[] | IErrorRequest>(`${this._environments.apiUrl}/api/sport/sport-list`);
  }

  getTeamList(sportTypeCode: number, offset?: string): Observable<ITeamListResponce | IErrorRequest> {
    const params = new HttpParams().set('sportTypeCode', sportTypeCode.toString()).set('offset', offset)
    return this._http.get<ITeamListResponce | IErrorRequest>(`${this._environments.apiUrl}/api/teams/team-list`, { params });
  }

}
