import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/modules/games-page/services/api.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { IErrorRequest, ISportTypes } from 'src/app/shared/model/api-inteface';
import { EnumTabs } from '../../model/tabs-enum'

@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.scss']
})
export class EventsCardComponent implements OnInit, OnDestroy {

  public selectedSportType = new FormControl('')
  public sportTypeList: ISportTypes[];
  public selectedTab = EnumTabs.UPCOMING;

  @Input() mathesListTemplate: TemplateRef<any>;

  @Output() onSportTypeChange = new EventEmitter<{sportTypeCode: Number, isCompleted: boolean}>();

  private _subscription = new Subscription();

  constructor(private _apiService: ApiService, 
              private _matDialog: MatDialog) { }

  ngOnInit() {
    this._subscription.add(this._apiService.getSportTypeList().subscribe(res => {
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
      this.selectedSportType.setValue(this.sportTypeList[0].code)
    }));
    this._subscription.add(this.selectedSportType.valueChanges.subscribe(res => {
      this.onSportTypeChange.emit({sportTypeCode: (res as Number), isCompleted: !!this.selectedTab});
    }));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onTabChange(event) {
    this.selectedTab = event.index;
    this.onSportTypeChange.emit({sportTypeCode: (this.selectedSportType.value as Number), isCompleted: !!this.selectedTab});
  }

}
