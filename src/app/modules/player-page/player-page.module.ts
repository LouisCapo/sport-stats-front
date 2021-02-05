import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './player-page.component';
import { PlayerPageRoutingModule } from './player-page-routing.module'
import { PlayerInfoComponent } from './components/player-info/player-info.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlayerService } from '../player-page/services/player.service'
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    PlayerPageRoutingModule,
    MatProgressSpinnerModule,
    SharedModule
  ],
  providers: [PlayerService],
  declarations: [PlayerPageComponent, PlayerInfoComponent]
})
export class PlayerPageModule { }
