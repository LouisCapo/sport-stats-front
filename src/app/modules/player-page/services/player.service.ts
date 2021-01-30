import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../model/player-interfaces'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

constructor() { }

  getPlayer(id: string): Observable<IPlayer> {
    return new Observable(res => {
      res.next({
        playerName: 'Александр Костылев',
        playerNick: 's1mple',
        playerId: '123',
        playerTeam: 'Natus Vincere',
        playerTeamIcon: 'https://img-cdn.hltv.org/teamlogo/kixzGZIb9IYAAv-1vGrGev.svg?ixlib=java-2.1.0&s=8f9986a391fcb1adfbfff021b824a937',
        playerAchievements: ['Топ 1(2018)', 'Топ 2(2019)', 'Топ 2(2020)'],
        playerStats: [{title: 'Рэйтинг 2.0', value: '1.27'}, {title: 'Сыграно карт', value: '70'}, {title: 'Процент хэдшотов', value: '38.5'}, {title: 'Количество убийств за раунд', value: '0.86'}]
      })
    })
  }

}
