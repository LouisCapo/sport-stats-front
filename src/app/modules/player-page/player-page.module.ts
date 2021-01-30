import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './player-page.component';
import { PlayerPageRoutingModule } from './player-page-routing.module'
import { PlayerInfoComponent } from './components/player-info/player-info.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    PlayerPageRoutingModule,
    MatProgressSpinnerModule,
  ],
  declarations: [PlayerPageComponent, PlayerInfoComponent]
})
export class PlayerPageModule { }
