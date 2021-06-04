import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITeam, ITeamMember, ITeamInfo } from '../../model/team-interfaces';
import { TeamService } from '../../services/team.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { IErrorRequest } from 'src/app/shared/model/api-inteface';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../../shared/components/error-dialog/error-dialog.component';
import { ErrorsService } from 'src/app/shared/services/errors.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit, OnDestroy {
  teamId: string;
  teamInfo: ITeam;
  error: boolean;
  loading = true;

  private _subscription = new Subscription();

  constructor(
    private _teamService: TeamService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _matDialog: MatDialog,
    private _errorService: ErrorsService,
  ) {}

  ngOnInit() {
    this._subscription.add(this._errorService.onServerError.subscribe(res => {
      if (res) {
        this.error = true;
        this.loading = false;
      }
    }))
    this._subscription.add(
      this._route.params.subscribe((res) => {
        this.teamId = res.id;
        this._subscription.add(
          this._teamService.getTeam(this.teamId).subscribe(
            (res) => {
              if ((res as IErrorRequest).error) {
                this.error = true;
                const dialogRef = this._matDialog.open(ErrorDialogComponent, {
                  data: {
                    error: true,
                    errorMessage: (res as IErrorRequest).error.msg,
                    closeButtonLabel: 'На главную',
                  },
                });
                this._subscription.add(
                  dialogRef.afterClosed().subscribe((ev) => {
                    this._router.navigate(['/main']);
                  })
                );
              }
              this.teamInfo = res as ITeam;
              this.loading = false;
            })
        );
      })
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  getPlayerPageLink(playerInfo: ITeamMember): string {
    return `/player/${playerInfo.memberId}`;
  }

  getTeamPageLink(teamInfo: ITeamInfo): string {
    return `/team/${teamInfo.teamId}`;
  }
}
