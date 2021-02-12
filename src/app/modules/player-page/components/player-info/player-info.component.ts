import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayer } from '../../model/player-interfaces';
import { PlayerService } from '../../services/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IErrorRequest } from '../../../../shared/model/api-inteface'
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component'

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss'],
})
export class PlayerInfoComponent implements OnInit, OnDestroy {
  playerId: string;
  playerInfo: IPlayer;
  loading = true;
  error = false;

  private _subscriptions: Subscription[] = [];

  constructor(
    private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _matDialog: MatDialog,
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
          this.error = true;
          this._matDialog.open(ErrorDialogComponent, {
            data: {
              errorMessage: (res as IErrorRequest).error.msg,
              error: true,
            }
          });
        }
        this.playerInfo = res as IPlayer;
        this.loading = false;
      }, (err: HttpErrorResponse) => {
        this.error = true;
        this._matDialog.open(ErrorDialogComponent, {
          data: {
            errorMessage: 'К сожалению сервис не доступен в данный момент :(\r\nПопробуйте позже.',
            error: true,
          }
        });
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
