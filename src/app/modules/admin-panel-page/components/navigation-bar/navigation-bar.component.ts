import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { AdminPanelSections } from '../../admin-panel-enum.enum'
import { NavMenuService } from '../../services/nav-menu.service'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  public isLightThemeSelected: boolean;
  public navBarOpen = false;
  public panelSections = AdminPanelSections;
  public selectedSection = AdminPanelSections.PLAYER;

  private _subscription = new Subscription();

  constructor(private _navMenuService: NavMenuService, 
              private _themeService: ThemeService) { }

  ngOnInit() {
    this._subscription.add(this._themeService.onThemeChange.subscribe(res => {
      this.isLightThemeSelected = !!res;
    }))
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  togleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }

  openSelectedSection(item: number) {
    this.selectedSection = item;
    this._navMenuService.onMenuItemSelected.next(item);
  }

}
