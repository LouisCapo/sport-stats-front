import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ISearching, ISearchResult } from '../../model/api-inteface';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ISearchResult, 
              private _router: Router, 
              private _dialogRef: MatDialogRef<SearchDialogComponent>) { }

  ngOnInit() {
  }

  redirectToItemPage(data: ISearching) {
    const redirectUrl = data.type === 'team' ? `/team/${data.id}` : `/player/${data.id}`;
    this._dialogRef.close();
    this._router.navigate([redirectUrl]);
  }

}
