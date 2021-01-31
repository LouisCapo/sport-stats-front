import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeam } from '../model/team-interfaces'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

constructor() { }

  getTeam(id: string): Observable<ITeam> {
    return new Observable(res => {
      res.next({
        teamName: 'Natus Vincere',
        teamId: '123',
        sportType: 'Киберспорт',
        teamLogo:
          'https://img-cdn.hltv.org/teamlogo/kixzGZIb9IYAAv-1vGrGev.svg?ixlib=java-2.1.0&s=8f9986a391fcb1adfbfff021b824a937',
        teamMembers: [
          {
            memberNick: 's1mple',
            memberPhoto:
              'https://img-cdn.hltv.org/playerbodyshot/QaTkwUoBdKr120VPSlMUHO.png?ixlib=java-2.1.0&w=400&s=1177cfee474a3033a2857124b6ca8a3e',
            memberId: '123',
          },
          {
            memberNick: 's1mple',
            memberPhoto:
              'https://img-cdn.hltv.org/playerbodyshot/QaTkwUoBdKr120VPSlMUHO.png?ixlib=java-2.1.0&w=400&s=1177cfee474a3033a2857124b6ca8a3e',
            memberId: '123',
          },
          {
            memberNick: 's1mple',
            memberPhoto:
              'https://img-cdn.hltv.org/playerbodyshot/QaTkwUoBdKr120VPSlMUHO.png?ixlib=java-2.1.0&w=400&s=1177cfee474a3033a2857124b6ca8a3e',
            memberId: '123',
          },
          {
            memberNick: 's1mple',
            memberPhoto:
              'https://img-cdn.hltv.org/playerbodyshot/QaTkwUoBdKr120VPSlMUHO.png?ixlib=java-2.1.0&w=400&s=1177cfee474a3033a2857124b6ca8a3e',
            memberId: '123',
          },
          {
            memberNick: 's1mple',
            memberPhoto:
              'https://img-cdn.hltv.org/playerbodyshot/QaTkwUoBdKr120VPSlMUHO.png?ixlib=java-2.1.0&w=400&s=1177cfee474a3033a2857124b6ca8a3e',
            memberId: '123',
          },
        ],
        teamStats: [
          { title: 'Место в мировом рейтинге', value: '3' },
          { title: 'Средний возраст игроков', value: '22.5' },
        ],
        lastMatches: [
          {
            firstTeam: {
              teamName: 'Natus Vincere',
              teamLogo:
                'https://img-cdn.hltv.org/teamlogo/kixzGZIb9IYAAv-1vGrGev.svg?ixlib=java-2.1.0&s=8f9986a391fcb1adfbfff021b824a937',
              teamId: '123',
            },
            secondTeam: {
              teamName: 'Astralis',
              teamLogo:
                'https://img-cdn.hltv.org/teamlogo/9bgXHp-oh1oaXr7F0mTGmd.svg?ixlib=java-2.1.0&s=f567161ab183001be33948b98c4b2067',
              teamId: '321',
            },
            winningTeam: 'Astralis',
            matchScore: '2-1'
          },
        ],
      });
    })
  }

}
