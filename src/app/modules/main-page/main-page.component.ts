import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ISportTypes } from '../admin-panel-page/model/edit-panel-interface';
import { ApiService } from './services/api.service';
import { WindowService } from '../../shared/services/window.service'
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  public sportTypeList: ISportTypes[];

  private _subscriptions = new Subscription();

  constructor(private _router: Router, 
              private _apiService: ApiService, 
              private _matDialog: MatDialog, 
              private _windowService: WindowService) { }

  ngOnInit() {
    this._router.navigate(['/main']);
    this._subscriptions.add(this._apiService.getSportTypeList().subscribe(res => {
      if ((res as IErrorRequest).error) {
        return this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: true,
            errorMessage: (res as IErrorRequest).error.msg,
            closeButtonLabel: 'Ок',
          },
        });
      }
      this.sportTypeList = (res as ISportTypes[]);
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

}
