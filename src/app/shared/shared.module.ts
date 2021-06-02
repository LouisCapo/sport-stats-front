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
import {MatCardModule} from '@angular/material/card';
import {CardItemComponent} from './components/card-item/card-item.component'
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component'
import { ThemeService } from './services/theme.service'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

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
    MatCardModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
  providers: [ApiService, ThemeService],
  declarations: [InfoMessageComponent, ErrorDialogComponent, NavBarComponent, CardItemComponent, SearchDialogComponent],
  exports: [InfoMessageComponent, ErrorDialogComponent, NavBarComponent, CardItemComponent]
})
export class SharedModule { }
