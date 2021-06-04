import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesPageComponent } from './games-page.component';
import { GamesPageRoutingModule } from './games-page-routing.module'
import { EventsCardComponent } from './components/events-card/events-card.component'
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {EventItemComponent} from './components/event-item/event-item.component'
import {MatTabsModule} from '@angular/material/tabs';
import { ApiService } from './services/api.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    GamesPageComponent,
    EventsCardComponent,
    EventItemComponent,
  ],
  providers: [ApiService]
})
export class GamesPageModule { }
