import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { IMatchesList, ITeamInfo } from '../../model/matches-list-interface';
import { HelperService } from '../../../../shared/services/helper.service'

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit, OnDestroy {

  @Input() matchData: IMatchesList;

  public isLightThemeSelected: boolean;

  get gameScore() {
    if (!this._helperService.isNullOrUndefined(this.matchData.score.firstTeam) && !this._helperService.isNullOrUndefined(this.matchData.score.secondTeam)) {
      return `${this.matchData.score.firstTeam} : ${this.matchData.score.secondTeam}`
    }
    return null;
  }

  private _subscriptions = new Subscription();

  constructor(private _themeService: ThemeService, 
              private _helperService: HelperService) { }

  ngOnInit() {
    this._subscriptions.add(this._themeService.onThemeChange.subscribe(res => {
      this.isLightThemeSelected = !!res;
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  getTeamPage(team: ITeamInfo): string {
    return `/team/${team.teamId}`
  }

}
