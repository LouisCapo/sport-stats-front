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
  ],
  declarations: [
    AdminPanelPageComponent,
    NavigationBarComponent,
    EditFormComponent,
    AuthComponent,
  ],
  providers: [AuthService]
})
export class AdminPanelPageModule { }
