import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesPageComponent } from './games-page.component';
import { GamesPageRoutingModule } from './games-page-routing.module'
import { EventsCardComponent } from './components/events-card/events-card.component'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {EventItemComponent} from './components/event-item/event-item.component'
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
  ],
  declarations: [
    GamesPageComponent,
    EventsCardComponent,
    EventItemComponent,
  ]
})
export class GamesPageModule { }
