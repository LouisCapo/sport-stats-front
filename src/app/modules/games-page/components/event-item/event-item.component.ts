import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { IMatchesListInterface, ITeamInfo } from '../../model/matches-list-interface';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit, OnDestroy {

  @Input() matchData: IMatchesListInterface;

  public isLightThemeSelected: boolean;

  get gameScore() {
    if (this.matchData.score.firstTeam && this.matchData.score.secondTeam) {
      return `${this.matchData.score.firstTeam} : ${this.matchData.score.secondTeam}`
    }
    return null;
  }

  private _subscriptions = new Subscription();

  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this._subscriptions.add(this._themeService.onThemeChange.subscribe(res => {
      console.log(res)
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
