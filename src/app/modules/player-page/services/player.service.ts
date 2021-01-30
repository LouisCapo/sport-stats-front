import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../model/player-interfaces'
import { ApiService } from '../../../shared/services/api.service'
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

constructor(private _apiService: ApiService) { }

  getPlayer(id: string): Observable<IPlayer> {
    const params = new HttpParams().set('id', id);
    return this._apiService.playerRequest('get-player', params);
  }

}
