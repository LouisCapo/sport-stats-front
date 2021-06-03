import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { ISportTypes } from '../../admin-panel-page/model/edit-panel-interface';
import { IMatchListResponse } from '../../games-page/model/matches-list-interface';
import { INews } from '../model/interfaces';

@Injectable()

export class ApiService {

  constructor(@Inject(ENV_TOKEN) private _environments,
              private _http: HttpClient,) {}

  getSportTypeList(): Observable<ISportTypes[] | IErrorRequest> {
    return this._http.get<ISportTypes[] | IErrorRequest>(`${this._environments.apiUrl}/api/sport/sport-list`);
  }

  getNewsList(sportTypeCode: number): Observable<INews[] | IErrorRequest> {
    const params = new HttpParams().set('sportTypeCode', sportTypeCode.toString());
    return this._http.get<INews[] | IErrorRequest>(`${this._environments.apiUrl}/api/news/get-news-list`, { params });
  }

  getUpcomingMatchList(sportTypeCode: number): Observable<IMatchListResponse | IErrorRequest> {
    const params = new HttpParams().set('sportTypeCode', sportTypeCode.toString()).set('isCompleted', 'false');
    return this._http.get<IMatchListResponse | IErrorRequest>(`${this._environments.apiUrl}/api/games/games-list`, { params });
  }

}
