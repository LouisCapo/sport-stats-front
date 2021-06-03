import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IErrorRequest, ISportTypes } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { IMatchListResponse } from '../model/matches-list-interface'

@Injectable()

export class ApiService {

constructor(@Inject(ENV_TOKEN) private _environments,
            private _http: HttpClient,) {}

  getSportTypeList(): Observable<ISportTypes[] | IErrorRequest> {
    return this._http.get<ISportTypes[] | IErrorRequest>(`${this._environments.apiUrl}/api/sport/sport-list`);
  }

  getMatchesList(sportTypeCode: Number, isComplited: Boolean): Observable<IMatchListResponse | IErrorRequest> {
    const params = new HttpParams().set('sportTypeCode', sportTypeCode.toString()).set('isCompleted', isComplited.toString());
    return this._http.get<IMatchListResponse | IErrorRequest>(`${this._environments.apiUrl}/api/games/games-list`, { params });
  }

}
