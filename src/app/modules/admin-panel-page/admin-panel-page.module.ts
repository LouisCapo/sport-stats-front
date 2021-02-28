import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelPageComponent } from './admin-panel-page.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module'
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { EditFormComponent } from './components/edit-form/edit-form.component'

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatSidenavModule
  ],
  declarations: [
    AdminPanelPageComponent,
    NavigationBarComponent,
    EditFormComponent
  ]
})
export class AdminPanelPageModule { }
