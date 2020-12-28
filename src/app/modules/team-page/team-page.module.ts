import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './team-page.component';
import { TeamPageRoutingModule } from './team-page-routing.module'
import { TeamInfoComponent } from './components/team-info/team-info.component'

@NgModule({
  imports: [
    CommonModule,
    TeamPageRoutingModule,
  ],
  declarations: [TeamPageComponent, TeamInfoComponent]
})
export class TeamPageModule { }
