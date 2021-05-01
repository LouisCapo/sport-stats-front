import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { AdminPanelSections } from '../../admin-panel-enum.enum'
import { NavMenuService } from '../../services/nav-menu.service'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navBarOpen = false;
  panelSections = AdminPanelSections;
  selectedSection = this.panelSections.PLAYER;

  constructor(private _navMenuService: NavMenuService) { }

  ngOnInit() {
  }

  togleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }

  openSelectedSection(item: number) {
    this.selectedSection = item;
    this._navMenuService.onMenuItemSelected.next(item);
  }

}
