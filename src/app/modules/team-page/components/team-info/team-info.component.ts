import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITeam } from '../../model/team-interfaces'
import { TeamService } from '../../services/team.service'

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit, OnDestroy {

  @Input() teamId: string;

  teamInfo: ITeam;

  private _subscription: Subscription[] = [];

  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this._subscription.push(this._teamService.getTeam(this.teamId).subscribe(res => {
      this.teamInfo = res;
    }))
  }

  ngOnDestroy() {
    this._subscription.forEach(res => {
      res.unsubscribe();
    })
  }

}
