import { Inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IPlayer } from '../model/player-interfaces'
import { ENV_TOKEN } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'
import { IErrorRequest } from '../../../shared/model/api-inteface'

@Injectable()
export class PlayerService {
  constructor(
    @Inject(ENV_TOKEN) private _environments,
    private http: HttpClient
  ) {}

  getPlayer(id: string): Observable<IPlayer | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this.http.get<IPlayer | IErrorRequest>(
      `${this._environments.apiUrl}/api/players/get-player`,
      { params }
    );
  }
}
