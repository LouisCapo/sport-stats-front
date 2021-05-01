import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { INewObjectId, ISportTypes } from '../../model/edit-panel-interface';
import { ApiService } from '../../services/api.service'
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorsService } from 'src/app/shared/services/errors.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPlayer } from 'src/app/modules/player-page/model/player-interfaces';
import { AdminPanelSections } from '../../admin-panel-enum.enum';
import { NavMenuService } from '../../services/nav-menu.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit, OnDestroy {

  selectedSection = 1;
  panelSections = AdminPanelSections;
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
    playerPhoto: new FormControl(''),
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

  createNewsForm = new FormGroup({
    newsTitle: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    newsSportTypeCode: new FormControl(''),
    newsSubTitle: new FormControl('', [
      Validators.required,
    ]),
    newsText: new FormControl('', [
      Validators.required,
    ]),
    newsPhoto: new FormControl(''),
  })

  get errorMessage(): string {
    if (this.newPlayerForm.controls.playerName.errors) {
      return this.newPlayerForm.controls.playerName.hasError('required')
        ? 'Заполните обязательное поле!'
        : 'Минимальная длина 5 символов!';
    }
  }

  private _subscriptions = new Subscription();

  constructor(
    private _apiService: ApiService,
    private _matDialog: MatDialog,
    private _router: Router,
    private _errorService: ErrorsService,
    private _navMenuService: NavMenuService,
  ) {}

  ngOnInit() {
    this._subscriptions.add(
      this._errorService.onServerError.subscribe((res) => {
        if (res) {
          this.loading = false;
          this.error = true;
        }
      })
    );
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
    this._subscriptions.add(this._navMenuService.onMenuItemSelected.subscribe(res => {
      this.selectedSection = res;
    }));
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  createNewPlayer() {
    const controls = this.newPlayerForm.controls;
    if (!this.error) {
      const data = {
        playerName: controls.playerName.value,
        playerNick: controls.playerNick.value
          ? controls.playerNick.value
          : null,
        sportTypeCode: controls.sportTypeCode.value.toString()
          ? controls.sportTypeCode.value
          : null,
        playerBirthday: controls.playerBirthday.value
          ? controls.playerBirthday.value
          : null,
        playerTeamId: controls.playerTeamId.value
          ? controls.playerTeamId.value
          : null,
        playerPhoto: controls.playerPhoto.value
          ? controls.playerPhoto.value
          : null,
      };
      this._apiService.createNewPlayer(data).subscribe((res) => {
        if ((res as INewObjectId).id) {
          this.clearForm(controls);
        }
        return this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: !(res as INewObjectId).id,
            errorMessage: (res as INewObjectId).id
              ? `Игрок создан, его id: ${(res as INewObjectId).id}`
              : (res as IErrorRequest).error.msg,
            closeButtonLabel: 'Ок',
          },
        });
      });
    }
  }

  clearForm(controls): void {
    for (let key in controls) {
      controls[key].setValue('');
      controls[key].markAsUntouched();
    }
  }

  isControlsHaveError(controls) {
    for (let key in controls) {
      if (controls[key].errors) {
        return true;
      }
    }
    return false;
  }

  searchPlayer() {
    const controls = this.editPlayerForm.controls;
    if (controls.playerId.value) {
      this._subscriptions.add(
        this._apiService
          .getPlayerById(controls.playerId.value)
          .subscribe((res) => {
            if ((res as IErrorRequest).error) {
              this._matDialog.open(ErrorDialogComponent, {
                data: {
                  error: true,
                  errorMessage: (res as IErrorRequest).error.msg,
                  closeButtonLabel: 'Ок',
                },
              });
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
          })
      );
    }
  }

  savePlayerChanges() {}

  changeStats(event, index) {
    this.oldPlayerData.playerStats[index] = event;
  }

  addNewStats() {
    this.oldPlayerData.playerStats.push({title: '', value: ''});
  }

  deleteStats(index) {
    this.oldPlayerData.playerStats.splice(index, 1);
  }

  createNewNews() {
    const controls = this.createNewsForm.controls;
    if (!this.isControlsHaveError(controls)) {
      const data = {
        newsTitle: controls.newsTitle.value,
        newsSubTitle: controls.newsSubTitle.value,
        newsText: controls.newsText.value,
        newsSportTypeCode: controls.newsSportTypeCode.value.toString() ? controls.newsSportTypeCode.value : null,
        newsPhoto: controls.newsPhoto.value ? controls.newsPhoto.value : null,
      }
      this._subscriptions.add(this._apiService.createNewNews(data).subscribe(res => {
        if ((res as INewObjectId).id) {
          this.clearForm(controls);
        }
        return this._matDialog.open(ErrorDialogComponent, {
          data: {
            error: !(res as INewObjectId).id,
            errorMessage: (res as INewObjectId).id
              ? `Новость создана, ее id: ${(res as INewObjectId).id}`
              : (res as IErrorRequest).error.msg,
            closeButtonLabel: 'Ок',
          },
        });
      }))
    }
  }

}
