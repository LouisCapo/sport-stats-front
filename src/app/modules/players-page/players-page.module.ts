import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersPageComponent } from './players-page.component';
import { PlayersPageRoutingModule } from './players-page-routing.module'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlayersPageRoutingModule,
    MatCardModule,
    MatSelectModule,
    SharedModule,
  ],
  declarations: [PlayersPageComponent]
})
export class PlayersPageModule { }
