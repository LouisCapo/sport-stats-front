import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { IMatchesList, IMatchListResponse } from './model/matches-list-interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit, OnDestroy {

  public mathesList: IMatchesList[] = [];
  public errorMessage = '';
  public isDataLoading = false;
  public noDataMore = false;

  private _subscription = new Subscription();

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onSportTypeChange(data: {sportTypeCode: Number, isCompleted: boolean}) {
    this.noDataMore = false;
    this.mathesList = [];
    this.isDataLoading = true;
    this._subscription.add(this._apiService.getMatchesList(data.sportTypeCode, data.isCompleted).subscribe(res => {
      if ((res as IMatchListResponse).data) {
        this.isDataLoading = false;
        this.errorMessage = '';
        return this.mathesList = (res as IMatchListResponse).data;
      }
      this.errorMessage = (res as IErrorRequest).error.msg;
      this.mathesList = [];
      this.isDataLoading = false;
    }));
  }

  loadMore(data: {sportTypeCode: Number, isCompleted: boolean, offset: number}) {
    this.noDataMore = false;
    this._subscription.add(this._apiService.getMatchesList(data.sportTypeCode, data.isCompleted, data.offset.toString()).subscribe(res => {
      if ((res as IMatchListResponse).data) {
        return this.mathesList = this.mathesList.concat((res as IMatchListResponse).data);
      }
      this.noDataMore = true;
    }));
  }

}
