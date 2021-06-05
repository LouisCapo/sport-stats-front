import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ISportTypes } from '../../shared/model/api-inteface';
import { ITeamItem, ITeamListResponce } from './model/api-interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit, OnDestroy {

  public sportTypes: ISportTypes[];
  public sportTypeControl = new FormControl('');
  public teamList: ITeamItem[];
  public isDataLoading = false;
  public noMoreData = false;

  private _subscription = new Subscription();
  private _offset = 1;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this._subscription.add(this._apiService.getSportTypeList().subscribe(res => {
      if ((res as ISportTypes[]).length) {
        this.sportTypes = res as ISportTypes[];
        this.sportTypeControl.setValue(this.sportTypes[0].code);
      }
    }));
    this._subscription.add(this.sportTypeControl.valueChanges.subscribe(res => {
      this.isDataLoading = true;
      this._offset = 1;
      this.noMoreData = false;
      this._subscription.add(this._apiService.getTeamList(res, this._offset.toString()).subscribe(list => {
        if ((list as ITeamListResponce).data) {
          this.isDataLoading = false;
          return this.teamList = (list as ITeamListResponce).data;
        }
        this.isDataLoading = false;
        this.teamList = [];
      }));
    }))
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  loadMore() {
    this._offset++;
    this._subscription.add(this._apiService.getTeamList(this.sportTypeControl.value, this._offset.toString()).subscribe(list => {
      if ((list as ITeamListResponce).data.length) {
        this.isDataLoading = false;
        return this.teamList = this.teamList.concat((list as ITeamListResponce).data);
      }
      this.isDataLoading = false;
      this.noMoreData = true;
    }));
  }

}
