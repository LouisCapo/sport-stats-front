import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { ISportTypes } from '../../model/edit-panel-interface';
import { ApiService } from '../../services/api.service'
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  @Input() selectedSection;
  sportTypesList: ISportTypes[]

  constructor(private _apiService: ApiService, private _matDialog: MatDialog, private _router: Router) { }

  ngOnInit() {
    this._apiService.getSportTypeList().subscribe(res => {
      if ((res as IErrorRequest).error) {
        const dialogRef = this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: true,
            errorMessage: (res as IErrorRequest).error.msg,
            closeButtonLabel: 'На главную',
          }
        })
        dialogRef.afterClosed().subscribe(() => {
          this._router.navigate(['/main']);
        })
      }
      this.sportTypesList = res as ISportTypes[];
    })
  }

}
