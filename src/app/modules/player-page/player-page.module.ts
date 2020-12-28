import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPageComponent } from './player-page.component';
import { PlayerPageRoutingModule } from './player-page-routing.module'
import { PlayerInfoComponent } from './components/player-info/player-info.component'

@NgModule({
  imports: [
    CommonModule,
    PlayerPageRoutingModule
  ],
  declarations: [PlayerPageComponent, PlayerInfoComponent]
})
export class PlayerPageModule { }
