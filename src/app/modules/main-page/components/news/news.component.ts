import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISportTypes } from 'src/app/modules/admin-panel-page/model/edit-panel-interface';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { INews } from '../../model/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() sportTypeList: ISportTypes[];

  selectedSportTypeCode = new FormControl('');
  isSportTypeSelectActive = true;
  newsList: INews[] = [];

  private _subscription = new Subscription()

  constructor(private _apiService: ApiService, private _matDialog: MatDialog) { }

  ngOnInit() {
    console.log(123);
    this.updateNewsList(-1);
    this._subscription.add(this.selectedSportTypeCode.valueChanges.subscribe(res => {
      this.updateNewsList(this.selectedSportTypeCode.value);
    }));
  }

  updateNewsList(sportTypeCode: number) {
    console.log(312)
    this.isSportTypeSelectActive = false;
    this._subscription.add(this._apiService.getNewsList(sportTypeCode).subscribe(newsList => {
      if ((newsList as IErrorRequest).error) {
        return this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: true,
            errorMessage: (newsList as IErrorRequest).error.msg,
            closeButtonLabel: 'Ок',
          },
        });
      }
      this.newsList = newsList as INews[];
      this.isSportTypeSelectActive = true;
    }))
  }

}
