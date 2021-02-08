import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { INews } from '../model/news-interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ENV_TOKEN } from 'src/environments/environment';

@Injectable()
export class NewsService {
  constructor(
    @Inject(ENV_TOKEN) private _environments,
    private http: HttpClient
  ) {}

  getNews(id: string): Observable<INews | IErrorRequest> {
    const params = new HttpParams().set('id', id);
    return this.http.get<INews | IErrorRequest>(
      `${this._environments.apiUrl}/api/news/get-news`,
      { params }
    );
  }
}
