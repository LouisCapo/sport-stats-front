import { Component, OnInit } from '@angular/core';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { IMatchesList, IMatchListResponse } from './model/matches-list-interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  public mathesList: IMatchesList[] = [];
  public errorMessage = '';

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  onSportTypeChange(data: {sportTypeCode: Number, isCompleted}) {
    this._apiService.getMatchesList(data.sportTypeCode, data.isCompleted).subscribe(res => {
      if ((res as IMatchListResponse).data) {
        this.errorMessage = '';
        return this.mathesList = (res as IMatchListResponse).data;
      }
      this.errorMessage = (res as IErrorRequest).error.msg;
      this.mathesList = [];
    })
  }

}
