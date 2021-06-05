import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ThemeService } from './shared/services/theme.service';
import { WindowService } from './shared/services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  public selectedTheme: number;

  private _subscription = new Subscription();

  constructor(private _themeService: ThemeService, private _windowService: WindowService) {
  }

  ngOnInit() {
    this._subscription.add(this._themeService.onThemeChange.subscribe(res => {
      this.selectedTheme = res;
    }));
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._windowService.onWindowResize.next({height: event.target.innerHeight, width: event.target.innerWidth })
  }
}
