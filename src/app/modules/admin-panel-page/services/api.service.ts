import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { IPlayer } from '../../player-page/model/player-interfaces';
import { ITeam, ITeamInfo } from '../../team-page/model/team-interfaces';
import { INewNews, INewPlayer, INewObjectId, ISportTypes, INewMatch, INewTeam, INews } from '../model/edit-panel-interface'

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

  editPlayer(playerInfo): Observable<INewObjectId | IErrorRequest>{
    return this._http.put<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/players/edit-player`, playerInfo);
  }

  getTeamById(id: string): Observable<ITeam | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this._http.get<ITeam | IErrorRequest>(`${this._environments.apiUrl}/api/teams/get-team`, { params });
  }

  getNewsById(id: string): Observable<INews | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this._http.get<INews | IErrorRequest>(`${this._environments.apiUrl}/api/news/get-news`, { params });
  }

  editNews(news): Observable<INewObjectId | IErrorRequest> {
    return this._http.put<INewObjectId | IErrorRequest>(`${this._environments.apiUrl}/api/news/edit-news`, news);
  }

}
