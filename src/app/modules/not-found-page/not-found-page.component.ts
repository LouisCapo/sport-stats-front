import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotFoundDialogComponent } from './components/not-found-dialog/not-found-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})

export class NotFoundPageComponent implements OnInit, OnDestroy {

  private _subscription: Subscription[] = [];

  constructor(private _matDialog: MatDialog, 
              private _router: Router,) {}

  ngOnInit() {
    const dialogRef = this._matDialog.open(NotFoundDialogComponent);
    this._subscription.push(dialogRef.afterClosed().subscribe((res) => {
      this._router.navigate(['/main']);
    }));
  }

  ngOnDestroy() {
    this._subscription.forEach(res => {
      res.unsubscribe();
    })
  }

}
