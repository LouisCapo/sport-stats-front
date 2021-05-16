import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayer } from '../../model/player-interfaces';
import { PlayerService } from '../../services/player.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IErrorRequest } from '../../../../shared/model/api-inteface';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { ErrorsService } from 'src/app/shared/services/errors.service';

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

  private _subscriptions = new Subscription();

  constructor(
    private _playerService: PlayerService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _matDialog: MatDialog,
    private _errorService: ErrorsService
  ) {}

  ngOnInit() {
    this._subscriptions.add(this._errorService.onServerError.subscribe(res => {
      if (res) {
        this.error = true;
        this.loading = false;
      }
    }))
    this._subscriptions.add(
      this._route.params.subscribe((res) => {
        this.playerId = res.id;
      })
    );
    this._subscriptions.add(
      this._playerService.getPlayer(this.playerId).subscribe(
        (res) => {
          if ((res as IErrorRequest).error) {
            this.error = true;
            const dialogRef = this._matDialog.open(ErrorDialogComponent, {
              data: {
                errorMessage: (res as IErrorRequest).error.msg,
                error: true,
                closeButtonLabel: 'На главную',
              },
            });
            this._subscriptions.add(
              dialogRef.afterClosed().subscribe((ev) => {
                this._router.navigate(['/main']);
              })
            );
          }
          this.playerInfo = res as IPlayer;
          this.loading = false;
        })
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  openTeamPage(teamId) {
    this._router.navigate([`/team/${teamId}`]);
  }

  openAchievementNews(newsId) {
    this._router.navigate([`/news/${newsId}`]);
  }
}
