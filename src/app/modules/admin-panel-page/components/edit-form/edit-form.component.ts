import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ISportTypes } from '../../model/edit-panel-interface';
import { ApiService } from '../../services/api.service'
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from 'src/app/shared/services/errors.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, OnDestroy {

  @Input() selectedSection;

  loading = true;
  error = false;
  sportTypesList: ISportTypes[];

  private _subscriptions = new Subscription();

  constructor(
    private _apiService: ApiService,
    private _matDialog: MatDialog,
    private _router: Router,
    private _errorService: ErrorsService,
  ) {}

  ngOnInit() {
    this._subscriptions.add(this._errorService.onServerError.subscribe(res => {
      if (res) {
        this.loading = false;
        this.error = true;
      }
    }))
    this._subscriptions.add(
      this._apiService.getSportTypeList().subscribe((res) => {
        if ((res as IErrorRequest).error) {
          const dialogRef = this._matDialog.open(ErrorDialogComponent, {
            data: {
              error: true,
              errorMessage: (res as IErrorRequest).error.msg,
              closeButtonLabel: 'На главную',
            },
          });
          this._subscriptions.add(
            dialogRef.afterClosed().subscribe(() => {
              this._router.navigate(['/main']);
            })
          );
          return;
        }
        this.sportTypesList = res as ISportTypes[];
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }
}
