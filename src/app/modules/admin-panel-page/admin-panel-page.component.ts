import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-admin-panel-page',
  templateUrl: './admin-panel-page.component.html',
  styleUrls: ['./admin-panel-page.component.scss']
})
export class AdminPanelPageComponent implements OnInit, OnDestroy {

  private _subscription = new Subscription();

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this._subscription.add(this._authService.adminCheck().subscribe());
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
