import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  onServerError = new BehaviorSubject(null);

  constructor(private _matDialog: MatDialog) { }

  openErrorDialog() {
    this._matDialog.open(ErrorDialogComponent, {
      data: {
        errorMessage:
          'К сожалению сервис не доступен в данный момент :(\r\nПопробуйте позже.',
        error: true,
      },
    });
    this.onServerError.next(true);
  }

}
