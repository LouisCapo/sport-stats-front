import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './team-page.component';
import { TeamPageRoutingModule } from './team-page-routing.module'
import { TeamInfoComponent } from './components/team-info/team-info.component'
import { TeamService } from '../team-page/services/team.service'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    TeamPageRoutingModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  declarations: [TeamPageComponent, TeamInfoComponent],
  providers: [TeamService]
})
export class TeamPageModule { }
