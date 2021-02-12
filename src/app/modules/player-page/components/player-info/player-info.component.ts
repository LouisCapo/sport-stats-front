import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayer } from '../../model/player-interfaces';
import { PlayerService } from '../../services/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IErrorRequest } from '../../../../shared/model/api-inteface'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
})
export class PlayerInfoComponent implements OnInit, OnDestroy {
  playerId: string;
  playerInfo: IPlayer;
  loading = true;
  errorInfo: IErrorRequest;

  private _subscriptions: Subscription[] = [];

  constructor(
    private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._subscriptions.push(
      this._route.params.subscribe((res) => {
        this.playerId = res.id;
      })
    );
    this._subscriptions.push(
      this._playerService.getPlayer(this.playerId).subscribe((res) => {
        console.log(res);
        if ((res as IErrorRequest).error) {
          this.errorInfo = res as IErrorRequest;
        }
        this.playerInfo = res as IPlayer;
        this.loading = false;
      }, (err: HttpErrorResponse) => {
        this.errorInfo = {error: {
          code: -1,
          msg: `К сожалению сервис не доступен в данный момент :(\r\nПопробуйте позже.`
        }}
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach((res) => {
      res.unsubscribe();
    });
  }

  openTeamPage(teamId) {
    this._router.navigate([`/team/${teamId}`]);
  }

  openAchievementNews(newsId) {
    this._router.navigate([`/news/${newsId}`]);
  }
}
