import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { InfoMessageComponent } from './components/info-message/info-message.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [InfoMessageComponent, ErrorDialogComponent, NavBarComponent],
  exports: [InfoMessageComponent, ErrorDialogComponent, NavBarComponent]
})
export class SharedModule { }
