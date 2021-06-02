import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { ISearchResult } from '../../model/api-inteface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public searchControl = new FormControl('');

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private _subscription = new Subscription();

  constructor(private _breakpointObserver: BreakpointObserver,
              private _apiService: ApiService,
              private _matDialog: MatDialog) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  public searchCoincidence():void {
    const value = this.searchControl.value;
    if (value) {
      this._subscription.add(this._apiService.searchCoincidence(value).subscribe((res: ISearchResult) => {
        if (res.data.length) {
          const dialogRef = this._matDialog.open(SearchDialogComponent, {
            data: {
              data: res.data
            },
          });
        }
      }));
    }
  }

}
