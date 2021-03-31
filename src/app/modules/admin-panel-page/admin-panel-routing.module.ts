import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelPageComponent } from './admin-panel-page.component'
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from '../../shared/services/auth-guard.service'

const routes: Routes = [
    {
			path: 'edit',
      component: AdminPanelPageComponent,
      canActivate: [AuthGuardService]
    }, {
      path: 'auth',
      component: AuthComponent,
    }, {
      path: '',
      component: AdminPanelPageComponent,
      canActivate: [AuthGuardService]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminPanelRoutingModule {}
