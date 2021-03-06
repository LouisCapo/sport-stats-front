import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule,
  ],
  declarations: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
