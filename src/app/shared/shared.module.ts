import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { InfoMessageComponent } from './components/info-message/info-message.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
  ],
  declarations: [HeaderComponent, InfoMessageComponent, ErrorDialogComponent],
  exports: [HeaderComponent, InfoMessageComponent, ErrorDialogComponent]
})
export class SharedModule { }
