import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { ENV_TOKEN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(@Inject(ENV_TOKEN) private _environments, 
            private http: HttpClient) { }

  playerRequest(path: string, params: HttpParams): Observable<any>{
    return this.http.get(`${this._environments.apiUrl}/api/players/${path}`, {params});
  }

}
