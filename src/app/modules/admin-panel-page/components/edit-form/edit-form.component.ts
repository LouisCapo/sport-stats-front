import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { INewPlayerId, ISportTypes } from '../../model/edit-panel-interface';
import { ApiService } from '../../services/api.service'
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorsService } from 'src/app/shared/services/errors.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatDate } from "@angular/common";
import { IPlayer } from 'src/app/modules/player-page/model/player-interfaces';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, OnDestroy {

  @Input() selectedSection;

  loading = true;
  error = false;
  sportTypesList: ISportTypes[];
  oldPlayerData: IPlayer;

  newPlayerForm = new FormGroup({
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    playerNick: new FormControl(''),
    sportTypeCode: new FormControl(''),
    playerBirthday: new FormControl(''),
    playerTeamId: new FormControl('', [
      Validators.minLength(24),
      Validators.maxLength(24),
    ]),
    playerPhoto: new FormControl('') ,
  });

  editPlayerForm = new FormGroup({
    playerId: new FormControl('', [
      Validators.minLength(24),
      Validators.maxLength(24),
    ]),
    playerName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    playerNick: new FormControl(''),
    sportTypeCode: new FormControl(''),
    playerTeamId: new FormControl('', [
      Validators.minLength(24),
      Validators.maxLength(24),
    ]),
    playerBirthday: new FormControl(''),
    playerPhoto: new FormControl(''),
  });

  get errorMessage(): string {
    if (this.newPlayerForm.controls.playerName.errors) {
      return this.newPlayerForm.controls.playerName.hasError('required') ? 'Заполните обязательное поле!' : 'Минимальная длина 5 символов!';
    }
  }

  private _subscriptions = new Subscription();

  constructor(
    private _apiService: ApiService,
    private _matDialog: MatDialog,
    private _router: Router,
    private _errorService: ErrorsService,
  ) {}

  ngOnInit() {
    this._subscriptions.add(this._errorService.onServerError.subscribe(res => {
      if (res) {
        this.loading = false;
        this.error = true;
      }
    }))
    this._subscriptions.add(
      this._apiService.getSportTypeList().subscribe((res) => {
        if ((res as IErrorRequest).error) {
          const dialogRef = this._matDialog.open(ErrorDialogComponent, {
            data: {
              error: true,
              errorMessage: (res as IErrorRequest).error.msg,
              closeButtonLabel: 'На главную',
            },
          });
          this._subscriptions.add(
            dialogRef.afterClosed().subscribe(() => {
              this._router.navigate(['/main']);
            })
          );
          return;
        }
        this.sportTypesList = res as ISportTypes[];
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  createNewPlayer() {
    const controls = this.newPlayerForm.controls;
    console.log(controls.playerName);
    console.log(controls.sportTypeCode)
    if (!this.error) {
      const data = {
        playerName: controls.playerName.value,
        playerNick: controls.playerNick.value ? controls.playerNick.value : null,
        sportTypeCode: controls.sportTypeCode.value.toString() ? controls.sportTypeCode.value : null,
        playerBirthday: controls.playerBirthday.value ? controls.playerBirthday.value : null,
        playerTeamId: controls.playerTeamId.value ? controls.playerTeamId.value : null,
        playerPhoto: controls.playerPhoto.value ? controls.playerPhoto.value : null,
      }
      this._apiService.createNewPlayer(data).subscribe(res => {
        if ((res as INewPlayerId).playerId) {
          this.clearForm(controls);
        }
        return this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: !(res as INewPlayerId).playerId,
            errorMessage: (res as INewPlayerId).playerId ? `Игрок создан, его id: ${(res as INewPlayerId).playerId}` : (res as IErrorRequest).error.msg,
            closeButtonLabel: 'Ок',
          },
        })
      })
    }
  }

  clearForm(controls): void {
    for(let key in controls) {
      controls[key].setValue('');
      controls[key].markAsUntouched();
    }
  }

  isControlsHaveError(controls) {
    for(let key in controls) {
      if (controls[key].errors) {
        return true;
      }
    }
    return false;
  }

  searchPlayer() {
    const controls = this.editPlayerForm.controls;
    if (controls.playerId.value) {
      this._subscriptions.add(this._apiService.getPlayerById(controls.playerId.value).subscribe(res => {
        if ((res as IErrorRequest).error) {
          this._matDialog.open(ErrorDialogComponent, {
            data: {
              error: true,
              errorMessage: (res as IErrorRequest).error.msg,
              closeButtonLabel: 'Ок'
            }
          })
          return this.clearForm(controls);
        }
        this.clearForm(controls);
        this.oldPlayerData = res as IPlayer;
        console.log(Date.parse((res as IPlayer).playerBirthday));
        controls.playerId.setValue(this.oldPlayerData.playerId);
        controls.playerName.setValue(this.oldPlayerData.playerName);
        controls.playerNick.setValue(this.oldPlayerData.playerNick);
        controls.playerTeamId.setValue(this.oldPlayerData.playerTeam?.teamId);
        controls.playerPhoto.setValue(this.oldPlayerData.playerPhoto);
        controls.playerBirthday.setValue(new Date(this.oldPlayerData.playerBirthday));
        controls.sportTypeCode.setValue(this.oldPlayerData.sportType.code);
      }))
    }
  }

  savePlayerChanges() {

  }

}
