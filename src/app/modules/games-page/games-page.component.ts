import { Component, OnInit } from '@angular/core';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { IMatchesListInterface } from './model/matches-list-interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  public mathesList: IMatchesListInterface[] = [];
  public errorMessage = '';

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  }

  onSportTypeChange(data: {sportTypeCode: Number, isCompleted}) {
    this._apiService.getMatchesList(data.sportTypeCode, data.isCompleted).subscribe(res => {
      if ((res as IMatchesListInterface[]).length) {
        this.errorMessage = '';
        return this.mathesList = res as IMatchesListInterface[];
      }
      this.errorMessage = (res as IErrorRequest).error.msg;
    })
  }

}
