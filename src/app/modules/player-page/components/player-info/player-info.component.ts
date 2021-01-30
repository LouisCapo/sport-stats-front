import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPlayer } from '../../model/player-interfaces';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.scss']
})
export class PlayerInfoComponent implements OnInit, OnDestroy {

  @Input() playerId: string;

  playerInfo: IPlayer;

  get playerAchievements() {
    return this.playerInfo.playerAchievements.join(' | ');
  }

  private _subscriptions: Subscription[] = [];

  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
    this._subscriptions.push(this._playerService.getPlayer(this.playerId).subscribe(res => {
      this.playerInfo = res;
    }))
  }

  ngOnDestroy() {
    this._subscriptions.forEach(res => {
      res.unsubscribe();
    })
  }

}
