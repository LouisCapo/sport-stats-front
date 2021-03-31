import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AdminPanelSections } from '../../admin-panel-enum.enum'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navBarOpen = false;
  panelSections = AdminPanelSections;
  selectedSection = this.panelSections.PLAYER;

  @Output() onSectionSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  togleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }

  openSelectedSection(item: number) {
    this.selectedSection = item;
    this.onSectionSelected.emit(item);
  }

}
