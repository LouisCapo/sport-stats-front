import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayer } from '../../model/player-interfaces';
import { PlayerService } from '../../services/player.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit, OnDestroy {

  playerId;
  playerInfo: IPlayer;
  loading = true;

  get playerAchievements() {
    return this.playerInfo.playerAchievements.join(' | ');
  }

  private _subscriptions: Subscription[] = [];

  constructor(private _playerService: PlayerService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(res => {
      this.playerId = res.id;
    })
    this._subscriptions.push(this._playerService.getPlayer(this.playerId).subscribe(res => {
      this.playerInfo = res;
      this.loading = false;
    }))
  }

  ngOnDestroy() {
    this._subscriptions.forEach(res => {
      res.unsubscribe();
    })
  }

  openTeamPage(teamId) {
    this._router.navigate([`/team/${teamId}`])
  }

}
