import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from '../model/team-interfaces';
import { IErrorRequest } from '../../../shared/model/api-inteface';
import { ENV_TOKEN } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TeamService {
  constructor(
    @Inject(ENV_TOKEN) private _environments,
    private http: HttpClient
  ) {}

  getTeam(id: string): Observable<ITeam | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this.http.get<ITeam | IErrorRequest>(
      `${this._environments.apiUrl}/api/teams/get-team`,
      { params }
    );
  }
}
