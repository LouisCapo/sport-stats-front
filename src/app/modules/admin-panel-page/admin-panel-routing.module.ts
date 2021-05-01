import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelPageComponent } from './admin-panel-page.component'
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from '../../shared/services/auth-guard.service'
import { EditFormComponent } from './components/edit-form/edit-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelPageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'edit',
        component: EditFormComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }, {
      path: 'auth',
      component: AuthComponent,
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminPanelRoutingModule {}
