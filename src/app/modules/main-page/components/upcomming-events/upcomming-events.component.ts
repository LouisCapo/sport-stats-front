import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISportTypes } from 'src/app/modules/admin-panel-page/model/edit-panel-interface';
import { IMatchesList, IMatchListResponse } from 'src/app/modules/games-page/model/matches-list-interface';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-upcomming-events',
  templateUrl: './upcomming-events.component.html',
  styleUrls: ['./upcomming-events.component.scss']
})
export class UpcommingEventsComponent implements OnInit, OnDestroy {

  @Input() set sportTypeList(value: ISportTypes[]) {
    this.sportTypes = value;
    if (value?.length) {
      this.sportTypeControl.setValue(value[0].code);
    }
  }

  public sportTypeControl = new FormControl('');
  public sportTypes: ISportTypes[];
  public matchList: IMatchesList[];

  private _subscription = new Subscription();

  constructor(private _apiService: ApiService,
              private _matDialog: MatDialog) { }

  ngOnInit() {
    this._subscription.add(this.sportTypeControl.valueChanges.subscribe(res => {
      this._subscription.add(this._apiService.getUpcomingMatchList(res).subscribe(matchList => {
        if ((matchList as IMatchListResponse).data) {
          return this.matchList = (matchList as IMatchListResponse).data;
        }
        if ((matchList as IErrorRequest).error) {
          return this.matchList = [];
        }
      }));
    }))
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
