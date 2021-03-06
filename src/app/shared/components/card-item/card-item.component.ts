import { Component, Input, OnInit } from '@angular/core';
import { ITeamMember } from 'src/app/modules/teams-page/model/api-interface';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  public extended = false;
  public isLightThemeActive;

  @Input() title: string;
  @Input() photo: string;
  @Input() id: string
  @Input() expandable: boolean = false;
  @Input() memberList: ITeamMember[];

  get icon() {
    return this.extended ? 'expand_less' : 'expand_more'
  }

  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this._themeService.onThemeChange.subscribe(res => {
      this.isLightThemeActive = !!res;
    })
  }

}
