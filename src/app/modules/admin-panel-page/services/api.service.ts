import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { IPlayer } from '../../player-page/model/player-interfaces';
import { INewNews, INewPlayer, INewObjectId, ISportTypes, INewMatch, INewTeam } from '../model/edit-panel-interface'

@Injectable()
export class ApiService {

  constructor(
    private _http: HttpClient,
    @Inject(ENV_TOKEN) private _environments,
  ) {}

  getSportTypeList(): Observable<ISportTypes[] | IErrorRequest> {
    return this._http.get<ISportTypes[] | IErrorRequest>(`${this._environments.apiUrl}/api/sport/sport-list`);
  }

  createNewPlayer(player: INewPlayer): Observable<INewObjectId | IErrorRequest> {
    return this._http.post<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/players/create-player`, player);
  }

  getPlayerById(id: string): Observable<IPlayer | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this._http.get<IPlayer | IErrorRequest>(
      `${this._environments.apiUrl}/api/players/get-player`,
      { params }
    );
  }

  createNewNews(news: INewNews): Observable<INewObjectId | IErrorRequest> {
    return this._http.post<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/news/create-news`, news);
  }

  createMatch(matchInfo: INewMatch): Observable<INewObjectId | IErrorRequest> {
    return this._http.post<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/games/create-match`, matchInfo);
  }

  createTeam(teamInfo: INewTeam): Observable<INewObjectId | IErrorRequest> {
    return this._http.post<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/teams/create-team`, teamInfo);
  }

}
