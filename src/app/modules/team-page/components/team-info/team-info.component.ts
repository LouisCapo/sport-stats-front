import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITeam } from '../../model/team-interfaces'
import { TeamService } from '../../services/team.service'
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit, OnDestroy {

  teamId;
  teamInfo: ITeam;

  private _subscription: Subscription[] = [];

  constructor(private _teamService: TeamService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(res => {
      this.teamId = res.id;
    })
    this._subscription.push(this._teamService.getTeam(this.teamId).subscribe(res => {
      this.teamInfo = res;
    }))
  }

  ngOnDestroy() {
    this._subscription.forEach(res => {
      res.unsubscribe();
    })
  }

  openPlayerPage(playerId) {
    this._router.navigate([`/player/${playerId}`])
  }

}
