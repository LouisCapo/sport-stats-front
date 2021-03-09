import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { StorageService } from './storage.service'
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _storageService: StorageService, private _errorService: ErrorsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._storageService.userToken) {
      req = req.clone({
        setHeaders: {
          authorization: this._storageService.userToken
        }
      });
    }
    return next.handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 403 || err.status === 401) {
            this._storageService.logout();
          } if (err.status === 0) {
            this._errorService.openErrorDialog();
            this._storageService.clearToken();
          }
          return EMPTY
        })
      );
  }
}