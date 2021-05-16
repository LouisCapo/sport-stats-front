import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsPageComponent } from './teams-page.component';
import { TeamsPageRoutingModule } from './teams-page-routing.module'
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    TeamsPageRoutingModule,
    SharedModule,
    MatCardModule,
    MatSelectModule,
  ],
  declarations: [TeamsPageComponent]
})
export class TeamsPageModule { }
