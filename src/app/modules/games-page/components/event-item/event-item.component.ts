import { Component, Input, OnInit } from '@angular/core';
import { IMatchesListInterface } from '../../model/matches-list-interface';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() matchData: IMatchesListInterface;

  get gameScore() {
    if (this.matchData.score.firstTeam && this.matchData.score.secondTeam) {
      return `${this.matchData.score.firstTeam} : ${this.matchData.score.secondTeam}`
    }
    return null;
  }

  constructor() { }

  ngOnInit() {
  }

}
