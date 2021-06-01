import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPageComponent } from './admin-panel-page.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './services/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ApiService } from './services/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreatingStatsComponent } from './components/creating-stats/creating-stats.component'
import { MatIconModule } from '@angular/material/icon';
import { NavMenuService } from './services/nav-menu.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  declarations: [
    AdminPanelPageComponent,
    NavigationBarComponent,
    EditFormComponent,
    AuthComponent,
    CreatingStatsComponent
  ],
  providers: [AuthService, ApiService, NavMenuService]
})
export class AdminPanelPageModule { }
