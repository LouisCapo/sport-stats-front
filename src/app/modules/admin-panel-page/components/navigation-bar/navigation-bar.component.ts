import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navBarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  togleNavBar(): void {
    this.navBarOpen = !this.navBarOpen;
  }

}
