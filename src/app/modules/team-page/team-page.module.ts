import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './team-page.component';
import { TeamPageRoutingModule } from './team-page-routing.module'
import { TeamInfoComponent } from './components/team-info/team-info.component'
import { TeamService } from '../team-page/services/team.service'
@NgModule({
  imports: [
    CommonModule,
    TeamPageRoutingModule,
  ],
  declarations: [TeamPageComponent, TeamInfoComponent],
  providers: [TeamService]
})
export class TeamPageModule { }
