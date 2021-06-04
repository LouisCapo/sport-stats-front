import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  public onServerError = new BehaviorSubject(null);

  private _isErrorDialogOpened = false;

  constructor(private _matDialog: MatDialog) { }

  openErrorDialog() {
    if (!this._isErrorDialogOpened) {
      const dialogRef = this._matDialog.open(ErrorDialogComponent, {
        data: {
          errorMessage:
            'К сожалению сервис не доступен в данный момент :(\r\nПопробуйте позже.',
          error: true,
        },
      });
      this._isErrorDialogOpened = true;
      dialogRef.afterClosed().subscribe(res => {
        this._isErrorDialogOpened = false;
        this.onServerError.next(false);
      })
      this.onServerError.next(true);
    }
  }

}
