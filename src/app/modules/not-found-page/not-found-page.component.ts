import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component'

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})

export class NotFoundPageComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();

  constructor(private _matDialog: MatDialog, 
              private _router: Router,) {}

  ngOnInit() {
    const dialogRef = this._matDialog.open(ErrorDialogComponent, {
      data: {
        error: false,
        errorMessage: 'Запрашиваемая страница не найдена :(',
        closeButtonLabel: 'На главную'
      }
    });
    this._subscription.add(dialogRef.afterClosed().subscribe((res) => {
      this._router.navigate(['/main']);
    }));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
