import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';

@Component({
  selector: 'app-upcomming-events-item',
  templateUrl: './upcomming-events-item.component.html',
  styleUrls: ['./upcomming-events-item.component.scss']
})
export class UpcommingEventsItemComponent implements OnInit, OnDestroy {

  @Input() date: string;
  @Input() firstMember;
  @Input() secondMember;

  public isLightThemeSelected: boolean;

  private _subscription = new Subscription();

  constructor(private _themeService: ThemeService) { }

  ngOnInit() {
    this._subscription.add(this._themeService.onThemeChange.subscribe(res => {
      this.isLightThemeSelected = !!res;
    }));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
